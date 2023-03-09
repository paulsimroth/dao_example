import { developmentChains, FUNC, MIN_DELAY, NEW_STORE_VALUE, PROPOSAL_DESCRIPTION, VOTING_DELAY } from "../helper-hardhat-config";
// @ts-ignore
import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";
import * as fs from "fs";
import { moveTime } from "../utils/move-time";

export async function queueAndExecute() {
    const args = [NEW_STORE_VALUE];
    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctionData(FUNC, args);
    const descriptionHash = ethers.utils.keccak256(
        ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION)
    );

    const governor = await ethers.getContract("GovernorContract");
    console.log("Queueing....");
    const queueTx = await governor.queue(
        [box.address], 
        [0], 
        [encodedFunctionCall], 
        descriptionHash
    );
    await queueTx.wait(1);

    //Checking if chains "hardhat" or "localhost" to speed up Chain by @param VOTING_DELAY + 1 and @param MIN_DELAY + 1
    if(developmentChains.includes(network.name)) {
        await moveTime(MIN_DELAY + 1);
        await moveBlocks(VOTING_DELAY + 1);
    };

    console.log("Executing Proposal....");

    const executeTx = await governor.execute(
        [box.address],
        [0],
        [encodedFunctionCall],
        descriptionHash
    );
    await executeTx.wait(1);

    const boxNewValue = await box.retrieve();
    console.log(`New Box Value: ${boxNewValue.toString()}`);
};

queueAndExecute()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });