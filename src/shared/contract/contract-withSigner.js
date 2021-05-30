let ethers = require('ethers');
let { HOST, PORT, PRIVATE_KEY } = require("../variables/variables");
let provider = new ethers.providers.JsonRpcProvider(`http://${HOST}:${PORT}/`);
let wallet = new ethers.Wallet(PRIVATE_KEY, provider);
let contractWithSigner = contract.connect(wallet);
module.exports = { contractWithSigner };