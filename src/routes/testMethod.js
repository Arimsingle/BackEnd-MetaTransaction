require('dotenv').config({ path: '../../.env' });
const ethers = require("ethers");
// let wallet = new ethers.Wallet(PRIVATE_KEY);

// Connect a wallet to mainnet
// let provider = ethers.getDefaultProvider();
let provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:9545/");
let walletWithProvider = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
console.log(walletWithProvider._mnemonic());