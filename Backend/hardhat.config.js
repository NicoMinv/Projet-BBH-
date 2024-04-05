require("@nomicfoundation/hardhat-ethers");

module.exports = {

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
      {
        version: "0.8.19",
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
      {
        version: "0.8.0",
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
    ],
  },
};