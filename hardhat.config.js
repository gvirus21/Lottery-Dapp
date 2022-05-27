
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('hardhat-deploy')
require('solidity-coverage')
require('hardhat-contract-sizer')
require('hardhat-gas-reporter')
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.11",
};
