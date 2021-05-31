const MetaTransfer = artifacts.require("MetaTransfer");

module.exports = function (deployer) {
    deployer.deploy(MetaTransfer);
};
