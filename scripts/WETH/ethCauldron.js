
const hre = require("hardhat");
require('hardhat-abi-exporter');
require("@nomiclabs/hardhat-web3");


const bentoBox1Address = "0xEDD9EE1F70969D8c99Ab0834f226e2bF8f0BdcB3"
const magicInternetMoneyAddress = "0x8faA507c79AF20Ccfe17B79E1670C1D29D03D4fd"
const oracleAddress = "0xdc9Fe2968A15A69bcCa452F2ae047a4a8b30125a"

async function main() {

    const BentoBoxV1 = await hre.ethers.getContractFactory("BentoBoxV1");
    const MagicInternetMoney = await hre.ethers.getContractFactory("MagicInternetMoney");
    const bentoBox = await BentoBoxV1.attach(bentoBox1Address);
    const magicInternetMoney = await MagicInternetMoney.attach(magicInternetMoneyAddress);

    // IBentoBoxV1 bentoBox_, IERC20 magicInternetMoney_
    const Cauldron = await hre.ethers.getContractFactory("Cauldron");
    const cauldron = await Cauldron.deploy(bentoBox_=bentoBox.address, magicInternetMoney_=magicInternetMoney.address); 
    await cauldron.deployed(); 
    console.log("cauldron address: ", cauldron.address);


    const collateral = "0xd0A1E359811322d97991E03f863a0C30C2cF029C"; // wETH kovan address
    const oracleData = "0x0000000000000000000000000000000000000000";
  
    let initData = ethers.utils.defaultAbiCoder.encode(
      ["address", "address", "bytes"],
      [collateral, oracleAddress, oracleData]
    );
    console.log(initData);
    await cauldron.init(initData);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

//   cauldron address:  0x696dfE9D917E4bEDb780Dbf461FE441Aa5f4B5e4
//   0x000000000000000000000000d0a1e359811322d97991e03f863a0c30c2cf029c000000000000000000000000dc9fe2968a15a69bcca452f2ae047a4a8b30125a000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000














































