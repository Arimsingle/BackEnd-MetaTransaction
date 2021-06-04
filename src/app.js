require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const app = express();
const Index = require("./routes/index");
const { schema } = require("./graphql/schema/schema");
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/graphql', express.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
//call api/signature
require("./routes/signature")({ app });
require("./routes/meta-transfer")({ app });
require("./routes/balance")({ app });
require("./routes/hash-message")({ app });
require("./routes/recover-signer")({ app });
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