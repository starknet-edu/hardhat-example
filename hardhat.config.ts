import { HardhatUserConfig } from "hardhat/types";
import "@shardlabs/starknet-hardhat-plugin";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  starknet: {
    // dockerizedVersion: "0.7.1",
    venv: "active",
    network: "devnet",
  },
  networks: {
    devnet: {
      url: "http://127.0.0.1:5000/",
    },
    testnet: {
      url: "https://alpha4.starknet.io/",
    },
  },
};

export default config;
