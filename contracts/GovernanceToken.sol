//ERC20 Token used in voting in DAO
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20Votes {
    uint256 public maxSupply = 1000000000000000000000000;

    constructor() 
        ERC20("GovernanceToken", "GVT")
        ERC20Permit("GovernanceToken") 
    {
        _mint(msg.sender, maxSupply);
    }

    //Functions below are overrides
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20Votes) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount) internal override(ERC20Votes) {
        super._burn(account, amount);
    }
}