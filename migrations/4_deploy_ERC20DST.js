const ERC20DST = artifacts.require("ERC20DST");

module.exports = function (deployer) {
  deployer.deploy(ERC20DST,
    // 构造函数的参数
    "DST : DAO staking Credential ", "DST", 18, 1000000);
};
