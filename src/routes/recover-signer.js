const { RecoverSigner } = require("../services/recover/recover-signer");
module.exports = RecoverSignerApi = ({ app }) => {
    app.post('/api/recover-signer', async (req, res) => {
        try {
            let hash = req.body.hash; //who address you want to transfer
            let signature = req.body.signature; //amont
            const { recoverSigner } = await RecoverSigner(hash, signature);
            res.send({
                status: 200,
                message: "call recover-signer method success",
                recoverSigner
            });
        } catch (error) {
            console.log(error);
            res.send({
                status: 400,
                message: "call recover-signer method faild",
                error: error.reason
            });
        }
    });
}
