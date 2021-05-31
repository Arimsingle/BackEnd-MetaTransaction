require('dotenv').config({ path: '../../../.env' });
const PORT_REST = process.env.PORT_REST;
const PORT_GQL = process.env.PORT_GQL;
const HOST = process.env.HOST;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const ACCOUNT = process.env.ACCOUNT;
const TRUFFLE_PORT = process.env.TRUFFLE_PORT;

//bitkub chain
const CONTRACT_ADDRESS_BIKUB = process.env.CONTRACT_ADDRESS_BIKUB;
const ACCOUNT_BIKUB = process.env.ACCOUNT_BIKUB;
const PRIVATE_KEY_BIKUB = process.env.PRIVATE_KEY_BIKUB;
const NETWORK_ID_BITKUB = process.env.NETWORK_ID_BITKUB;

module.exports = {
    PORT_REST,
    PORT_GQL,
    HOST,
    PRIVATE_KEY,
    CONTRACT_ADDRESS,
    ACCOUNT,
    TRUFFLE_PORT,
    CONTRACT_ADDRESS_BIKUB,
    ACCOUNT_BIKUB,
    PRIVATE_KEY_BIKUB,
    NETWORK_ID_BITKUB
}
