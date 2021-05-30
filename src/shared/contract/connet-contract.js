const ethers = require('ethers');
const abi = require('../abi/meta-transaction');
const { CONTRACT_ADDRESS, TRUFFLE_PORT } = require("../variables/variables");
const provider = new ethers.providers.JsonRpcProvider(`http://127.0.0.1:${TRUFFLE_PORT}`);
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

module.exports = { contract }