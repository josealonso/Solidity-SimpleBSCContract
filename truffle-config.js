var path = require('path');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",    // 1337
    }    // ,
    // ganache_local: {
    //   provider: function () {
    //     return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", AccountIndex);
    //   },
    //   network_id: 1337
    // }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};

