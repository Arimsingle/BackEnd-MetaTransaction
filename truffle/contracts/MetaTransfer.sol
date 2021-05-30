  
pragma solidity >= 0.5.0;
import {ECRecover} from "./ECRecover.sol";

contract MetaTransfer is ECRecover {
    
    mapping (address => uint) public balances;
    
    function faucet() external {
        balances[msg.sender] += 1000;
    }
    function transfer(address _from, address _to, uint _amount) public{
        balances[_to] += _amount;
        balances[_from] -= _amount;
    }
    function metaTransfer(bytes calldata _signature, address _to, uint _amount, uint _nonce) external {
        bytes32 messageHash = hashMessage(_to, _amount, _nonce);
        address signer = recoverSigner(messageHash, _signature);
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
        //Actually should also add contract address to avoid replay attacks
        _messageHash = keccak256(abi.encodePacked(_to, _amount, _nonce));
    }

}