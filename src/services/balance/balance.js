const { contract } = require("../../shared/contract/connet-contract");
const Balances = async (account) => {
    let balance = await contract.balances(account);
    return {
        balance:balance.toNumber()
    }

}
module.exports = { Balances };