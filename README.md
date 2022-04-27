# Account drainer bot (have some bugs and not purely complete)

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/drain.js
npx hardhat help
```

In order to run you should create .env file and add 
```shell
NETWORK_KEY = YOUR_ETHEREUM_API_PROVIDER_KEY
KEY = 0xprivatekey1,0xprivatekey2,0xprivatekey3
```
