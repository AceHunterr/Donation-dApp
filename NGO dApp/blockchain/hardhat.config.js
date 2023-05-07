/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.18",
   // defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {
         chainId:1337,
      },
      // polygon: {
      //    url: API_URL,
      //    accounts: [`0x${PRIVATE_KEY}`]
      // }
   },
   
}