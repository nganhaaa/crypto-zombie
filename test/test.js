const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");
//import abi from "../abi.json";
//const { ethers, upgrades } = require("hardhat");
// require("dotenv").config();
//import abi from "../abi.json"
async function main() {
  const contract = await ethers.getContractFactory("CryptoZombies");
  const rd = await contract.attach("0xc8495FcfA6CaBD8D94f884481237f889b1bD6E2e");
  const acc = ["0xF88DA76Bb5fCCd479601394Fb021F340bD0962A2","0x336907ee043f4Bf512DECd9F4b420de94232FE80"];

//    const tx1 = await rd.attack(3,1);
//    await tx1.wait();

//const levelUpFee = ethers.utils.parseEther("0.001"); 

//const tx2 = await rd.levelUp(3, { value: levelUpFee });
    //const levelUpFee = ethers.utils.parseEther("0.001"); 

    const tx2 = await rd.feedOnKitty(3, 1);
  console.log(tx2);
}

  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })