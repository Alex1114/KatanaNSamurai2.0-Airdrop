const { ethers } = require("hardhat");

const NFT = artifacts.require("KNSAnnouncement");

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}) => {
  const {deploy, all} = deployments;
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];
  console.log("");
  console.log("Deployer: ", deployer.address);

  nft = await deploy('KNSAnnouncement', {
    contract: "KNSAnnouncement",
    from: deployer.address,
    args: [
    ],
  });

  console.log("KNSAnnouncement address: ", nft.address);
};

module.exports.tags = ['KNSAnnouncement'];