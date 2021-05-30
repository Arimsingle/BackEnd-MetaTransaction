const ethers = require("ethers");
const utils = ethers.utils;
const { wallet } = require("../account/create-account");

const HashSignature = async (to, amount, nonce) => {
    // console.log(to, amount, nonce);
    let msgHash = utils.solidityKeccak256(
        ["address", "uint256", "uint256"], //type on solidity code
        [to, amount, nonce]
    );
    let hashToSign = await utils.arrayify(msgHash);
    let signature = await wallet.signMessage(hashToSign);
    return { msgHash, signature, account: wallet.address }
}
module.exports = { HashSignature };