require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require('hardhat-abi-exporter');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);   
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // solidity: "0.6.12",
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
      },
      {
        version: "0.8.6",
      },
      {
        version: "0.8.7",
      },
      {
        version: "0.8.9",
      },
      {
        version: "0.8.10",
      },
      {
        version: "0.7.6",
      },
    ],
    overrides: {
      "@uniswap/v3-core/contracts/libraries/FullMath.sol": {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 9000,
          },
        },
      },
      "@uniswap/v3-core/contracts/libraries/TickMath.sol": {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 9000,
          },
        },
      },
      "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol": {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 9000,
          },
        },
      },
      "contracts/SpellPower.sol": {
        version: "0.8.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 9000,
          },
        },
      },
      "contracts/KashiPair.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
      "contracts/mocks/KashiPairMock.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
      "contracts/swappers/Leverage/AGLDLevSwapper.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 9000,
          },
        },
      },
      "contracts/swappers/Liquidations/AGLDSwapper.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 9000,
          },
        },
      },
      "contracts-flat/DegenBox.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/KashiPairMediumRiskV2.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 350,
          },
        },
      },
      "contracts-flat/CauldronV2Multichain.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 350,
          },
        },
      },
      "contracts-flat/BentoBoxFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/YearnChainlinkOracleV1.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/YearnChainlinkOracleV2.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/sSpellFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/MagicInternetMoneyFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/MinimalTimeLockFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/CauldronV2CheckpointV1.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 350,
          },
        },
      },
      "contracts-flat/CauldronMediumRiskV1.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 350,
          },
        },
      },
      "contracts-flat/CauldronLowRiskV1.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 350,
          },
        },
      },
      "contracts-flat/KashiPairFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 350,
          },
        },
      },
      "contracts-flat/SushiSwapSwapperFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/PeggedOracleFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/SimpleSLPTWAP0OracleFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/SimpleSLPTWAP1OracleFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/ChainlinkOracleFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/ChainlinkOracleV2Flat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/CompoundOracle.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      "contracts-flat/BoringHelperFlat.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
    },
  },
  networks: {
    kovan: {
      url: "https://kovan.infura.io/v3/938ec750ced64edda8fc17c9e135d0f6",
      accounts: [`91b9a7ab998e6651385f77bdc719f2951b0e55db9fe2691c5cee48812506ac62`]
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  abiExporter: {
    path: './out/abi',
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [':ERC20$', 'MagicInternetMoney'],
    spacing: 2,
    pretty: true,
  }
};


















