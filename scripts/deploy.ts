import { starknet } from "hardhat";

async function main() {
  const mockContractFactory = await starknet.getContractFactory("mock_contract");
  const mockContract = await mockContractFactory.deploy();

  console.log("mock_contract deployed to:", mockContract.address);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
