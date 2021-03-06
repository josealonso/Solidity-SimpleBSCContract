import React, { Component } from "react";
import Test7Token from "./contracts/Test7Token.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { loaded: false, tokenSaleAddress: null, userTokens: 0, BNBTokens: 0 };

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
      this.listenToTokenTransfer();
      this.setState({ loaded: true, tokenSaleAddress: Test7Token.networks[this.networkId].address }, this.updateUserTokens, this.updateBNBUserTokens);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  updateBNBUserTokens = async () => {
    let BNBTokens = await this.myTest7Token.methods.getBalanceOfBNB();  // (this.accounts[0]).call();
    console.log("AAAA - BNBTokens: " + BNBTokens);
    this.setState({ BNBTokens: BNBTokens });
  }

  updateUserTokens = async () => {
    // call() is a reading, gas-free operation
    let userTokens = await this.myTest7Token.methods.balanceOf(this.accounts[0]).call();
    console.log("AAAA - userTokens: " + userTokens);
    this.setState({ userTokens: userTokens });
  }

  listenToTokenTransfer = async () => {
    this.myTest7Token.events.Transfer({ to: this.accounts[0] }).on("data", this.updateUserTokens);
  }

  handleBuyTokens = async () => {
    await this.myTest7Token.methods.transfer(this.accounts[0], 1 * 10 ^ 18);
    this.updateUserTokens();
    // this.updateBNBUserTokens();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div className="App">
        <h1>Balance on BSC</h1>

        <p>Test7 Token Sale Address: {this.state.tokenSaleAddress}</p>
        <p>You currently have: {this.state.userTokens} Test7 tokens</p>
        <p>You currently have: {this.state.BNBTokens} BNB tokens</p>
        <button type="button" onClick={this.handleBuyTokens}>Buy Test7 tokens</button>
      </div>

    );
  }
}

export default App;

