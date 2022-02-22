
# Address


```
ethKovanOracle deployed to: 0xFEF2EeDA0010909D7b2F7049faAe9CABca6FFc53
magicInternetMoney deployed to: 0xbe5fEB22A344bB0Da390f612Cb019c2C20612544
minimalTimeLock deployed to: 0x89815636eBc21314F7b151C938BF042Ae4bCa7f4
spell deployed to: 0xca805e210f3b0ebd3F6cDd40E826F1b637de9d78
spellPower deployed to: 0x3F7c8b24EB049DE6769db09f89499f81B1D4d784
timePower deployed to: 0xE2C2738C5dd4cC4a39Da8012aFa675AB1596B620
bentoBox1 deployed to: 0xa33448697a8CB9483FeEE3e5aCfa5882452AD278
sSpell deployed to: 0xEAE3Aa4C61143429da7874190248c88eA6c1f8B0
cauldronMediumRiskV1 deployed to:  0x7C071318C4834cb1AB086C428Aa0dbcA4Bdf7fd8
```


# Hardhat Project Scripts

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
