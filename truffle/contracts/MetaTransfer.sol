pragma solidity >= 0.5.0;
contract MetaDApp{
    mapping (address => uint) public nonces;
    mapping (address => uint) public balances;
    mapping(address => address[]) private userTransfer;
    
    constructor() public{
        balances[msg.sender] = 100000000;
    }
    
    function recover(bytes32 hash, bytes memory signature) internal pure returns (address) {
        bytes32 r;
        bytes32 s;
        uint8 v;
        if (signature.length != 65) {
            return (address(0));
        }
        assembly {
            r := mload(add(signature, 0x20))
            s := mload(add(signature, 0x40))
            v := byte(0, mload(add(signature, 0x60)))
        }
        if (v < 27) {
            v += 27;
        }
        if (v != 27 && v != 28) {
            return (address(0));
        } else {
            return ecrecover(hash, v, r, s);
        }
    }
    function toEthSignedMessageHash(bytes32 hash) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
    }

    function recoverSigner(bytes32 _hash, bytes memory _signature) public pure returns (address) {
        bytes32 ethSignedMessageHash = toEthSignedMessageHash(_hash);
        return recover(ethSignedMessageHash, _signature);        
    }
    function getUserTransfer(address _account) public view returns(address[] memory){
        return userTransfer[_account];
    }

    function validateNonceForSigner(address _signer, uint _nonce) internal {
        require(_nonce == nonces[_signer], "Invalid nonce");
        nonces[_signer]++;
    }

    function transfer(address _from, address _to, uint _amount) public{ 
        balances[_to] += _amount;
        balances[_from] -= _amount;
    }
    function metaTransfer(bytes calldata _signature, address _to, uint _amount, uint _nonce) external {
        bytes32 messageHash = hashMessage(_to, _amount, _nonce);       
        address signer = recoverSigner(messageHash, _signature);       
        userTransfer[_to].push(signer);
        validateNonceForSigner(signer, _nonce);
        require(balances[signer] >= _amount, "Signer has insufficient funds.");
        balances[signer] -= _amount;
        balances[_to] += _amount;
    }

    function hashMessage(address _to, uint _amount, uint _nonce)       
        public
        pure
        returns (bytes32 _messageHash)
    {
        _messageHash = keccak256(abi.encodePacked(_to, _amount, _nonce));
    }
}