require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./tasks/block-number") //adding custom tasks to main
require("hardhat-gas-reporter")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        // using the url and accounts direclty instead of using process.env as i am facing unknown errors
        sepolia: {
            url: "https://eth-sepolia.g.alchemy.com/v2/y0UhXVCGuSJQBo65Y5fbvCi1M0ZMIiKk",
            accounts: [
                "d3ac4aa1a53e9a6f155dd6b8a13a6e3bec7f6e2b14e1b9103a725fd0faf9bfc6",
            ],
            chainId: 11155111,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    solidity: "0.8.8",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}
