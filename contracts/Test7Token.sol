// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @dev Creates a mintable and burnable ERC20 token, called Test7.
 *
 * The default value of decimals is 18. To select a different value for
 * decimals you should overload it.
 *
 */
contract Test7Token is ERC20, ERC20Burnable, Ownable {
    constructor(uint256 initialSupply) ERC20("Test7", "TST7") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function getBalanceOfBNB() public view returns (uint256) {
        return address(msg.sender).balance;
    }
}
