import { NEW_STORE_VALUE, FUNC, PROPOSAL_DESCRIPTION, developmentChains, proposalsFile, VOTING_DELAY } from "../helper-hardhat-config";
// @ts-ignore
import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";
import * as fs from "fs";

export async function propose(args: any[], functionToCall: string, proposalDescription: string) {
    const governor = await ethers.getContract("GovernorContract");
    const box = await ethers.getContract("Box");

    const encodedFunctionCall = box.interface.encodeFunctionData(
        functionToCall, 
        args
    );

    console.log(`Proposing ${functionToCall} on ${box.address} with ${args}`);
    console.log(`Proposal Description: \n ${proposalDescription}`);
    
    //Proposal sent to GovernorContract
    const proposeTx = await governor.propose(
        [box.address],
        [0],
        [encodedFunctionCall],
        proposalDescription
    );
    
    const proposeReceipt = await proposeTx.wait(1);
    
    //Checking if chains "hardhat" or "localhost" to speed up Chain by @param VOTING_DELAY + 1
    if(developmentChains.includes(network.name)) {
        await moveBlocks(VOTING_DELAY + 1);
    };

    //Writing @param proposalId to JSON File
    const proposalId = proposeReceipt.events[0].args.proposalId;
    let proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));
    proposals[network.config.chainId!.toString()].push(proposalId.toString());
    fs.writeFileSync(proposalsFile, JSON.stringify(proposals));
};

propose([NEW_STORE_VALUE], FUNC, PROPOSAL_DESCRIPTION)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1);
});