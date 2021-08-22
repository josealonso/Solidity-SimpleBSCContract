import React, { Component } from "react";
import Test7Token from "./contracts/Test7Token.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      this.accounts = await this.web3.eth.getAccounts();

      // Get the contract instance.
      this.networkId = await this.web3.eth.getChainId(); // 1337

      this.myTest7Token = new this.web3.eth.Contract(    // web3@1.2.2
        Test7Token.abi,
        Test7Token.networks[this.networkId] && Test7Token.networks[this.networkId].address,
      );

/*      this.myTokenSale = new this.web3.eth.Contract(
        MyTokenSale.abi,
        MyTokenSale.networks[this.networkId] && MyTokenSale.networks[this.networkId].address,
      ); */

      console.log("---------------- this.networkId: " + this.networkId);
      console.log("Test7Token.networks: " + Test7Token.networks);


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
//      this.listenToTokenTransfer();
//      this.setState({ loaded: true, tokenSaleAddress: Test7Token.networks[this.networkId].address }, this.updateUserTokens);  
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };
  
  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // let myBalance = await contract.methods.balanceOf({ from: accounts[0] });
    let userTokens = await this.myTest7Token.methods.balanceOf(this.accounts[0]).call(); 
    console.log("userTokens: " + userTokens);
    // Get the value from the contract to prove it worked.
//    const response = await contract.methods.get().call();

  };

  render() {
/*    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    } */
    return (
      <div className="App">
        <h1>Balance on BSC</h1>
        <p>
          You currently have:<strong><p> {this.state.userTokens} TST7 tokens</p></strong>.
        </p>
      </div>
    );
  }
}

export default App;

