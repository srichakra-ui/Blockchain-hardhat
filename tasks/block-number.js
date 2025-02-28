const { task } = require("hardhat/config")

task("block-number", "prints the current block number").setAction(
    async (taskArgs, hre) => {
        //anonymous async function as it doesnt have a name
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    },
)
module.exports = {}
