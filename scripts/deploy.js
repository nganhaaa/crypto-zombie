const { ethers } = require("hardhat");

async function main() {

  //console.log("Account balance:", (await ethers.provider.getBalance(deployer)).toString());

  const Token = await ethers.getContractFactory("CryptoZombies"); 
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token address:",token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

