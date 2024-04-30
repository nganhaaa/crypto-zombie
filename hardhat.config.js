require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config()
const key1 = process.env.PRIVATE_KEY1;
const key2 = process.env.PRIVATE_KEY2;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "testnet",
  networks: {
      localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    testnet: {
      url: "https://bsc-testnet-rpc.publicnode.com",
      chainId: 97,
      gas : 2e6,
      gasPrice: 10e9,
      accounts: [key2],
        
    }
  },
  solidity: {
  version: "0.8.19",
  settings: {
    optimizer: {
      enabled: true
    }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};