

const hre = require("hardhat");
require('hardhat-abi-exporter');
require("@nomiclabs/hardhat-web3");

async function main() {
    const WethOracle = await hre.ethers.getContractFactory("WethOracle");
    const wethOracle = await WethOracle.deploy(); 
    await wethOracle.deployed(); 
    console.log("wethOracle deployed to:", wethOracle.address);

    // test
    // 0x0000000000000000000000000000000000000000
    const calldata = "0x0000000000000000000000000000000000000000";
    const result = await wethOracle.peekSpot(calldata);
    console.log(result);
}
// wethOracle deployed to: 0xdc9Fe2968A15A69bcCa452F2ae047a4a8b30125a


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  































