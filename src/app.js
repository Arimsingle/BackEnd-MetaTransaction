const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const app = express();
const { PORT_REST, PORT_GQL } = require("./shared/variables/variables");
const Index = require("./routes/index");
const { schema } = require("./graphql/schema/schema");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/graphql', express.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
require("./routes/signature")({ app });
app.get('/api', Index);

app.listen(PORT_REST, () => {
  console.log(`app rest api listening at http://localhost:${PORT_REST}`)
})
app.listen(PORT_GQL, () => {
  console.log(`app graphql listening at http://localhost:${PORT_GQL}`);
});