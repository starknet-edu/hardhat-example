import { expect } from "chai";
import { starknet } from "hardhat";
import { StarknetContract, StarknetContractFactory } from "hardhat/types/runtime";

describe("Mock test file", async function () {
  this.timeout(6_000_000);

  let mockContractFactory: StarknetContractFactory;
  let mockContract: StarknetContract;

  before(async () => {
    mockContractFactory = await starknet.getContractFactory("mock_contract");
    mockContract = await mockContractFactory.deploy();
  });

  describe("Test invoke increase_balance", async () => {
    it("increase balance by 2", async () => {
      await mockContract.invoke("increase_balance", { amount: 2 });
      expect(await mockContract.call("get_balance")).to.deep.eq({ res: BigInt(2) });
    });
  });
});
