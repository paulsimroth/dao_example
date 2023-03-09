//HElper to speed up Voting Delay in queue-and-execute.ts
import  { network } from "hardhat";

export async function moveTime(amount: number) {
    console.log("Moving time...");
    await network.provider.send("evm_increaseTime", [amount]);
    console.log(`Moved forward time by ${amount} seconds`); 
};