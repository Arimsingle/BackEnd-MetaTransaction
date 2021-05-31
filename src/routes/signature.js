
const { HashSignature } = require("../services/signature/hash-signature");
module.exports = SignatureApi = ({ app }) => {
    app.post('/api/signature', async (req, res) => {
        try {
            let to = req.body.to; //who address you want to transfer
            let amount = req.body.amount; //amont
            let nonce = req.body.nonce; //round of transaction start at 0!!
            const {
                msgHash,
                signature,
                account,
                balance } = await HashSignature(to, amount, nonce);
            res.send({
                status: 200,
                message: "create signature success",
                signature,
                account,
                balance,
                messageHash: msgHash,
                to,
                amount,
                nonce,
            });
        } catch (error) {
            console.log(error);
            res.send({
                status: 400,
                message: "create signature faild",
                error: error.reason
            });
        }
    });
}
