const { contract } = require("../../shared/contract/connet-contract");
const RecoverSigner = async (hash, signature) => {
    let recoverSigner = await contract.recoverSigner(hash, signature);
    return {
        recoverSigner
    }
}
module.exports = { RecoverSigner };