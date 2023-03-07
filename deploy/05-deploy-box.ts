import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";

const deployBox: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("deploying Box...");

    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
    });

    const timeLock = await ethers.getContract("TimeLock");
    const boxContract = await ethers.getContractAt("Box", box.address);
    const transferOwner = await boxContract.transferOwnership(timeLock.address);
    await transferOwner.wait(1);
    log("transfer completed");
};

export default deployBox;