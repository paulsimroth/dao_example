import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { MIN_DELAY } from "../helper-hardhat-config";
import { ethers } from "hardhat";

const deployTimeLock: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("deploying TimeLock...");

    const timeLock = await deploy("TimeLock", {
        from: deployer,
        args: [MIN_DELAY, [], []],
        log: true,
    });
    log("TimeLock deployed");
    log("----------------------------------------------------");
};

export default deployTimeLock;