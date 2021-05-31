const { HashSignature } = require("../../services/signature/hash-signature");
const { MetaTransfer } = require("../../services/meta-transfer/transfer");
const { Balances } = require("../../services/balance/balance");
const { HashMessage } = require("../../services/hash/hash-message");
const { RecoverSigner } = require("../../services/recover/recover-signer");

const resolvers = {
    Query: {
        hello: () => "Hello Meta-Transaction",
        balance: async (_, { account }) => {
            try {
                const { balance } = await Balances(account);
                return {
                    status: 200,
                    message: "call balances method success",
                    balance
                }
            } catch (error) {
                return {
                    status: 400,
                    message: "call balances method faild",
                    error: error.reason
                }
            }
        },
        hashMessage: async (_, { to, amount, nonce }) => {
            try {
                const { hashMessage } = await HashMessage(to, amount, nonce);
                return {
                    status: 200,
                    message: "call hash-message method success",
                    hashMessage
                }
            } catch (error) {
                return {
                    status: 400,
                    message: "call hash-message method faild",
                    error: error.reason
                }
            }
        },
        recoverSigner: async (_, { hash, signature }) => {
            try {
                const { recoverSigner } = await RecoverSigner(hash, signature);
                return {
                    status: 200,
                    message: "call recover-signer method success",
                    recoverSigner
                }
            } catch (error) {
                return {
                    status: 400,
                    message: "call recover-signer method faild",
                    error: error.reason
                }
            }
        },
    },

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
                    to,
                    amount,
                    nonce
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