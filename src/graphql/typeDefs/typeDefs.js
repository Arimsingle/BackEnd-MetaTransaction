const typeDefs = `
    type Book { 
        title: String, author: String 
    }
    type Signature {
        status: Int,
        message: String,
        signature: String!,
        account: String!,
        messageHash: String
        error: String
    }
    type Query { 
        books: [Book] 
    }
    type Mutation {
        createSignature(to:String!, amount:Int!, nonce:Int!): Signature
    }
`;
module.exports = { typeDefs };