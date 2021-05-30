const ECRecover = artifacts.require("ECRecover");

module.exports = function (deployer) {
    deployer.deploy(ECRecover);
};
