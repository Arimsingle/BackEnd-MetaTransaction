const ethers = require("ethers");
// let wallet = ethers.Wallet.createRandom();
// module.exports = { wallet };

module.exports = createWallet = () => {
    let wallet = ethers.Wallet.createRandom();
    return wallet;
}