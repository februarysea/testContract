pragma solidity ^0.4.23;

import "./Administer.sol";

contract Student is Administer {
    uint dataFee = 0.01 ether;

    function getData(uint id, uint dataId)
    onlyAccountOf(id) payable external {
        require(msg.value == dataFee);
        //print(chainData[dataId]);
    }

    function withdraw() external onlyOwner {
        owner.transfer(this.balance);
    }
}