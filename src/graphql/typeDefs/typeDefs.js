const typeDefs = `
    type Signature {
        status: Int,
        message: String,
        signature: String!,
        account: String!,
        balance:Int,
        messageHash: String,
        error: String,
        to:String,
        amount:Int,
        nonce:Int
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
    type Balance {
        status: Int,
        message: String,
        balance: Int
    }
    type HashMessage {
        status: Int,
        message: String,
        hashMessage: String
    }
    type RecoverSigner {
        status: Int,
        message: String,
        recoverSigner: String
    }
    type Query { 
        hello: String 
        balance(account:String!): Balance
        hashMessage(to:String!, amount:Int!, nonce:Int!): HashMessage
        recoverSigner(hash:String!, signature:String!): RecoverSigner
    }
    type Mutation {
        createSignature(to:String!, amount:Int!, nonce:Int!): Signature!
        metaTransfer(signature:String, to:String, amount:Int, nonce:Int): MetaTransfer
    }
`;
module.exports = { typeDefs };