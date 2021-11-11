// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC20.sol";

contract Token is ERC20 {
    constructor(uint256 _supply) ERC20("myToken", "MY"){
        _mint(msg.sender, _supply * (10 ** decimals()));
    }
}
 