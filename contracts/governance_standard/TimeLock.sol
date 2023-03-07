//Owner of Box Contract
//Locking Box for new vote to be executed

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {

    /*
    * @param minDelay: wait time for executing
    * @param proposers: array of addresses that can propose
    * @param executors: array of addresses that can execute when proposal passes
    * @param admin: optional account to be granted admin role; disable with zero address
    */
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
        /* address admin */
    ) TimelockController(minDelay, proposers, executors, address(0)) {}
}