// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

import "./ERC721Enumerable.sol";

contract FriskyFoxNFT is ERC721Enumerable {
using Strings for uint256;

    address private admin;

    string private _nftName = "Frisky Fox";
    string private _nftSymbol = "FOXY";
    uint256 private mintCost = 2*10**18;
    uint256 private mintCostForWhitelistInPresale = 1*10**18;

    string private __baseURI;
    string private __URIbeforeRevel;
    string private _uriExtention = ".json";

    bool private _revelNFT = false;

    uint256 public maxSupply = 9969 ;

    uint256 private publicSaleStartDate = 1638619900;
    uint256 private preSaleStartDate = 1638619800; // 6 hours

    address[] private whitelistedAddresses;
    mapping(address => uint256) private addressMintedBalance;
    uint256 private maxMintPerUser = 50; //  max  mint nft by one user
    uint256 private maxMintPerTransction = 5; //  max mint in one traction
    uint256 private maxMintPerUserInPresale = 2; // whitelist max and in one traction

    constructor(string memory _base,string memory _uriBeforetRevel) ERC721(_nftName, _nftSymbol)  {
        admin = msg.sender;
        __baseURI = _base;
        // ipfs://CID/
        __URIbeforeRevel = _uriBeforetRevel;
        // ipfs://CID/a.json
    }

    modifier onlyAdmin{
      require(msg.sender == admin);
      _;
   }

    function mint(uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        require(block.timestamp > preSaleStartDate,"Nft miniting not started yet.");
        require(_mintAmount > 0, "need to mint at least 1 NFT");
        require(_mintAmount <= maxMintPerTransction, "max mint amount per transction exceeded");
        require(supply + _mintAmount <= maxSupply, "max NFT limit exceeded");


        if (block.timestamp < publicSaleStartDate ) {
            if(isWhitelisted(msg.sender)) {
                // require(_mintAmount <= maxMintPerUserInPresale, "max mint amount per session in presale exceeded");
                require(msg.value >= mintCostForWhitelistInPresale * _mintAmount, "insufficient funds");
                uint256 userMintedCount = addressMintedBalance[msg.sender];    
                require(userMintedCount + _mintAmount <= maxMintPerUserInPresale, "max NFT per address exceeded");
            } else {
                require(false, "user is not whitelisted. in presale only whitelisted can buy nft.");
            }
        } else{
            uint256 _userMintedCount = addressMintedBalance[msg.sender];    
            require(_userMintedCount + _mintAmount <= maxMintPerUser, "max NFT per address exceeded");
            require(msg.value >= mintCost * _mintAmount, "insufficient funds");
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
          addressMintedBalance[msg.sender]++;
          _safeMint(msg.sender, supply + i);
        }
        
    }

    function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

    function tokenURI(uint256 _tokenId) public view virtual override returns(string memory){
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");
        if(_revelNFT){
        string memory baseURI = __baseURI;
        return string(abi.encodePacked(baseURI, _tokenId.toString(),_uriExtention));
        } else{
        return __URIbeforeRevel;
        }
    }

    

    function isWhitelisted(address _user) public view returns (bool) {
    for (uint i = 0; i < whitelistedAddresses.length; i++) {
      if (whitelistedAddresses[i] == _user) {
          return true;
      }
    }
    return false;
  }

  
  function addNewWhitelistUsers(address[] calldata _users) public onlyAdmin {
    // ["","",""]
    delete whitelistedAddresses;
    whitelistedAddresses = _users;
  }

    function withdrawBalance(address _to) public payable onlyAdmin {
        (bool os, ) = payable(_to).call{value: address(this).balance}("");
        require(os);
    }
    function adminBalance() public view onlyAdmin returns(uint256) {
        return  address(this).balance;
    }

  function setMaxMintPerUser(uint256 _limit) public onlyAdmin {
    maxMintPerUser = _limit;
  }

  function setMaxMintPerUserInPresale(uint256 _limit) public onlyAdmin {
    maxMintPerUserInPresale = _limit;
  }

  function setMaxMintPerTransction(uint256 _limit) public onlyAdmin {
    maxMintPerTransction = _limit;
  }
  
  function setMintCost(uint256 _newCost) public onlyAdmin {
    mintCost = _newCost;
  }

  function setMintCostForWhitelisted(uint256 _mintCostForWhitelisted) public onlyAdmin {
    mintCostForWhitelistInPresale = _mintCostForWhitelisted;
  }

  function setBaseURI(string memory _newBaseURI) public onlyAdmin {
    __baseURI = _newBaseURI;
  }

  function changeRevelStatus() public onlyAdmin {
    _revelNFT = !_revelNFT;
  }
  
  function setBaseUriExtention(string memory _newBaseExtension) public onlyAdmin {
    _uriExtention = _newBaseExtension;
  }


  function isPresaleOn() public view returns(bool){
    if(block.timestamp > preSaleStartDate){
      if(block.timestamp > publicSaleStartDate){
        return false;
      } else{
        return true;
      }
    } else{
      return false;
    }
  }

  function isPublicSaleOn() public view returns(bool){
     if(block.timestamp > publicSaleStartDate){
        return true;
      } else{
        return false;
      }
  }


    function getMaxSupply() public view returns(uint256){
        return maxSupply;
    }

    function URIBeforeRevel() public view returns(string memory){
        return __URIbeforeRevel;
    }

    function getMintCost() public view returns(uint256){
        return mintCost;
    }

    function getMintCostForWhitelist() public view returns(uint256){
        return mintCostForWhitelistInPresale;
    }

    function getMaxMintPerUser() public view returns(uint256){
        return maxMintPerUserInPresale;
    }

    function getWhitelistedAddresses() public view returns(address[] memory){
      return whitelistedAddresses;
    }

    function checkRevelStatus() public view returns(bool){
      return _revelNFT;
    }
    
}
