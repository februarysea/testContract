pragma solidity ^0.4.23;

import "./Administer.sol";

contract Teacher is Administer {

    function uploadTeacherData(uint id, string data) onlyAccountOf(id) {
        chainData.push(data);
        uploadUserToDataId[idToUser[id]] = chainData.length-1;
    }
}
