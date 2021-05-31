const { Balances } = require("../services/balance/balance");
module.exports = BalancesApi = ({ app }) => {
    app.post('/api/balance', async (req, res) => {
        try {
            let account = req.body.account;
            const { balance } = await Balances(account);
            res.send({
                status: 200,
                message: "call balances method success",
                balance
            });
        } catch (error) {
            console.log(error);
            res.send({
                status: 400,
                message: "call balances method faild",
                error: error.reason
            });
        }
    });
}
