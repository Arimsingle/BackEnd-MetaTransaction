require('dotenv').config({ path: '../.env' });
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const ACCOUNT = process.env.ACCOUNT;
const TRUFFLE_PORT = process.env.TRUFFLE_PORT;

module.exports = {
    PORT,
    HOST,
    PRIVATE_KEY,
    CONTRACT_ADDRESS,
    ACCOUNT,
    TRUFFLE_PORT
}
