require('dotenv').config({ path: '../.env' });
const PORT_REST = process.env.PORT_REST;
const PORT_GQL = process.env.PORT_GQL;
const HOST = process.env.HOST;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const ACCOUNT = process.env.ACCOUNT;
const TRUFFLE_PORT = process.env.TRUFFLE_PORT;

module.exports = {
    PORT_REST,
    PORT_GQL,
    HOST,
    PRIVATE_KEY,
    CONTRACT_ADDRESS,
    ACCOUNT,
    TRUFFLE_PORT
}
