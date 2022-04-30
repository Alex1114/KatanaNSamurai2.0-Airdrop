//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//  _  __ _   _   _____   ___       ___
// | |/ /| \ | | / ____| |__ \     / _ \
// | ' / |  \| || (___      ) |   | | | |
// |  <  | . ` | \___ \    / /    | | | |
// | . \ | |\  | ____) |  / /_  _ | |_| |
// |_|\_\|_| \_||_____/  |____|(_) \___/

contract KNSAnnouncement is Ownable, ERC1155{

	// Variables
	// ------------------------------------------------------------------------
    string private _name = "KNS2.0 Announcement";
    string private _symbol = "KNS2.0";
    uint256 public MAX_TOKEN = 6666;
    uint256 public totalSupply = 0;

	// Constructor
	// ------------------------------------------------------------------------
    constructor()ERC1155("https://gateway.pinata.cloud/ipfs/QmRqPK3wYTgXuqoUC5B4uR9XKm1CAJmDHYe5AwTgi6Qu5a"){}

	function name() public view virtual returns (string memory) {
		return _name;
	}

	function symbol() public view virtual returns (string memory) {
		return _symbol;
	}

    // Airdrop functions
    // ------------------------------------------------------------------------
    function airdrop(address[] calldata _to) public onlyOwner{
        uint256 count = _to.length;

        for (uint256 i = 0; i < count; i++){
            _mint(_to[i], 1, 1, "");
            totalSupply += 1;
        }
    }

	// setting functions
	// ------------------------------------------------------------------------    
    function setBaseURI(string memory baseURI) public onlyOwner{
        _setURI(baseURI);
    }

}
