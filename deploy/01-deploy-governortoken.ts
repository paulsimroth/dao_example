import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
// @ts-ignore
import { ethers } from "hardhat";

const deployGovernanceToken: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    // @ts-ignore
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    
    log("----------------------------------------------------");
    log("01 - deploying GovernanceToken...");

    //ERC20 GovernanceToken deployment
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
        /* waitConfirmations: */
    });

    log(`01 - deployed GovernanceToken to address ${governanceToken.address}`);
    log("----------------------------------------------------");

    //Calling @func delegate to delegate voting power to deployer
    await delegate(governanceToken.address, deployer);
    log("delegated");
    log("----------------------------------------------------");
};

//Function hands over Voting power 
//for @param governanceTokenAddress 
//to @param delegatedAccount
const delegate = async (
    governanceTokenAddress: string,
    delegatedAccount: string
) => {
    const governanceToken = await ethers.getContractAt(
        "GovernanceToken",
        governanceTokenAddress
    );

    const tx = await governanceToken.delegate(delegatedAccount);
    await tx.wait(1);
    console.log(
        `Checkpoints ${await governanceToken.numCheckpoints(delegatedAccount)}`
    );
};

export default deployGovernanceToken;