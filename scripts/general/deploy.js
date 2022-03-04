// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
require('hardhat-abi-exporter');
require("@nomiclabs/hardhat-web3");


async function main() {


  // We get the contract to deploy
  const MagicInternetMoney = await hre.ethers.getContractFactory("MagicInternetMoney");
  const MinimalTimeLock = await hre.ethers.getContractFactory("MinimalTimeLock");
  const Spell = await hre.ethers.getContractFactory("Spell");
  const SpellPower = await hre.ethers.getContractFactory("SpellPower");
  const TimePower = await hre.ethers.getContractFactory("TimePower");
  const BentoBoxV1 = await hre.ethers.getContractFactory("BentoBoxV1");
 

  const magicInternetMoney = await MagicInternetMoney.deploy();
  const minimalTimeLock = await MinimalTimeLock.deploy();
  const spell = await Spell.deploy();
  const spellPower = await SpellPower.deploy();
  const timePower = await TimePower.deploy();
  const bentoBoxV1 = await BentoBoxV1.deploy(wethToken_= "0x0000000000000000000000000000000000000000");

  await magicInternetMoney.deployed();
  await minimalTimeLock.deployed();
  await spell.deployed();
  await spellPower.deployed();
  await timePower.deployed();  
  await bentoBoxV1.deployed();


  
  console.log("magicInternetMoney deployed to:", magicInternetMoney.address);
  console.log("minimalTimeLock deployed to:", minimalTimeLock.address);
  console.log("spell deployed to:", spell.address);
  console.log("spellPower deployed to:", spellPower.address);
  console.log("timePower deployed to:", timePower.address);
  console.log("bentoBox1 deployed to:", bentoBoxV1.address);


  const SSpell = await hre.ethers.getContractFactory("sSpell");
  const sSpell = await SSpell.deploy(_token= spell.address);
  await spell.deployed();
  console.log("sSpell deployed to:", sSpell.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// magicInternetMoney deployed to: 0x8faA507c79AF20Ccfe17B79E1670C1D29D03D4fd
// minimalTimeLock deployed to: 0x3339C523f25c0114257ebE1B23080C0503A19d18
// spell deployed to: 0x624627567ecc4c3650f2e3895A990aeDa82990f1
// spellPower deployed to: 0x393f481DD92aAb018817C4E625F6B55131c14B3e
// timePower deployed to: 0xa5618995E6dbC4c48D95771Fbee65460e41caE7d
// bentoBox1 deployed to: 0xEDD9EE1F70969D8c99Ab0834f226e2bF8f0BdcB3
// sSpell deployed to: 0xCdce0d3E4aE368761DBa5e65c3a540d2ee1ce4C1



