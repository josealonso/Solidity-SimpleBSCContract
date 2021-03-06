### Simple token to be deployed on BSC testnet

Requirements:

- Name: Test7
- Symbol: TST7
- Initial supply: 1,000 millions (1 American billion).
- Minteable by the owner
- Burneable by the owner.
- The front end shows the balance of both TST7 and BNB tokens.
-----------------------------------------------------------------

#### Steps

Versions used ---> Truffle v5.4.1. Node v16.4.0

```
git init
```

Start the private blockchain 

```
ganache-cli --networkId 1337 --chainId 1337
```

Create the structure of the project

```
truffle init
```

Create Test7Token.sol inside the contracts folder

```
npm install --save @openzeppelin/contracts
```

Ensure truffle can communicate with Metamask

```
truffle console
truffle(develop)> web3.eth.sendTransaction({to:PASTE_ACCOUNT_FROM_METAMASK, from:accounts[0], value:web3.utils.toWei("2", "ether")});  
``` 

- Created a React template
```
  truffle unbox react
```

- Deploy the React server

```
cd client
npm run start
```

- Problem with the directory for the json files used by React.

- Support for Metamask wallet 

```
npm i --save @truffle/hdwallet-provider
```

#### Testing 

```
npm i --save chai chai-bn chai-as-promised
truffle test
```

#### Deploying on BSC Network

```
truffle migrate --network testnet
```

Verifying the contract

```
npm install -D truffle-plugin-verify
```

truffle run verify BEP20Token@{contract-address} --network testnet

### Resources

- https://docs.binance.org/smart-chain/developer
- OpenZeppelin documentation.

[![built-with openzeppelin](https://img.shields.io/badge/built%20with-OpenZeppelin-3677FF)](https://docs.openzeppelin.com/)

