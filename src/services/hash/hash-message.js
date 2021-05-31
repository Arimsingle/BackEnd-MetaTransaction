const { contract } = require("../../shared/contract/connet-contract");
const HashMessage = async (to, amount, nonce) => {
    let hashMessage = await contract.hashMessage(to, amount, nonce);
    return {
        hashMessage
    }
}
module.exports = { HashMessage };