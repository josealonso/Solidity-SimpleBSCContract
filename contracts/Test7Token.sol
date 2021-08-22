pragma solidity >=0.8.0;

import "@openzeppelin/contracts@4.3.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.3.0/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.3.0/access/Ownable.sol";

contract Test7 is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("Test7", "TST7") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

