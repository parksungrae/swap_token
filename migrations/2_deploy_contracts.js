const Swap = artifacts.require("Swap");
const Token = artifacts.require("Token");

module.exports = function (deployer) {
  deployer.deploy(Swap);
  deployer.deploy(Token, 1000);
};
