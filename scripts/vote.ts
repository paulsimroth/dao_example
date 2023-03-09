import { developmentChains, proposalsFile, VOTING_DELAY } from "../helper-hardhat-config";
// @ts-ignore
import { ethers, network } from "hardhat";
import { moveBlocks } from "../utils/move-blocks";
import * as fs from "fs";

const index = 0;
async function main(proposalIndex: number) {
    const proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));
    const proposalId = proposals[network.config.chainId!][proposalIndex];

    //@param voteWay: int of VOTE: 0 = Against; 1 = For; 2 = Abstain
    const voteWay = 1;
    //@param reason: string of reason for casting voteWay
    const reason = "I like it";

    const governor = await ethers.getContract("GovernorContract");
    const voteTxResponse = await governor.castVoteWithReason(proposalId, voteWay, reason);

    await voteTxResponse.wait(1);

    //Checking if chains "hardhat" or "localhost" to speed up Chain by @param VOTING_DELAY + 1
    if(developmentChains.includes(network.name)) {
        await moveBlocks(VOTING_DELAY + 1);
    };

    console.log("Voted!");
};

main(index)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });