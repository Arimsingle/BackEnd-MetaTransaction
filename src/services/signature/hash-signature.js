const ethers = require("ethers");
const utils = ethers.utils;
const { ACCOUNT } = require("../../shared/variables/variables");
const { contract } = require("../../shared/contract/connet-contract");
const { contractWithSigner } = require("../../shared/contract/contract-withSigner");
let createWallet = require("../account/create-account");
const HashSignature = async (to, amount, nonce) => {
    let wallet = createWallet();
    //get balance 1000 from admin
    let tx = await contractWithSigner.transfer(ACCOUNT, wallet.address, 1000);
    await tx.wait();
    let value = await contract.balances(wallet.address);
    let msgHash = utils.solidityKeccak256(
        ["address", "uint256", "uint256"], //type on solidity code
        [to, amount, nonce]
    );
    let hashToSign = await utils.arrayify(msgHash);
    let signature = await wallet.signMessage(hashToSign);
    return { msgHash, signature, account: wallet.address, balance: value.toNumber() } //return values
}
module.exports = { HashSignature };