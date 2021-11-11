// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "./Token.sol";

contract Swap{

    string public name = "myToken Eth swap";
    Token public token;

    constructor(Token _token){
         token = _token;
    }

    function buyToken() public payable returns(bool result)  {
        
        token.transfer(msg.sender, msg.value);

        return true;
    }
}