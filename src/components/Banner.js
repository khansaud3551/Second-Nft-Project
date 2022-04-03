import React from "react";
import $ from "jquery";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(
  "wss://eth-mainnet.alchemyapi.io/v2/ifzyXSjPF_OGffl3dZHF8cqSUCDH0dbR"
);

const contractAbi = [{ "inputs": [{ "internalType": "string", "name": "newUnrevealedURI", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "_approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransfered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "SUPPLY_MAX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SUPPLY_PER_TX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseExtension", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId_", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "looksrare", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "marketplacesApproved", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "opensea", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId_", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "data_", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "saleState", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "newBaseURI", "type": "string" }, { "internalType": "string", "name": "newBaseExtension", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newLooksrare", "type": "address" }], "name": "setLooksrare", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOpensea", "type": "address" }], "name": "setOpensea", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newSaleState", "type": "uint256" }], "name": "setSaleState", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "newUnrevealedURI", "type": "string" }], "name": "setUnrevealedURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "toggleMarketplacesApproved", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index_", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }, { "internalType": "uint256", "name": "index_", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unrevealedURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account_", "type": "address" }], "name": "walletOfOwner", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC1155", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "withdrawERC1155", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "withdrawERC20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC721", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "withdrawERC721", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
console.log(contractAbi);

const contractAddress = "0x93939BaDF94214ecB2dE2FD1f172c559c6F6AF56";
const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
console.log(contractInstance);

var saleState = contractInstance.methods
  .saleState()
  .call()
  .then(function (_state) {
    console.log("Sale state is " + _state);
    if (_state == 0) {
      // $("#mydiv").hide();
      // $("#nft-num").hide();
      // $("#mint-btn").html("Public sale not open yet");
      // $("#mint-btn").prop("disabled", true);
    } else {
      $("#mydiv").show();
      $("#nft-num").show();
      $("#mint-btn").html("Mint NFTs");
      $("#mint-btn").prop("disabled", false);
    }
  });

async function mintNFT(amount) {
  var totalSupply = contractInstance.methods
    .totalSupply()
    .call()
    .then(function (_supply) {
      console.log("Total supply is " + _supply);
      if (_supply <= 100) {
        contractInstance.methods.mint(amount).send({
          to: contractAddress, // Required except during contract publications.
          from: window.ethereum.selectedAddress, // must match user's active address.
          value: "0",
        });
      } else {
        contractInstance.methods.mint(amount).send({
          to: contractAddress, // Required except during contract publications.
          from: window.ethereum.selectedAddress, // must match user's active address.
          value: "10000000000000000" * amount + "",
        });
      }
    });
}

function _mintNFT() {
  mintNFT($("#nft-num").val());
}

function Banner() {
  return (
    <div
      className="banner px-0 container-fluid banner__overlay"
      data-aos="fade"
    >
      <img className="banner_img" src="assets/banner.png" alt="" />
      <div className="banner_cont d-flex flex-column flex-md-row ">
        <div id="mydiv" className="col-md-3 div_style2">
          <div className="d-flex w-100">
            <input
              className="custom_style5675 input-lg w-100"
              id="nft-num"
              name="nft-num"
              type="number"
              name="number"
              defaultValue="1"
              placeholder="1"
              min="1"
              max="10"
              readonly
            ></input>

            {/* // adding increment and decrement buttons */}

            <div className="d-flex flex-column gap_8">
              <button
                className="btn btn-primary"
                onClick={() => {
                  var num = parseInt($("#nft-num").val());
                  if (num < 10) {
                    $("#nft-num").val(num + 1);
                  }
                }}
              >
                +
              </button>

              <button
                className="btn btn-primary "
                onClick={() => {
                  var num = parseInt($("#nft-num").val());
                  if (num > 1) {
                    $("#nft-num").val(num - 1);
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>

        <span className="d-flex justify-content-center">
          <button
            type="submit"
            className="banner_btn w-100"
            id="mint-btn"
            onClick={_mintNFT}
          >
            Mint NFTs
          </button>
        </span>
      </div>
      <div className="overlay_item"></div>
    </div>
  );
}

export default Banner;
