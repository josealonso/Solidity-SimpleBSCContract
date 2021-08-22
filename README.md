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

