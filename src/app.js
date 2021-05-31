require('dotenv').config({ path: '../.env' });
const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const app = express();
const Index = require("./routes/index");
const { schema } = require("./graphql/schema/schema");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/graphql', express.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
//call api/signature
require("./routes/signature")({ app });
require("./routes/meta-transfer")({ app });
//say hello
app.get('/api', Index);
//Rest API server
app.listen(process.env.PORT_REST, () => {
  console.log(`app rest api listening at http://localhost:${process.env.PORT_REST}`)
})
//GrahpQL server
app.listen(process.env.PORT_GQL, () => {
  console.log(`app graphql listening at http://localhost:${process.env.PORT_GQL}/graphiql`);
});