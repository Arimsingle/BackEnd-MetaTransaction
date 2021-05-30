const ethers = require("ethers");
const utils = ethers.utils;
let wallet = ethers.Wallet.createRandom();
// const { contract } = require("../shared/contract/connet-contract");
// const { contractWithSigner } = require("../shared/contract/contract-withSigner");
// let randomMnemonic = wallet.mnemonic;
// console.log("Wallet address:", wallet.address);
// console.log("Private key:", wallet.privateKey);

module.exports = CreateSignature = ({ app }) => {
    app.post('/api/signature', async (req, res) => {
        try {
            let to = req.body.to; //who address you want to transfer
            let amount = req.body.amount; //amont
            let nonce = req.body.nonce; //round of transaction start at 0!!
            let msgHash = utils.solidityKeccak256(
                ["address", "uint256", "uint256"], //type
                [to, amount, nonce]
            );
            let hashToSign = await utils.arrayify(msgHash);
            let signature = await wallet.signMessage(hashToSign);
            res.send({
                status: 200,
                message: "create signature success",
                signature,
                account: wallet.address,
                messageHash: msgHash
            });
        } catch (error) {
            res.send({
                status: 400,
                message: "create signature faild",
                error: error.reason
            });
        }
    });
}
