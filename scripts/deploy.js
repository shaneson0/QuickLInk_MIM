// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MagicInternetMoney = await hre.ethers.getContractFactory("MagicInternetMoney");
  const MinimalTimeLock = await hre.ethers.getContractFactory("MinimalTimeLock");
  const Spell = await hre.ethers.getContractFactory("Spell");
  const SpellPower = await hre.ethers.getContractFactory("SpellPower");
  const TimePower = await hre.ethers.getContractFactory("TimePower");

  const magicInternetMoney = await MagicInternetMoney.deploy();
  const minimalTimeLock = await MinimalTimeLock.deploy();
  const spell = await Spell.deploy();
  const spellPower = await SpellPower.deploy();
  const timePower = await TimePower.deploy();

  await magicInternetMoney.deployed();
  await minimalTimeLock.deployed();
  await spell.deployed();
  await spellPower.deployed();
  await timePower.deployed();  

  console.log("magicInternetMoney deployed to:", magicInternetMoney.address);
  console.log("minimalTimeLock deployed to:", minimalTimeLock.address);
  console.log("spell deployed to:", spell.address);
  console.log("spellPower deployed to:", spellPower.address);
  console.log("timePower deployed to:", timePower.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
