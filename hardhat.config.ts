import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: "https://eth-mainnet.g.alchemy.com/v2/M8sB5u6bNh7yEEFzYUV9dhtTOT34yPlX",
      },
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      //@ts-ignore
      accounts: [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY2],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};



export default config;
