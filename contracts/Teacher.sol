pragma solidity ^0.4.23;

import "./Administer.sol";

contract Teacher is Administer {

    function uploadData(uint id, uint data) onlyAccountOf(id) {
        chainData.push(data);
    }


}
