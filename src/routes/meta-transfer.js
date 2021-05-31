const { MetaTransfer } = require("../services/meta-transfer/transfer");
module.exports = MetaTransferApi = ({ app }) => {
    app.post('/api/meta-transfer', async (req, res) => {
        try {
            let signature = req.body.signature;
            let to = req.body.to;
            let amount = req.body.amount;
            let nonce = req.body.nonce;
            const {
                _signature,
                _to,
                _amount,
                _nonce
            } = await MetaTransfer(signature, to, amount, nonce);
            res.send({
                status: 200,
                message: "Transfer success",
                signature: _signature,
                to: _to,
                amount: _amount,
                nonce: _nonce
            });
        } catch (error) {
            console.log(error);
            res.send({
                status: 400,
                message: "Transfer faild",
                error: error.reason
            });
        }
    });
}
