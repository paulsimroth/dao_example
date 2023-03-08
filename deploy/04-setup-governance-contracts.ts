import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";
import { ADDRESS_ZERO } from "../helper-hardhat-config";

const setupContracts: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log, get } = deployments;
    const { deployer } = await getNamedAccounts();

    //GET Contracts
    const timeLock = await ethers.getContract("TimeLock", deployer);
    const governor = await ethers.getContract("GovernorContract", deployer);
    
    log("04 - Setting up roles...");

    //Setting Roles
    const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE();
    const proposerRole = await timeLock.PROPOSER_ROLE();
    const executorRole = await timeLock.EXECUTOR_ROLE();
    const cancellerRole = await timeLock.CANCELLER_ROLE();

    //Transfering Roles
    //Proposer Role given to GovernorContract
    const proposerTx = await timeLock.grantRole(proposerRole, governor.address);
    await proposerTx.wait(1);
    log("PROPOSER_ROLE set");

    //Executor Role given to Address 0
    const executorTx = await timeLock.grantRole(executorRole, ADDRESS_ZERO);
    await executorTx.wait(1);
    log("EXECUTOR_ROLE set");

    //Canceller Role given to GovernorContract
    const cancellerTx = await timeLock.grantRole(cancellerRole, governor.address);
    await cancellerTx.wait(1);
    log("CANCELLER_ROLE set");
    
    //Deployer looses Admin Role in TimeLock
    const revokeTx = await timeLock.revokeRole(adminRole, deployer);
    await revokeTx.wait(1);
    log("TIMELOCK_ADMIN_ROLE set");
    
    log("04 - roles set");
    log("----------------------------------------------------");
};

export default setupContracts;