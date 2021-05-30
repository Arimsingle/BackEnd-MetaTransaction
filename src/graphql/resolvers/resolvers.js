const { HashSignature } = require("../../services/signature/hash-signature");
const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
const resolvers = {
    Query: { books: () => books },
    Mutation: {
        createSignature: async (_, { to, amount, nonce }) => {
            try {
                const {
                    msgHash,
                    signature,
                    account } = await HashSignature(to, amount, nonce);
                return {
                    status: 200,
                    message: "create signature success",
                    signature,
                    account,
                    messageHash: msgHash,
                }
            } catch (error) {
                return {
                    status: 400,
                    message: "create signature faild",
                    error: error.reason
                }
            }
        }
    }
};
module.exports = { resolvers };