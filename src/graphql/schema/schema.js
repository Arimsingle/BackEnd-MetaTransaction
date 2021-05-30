const { typeDefs } = require("../typeDefs/typeDefs");
const { resolvers } = require("../resolvers/resolvers");
const { makeExecutableSchema } = require('graphql-tools');
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
module.exports = { schema };