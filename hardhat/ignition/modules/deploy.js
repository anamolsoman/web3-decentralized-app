const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BuyMeACoffee", (m) => {
  const tokenContract = m.contract("BuyMeACoffee", []);

  return { tokenContract };
});
