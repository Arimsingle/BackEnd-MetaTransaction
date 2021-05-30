const ethers = require("ethers");
const utils = ethers.utils;

let mnemonic =
  "blur depend exhibit cliff film govern toward type embrace fine latin hotel"; //74 length

let wallet = ethers.Wallet.fromMnemonic(mnemonic); //create account
console.log("Wallet address:", wallet.address);
console.log("Private key:", wallet.privateKey);

let to = "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB"; //who address you want to transfer
let amount = 100;
let nonce = 1; //round of transaction

let msgHash = utils.solidityKeccak256(
  ["address", "uint256", "uint256"], //type
  [to, amount, nonce]
);
console.log("Message hash:", msgHash);
let hashToSign = utils.arrayify(msgHash);
let signature = wallet.signMessage(hashToSign);
console.log("Signature", signature);