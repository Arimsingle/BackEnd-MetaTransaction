const { HashMessage } = require("../services/hash/hash-message");
module.exports = HashMessageApi = ({ app }) => {
    app.post('/api/hash-message', async (req, res) => {
        try {
            let to = req.body.to; //who address you want to transfer
            let amount = req.body.amount; //amont
            let nonce = req.body.nonce; //round of transaction start at 0!!
            const { hashMessage } = await HashMessage(to, amount, nonce);
            res.send({
                status: 200,
                message: "call hash-message method success",
                hashMessage
            });
        } catch (error) {
            console.log(error);
            res.send({
                status: 400,
                message: "call hash-message method faild",
                error: error.reason
            });
        }
    });
}
