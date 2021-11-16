const Swap = artifacts.require("./Swap.sol");
const Token = artifacts.require("./Token.sol");

module.exports = async function (deployer) {
  await deployer.deploy(Token, 1000);
  const token = await Token.deployed();
  
  await deployer.deploy(Swap , token.address);
  const swap = await Swap.deployed();
};
