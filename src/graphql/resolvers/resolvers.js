const { HashSignature } = require("../../services/signature/hash-signature");
const { MetaTransfer } = require("../../services/meta-transfer/transfer");
const resolvers = {
    Query: { hello: () => "Hello Meta-Transaction" },
    Mutation: {
        createSignature: async (_, { to, amount, nonce }) => {
            try {
                const {
                    msgHash,
                    signature,
                    account,
                    balance } = await HashSignature(to, amount, nonce);
                return {
                    status: 200,
                    message: "create signature success",
                    signature,
                    account,
                    balance,
                    messageHash: msgHash,
                }
            } catch (error) {
                return {
                    status: 400,
                    message: "create signature faild",
                    error: error.reason
                }
            }
        },
        metaTransfer: async (_, { signature, to, amount, nonce }) => {
            try {
                const {
                    _signature,
                    _to,
                    _amount,
                    _nonce
                } = await MetaTransfer(signature, to, amount, nonce);
                return {
                    status: 200,
                    message: "Transfer success",
                    signature: _signature,
                    to: _to,
                    amount: _amount,
                    nonce: _nonce
                }
            } catch (error) {
                return {
                    status: 400,
                    message: "Transfer faild",
                    error: error.reason
                }
            }
        }
    }
};
module.exports = { resolvers };