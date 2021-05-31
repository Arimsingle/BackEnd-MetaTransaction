const { contractWithSigner } = require("../../shared/contract/contract-withSigner");
const MetaTransfer = async (signature, to, amount, nonce) => {
    let tx = await contractWithSigner.metaTransfer(
        signature,
        to,
        amount,
        nonce
    );
    await tx.wait();
    return {
        _signature: signature,
        _to: to,
        _amount: amount,
        _nonce: nonce
    }

}
module.exports = { MetaTransfer };