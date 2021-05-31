const typeDefs = `
    type Signature {
        status: Int,
        message: String,
        signature: String!,
        account: String!,
        balance:Int,
        messageHash: String,
        error: String
    }
    type MetaTransfer {
        status: Int,
        message: String,
        signature: String,
        to:String,
        amount:Int,
        nonce:Int,
        error: String
    }
    type Query { 
        hello: String 
    }
    type Mutation {
        createSignature(to:String!, amount:Int!, nonce:Int!): Signature!
        metaTransfer(signature:String, to:String, amount:Int, nonce:Int):MetaTransfer
    }
`;
module.exports = { typeDefs };