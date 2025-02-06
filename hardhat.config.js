require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia-eth.w3node.com/706502dfaca80e51178ed4edc37cf692b83b5cf0aedde7ec536776b3be95bee5/api",
      accounts: [
        "3bc6c6c39b1d73001c3155f221132e128e31545a4d48144fcab260bb02676cd1",
      ],
    },
  },
};
