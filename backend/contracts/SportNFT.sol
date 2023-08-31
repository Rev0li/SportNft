// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SportNFT is ERC721 {
    constructor() ERC721("SportNFT", "SPORT") {}

    function createNFT(address sportif, string memory tokenURI) external {
        uint256 tokenId = totalSupply();
        _mint(sportif, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}
