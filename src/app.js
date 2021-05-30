const express = require('express');
const app = express();
const { PORT } = require("./shared/variables/variables");
const { contract } = require("./shared/contract/connet-contract");
const Index = require("./routes/index");
const CreateSignature = require("./routes/signature");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// console.log(contract);
require("./routes/signature")({ app });
app.get('/api', Index);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})