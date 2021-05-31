//connect wallet
const ethers = require('ethers');
const { contract } = require("./connet-contract");
const { HOST, TRUFFLE_PORT, PRIVATE_KEY } = require("../variables/variables");
// const provider = new ethers.providers.JsonRpcProvider(`http://${HOST}:${TRUFFLE_PORT}/`);
const provider = new ethers.providers.JsonRpcProvider(`https://rpc-testnet.bitkubchain.io`);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contractWithSigner = contract.connect(wallet);
module.exports = { contractWithSigner };