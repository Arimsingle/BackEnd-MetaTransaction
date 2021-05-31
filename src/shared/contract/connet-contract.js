//connect contract address
const ethers = require('ethers');
const { MetaTransactionAbi } = require('../abi/meta-transaction');
const { CONTRACT_ADDRESS, HOST, TRUFFLE_PORT } = require("../variables/variables");
// const provider = new ethers.providers.JsonRpcProvider(`http://${HOST}:${TRUFFLE_PORT}/`);
const provider = new ethers.providers.JsonRpcProvider(`https://rpc-testnet.bitkubchain.io`);
const contract = new ethers.Contract(CONTRACT_ADDRESS, MetaTransactionAbi, provider);
module.exports = { contract }

//ct address
//0xE4907d19f3eE70AEd37baDCE0157c7a257B35A01
//account
//0xFdD9232f48eb054f952BAb5d64C0fC9629bDC436
//pv
//3e8c01c38971c9d53b4e1f00d3189cd442412eabbf44b5ace43fb03a1a123acf