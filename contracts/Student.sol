pragma solidity ^0.4.23;

import "./Administer.sol";

contract Student is Administer {
    uint dataFee = 0.01 ether;
    string public names;

    function uploadStudentData(uint id, string data)  {
        chainData.push(data);

        uploadUserToDataId[idToUser[id]] = chainData.length-1;
    }

    function travelData() internal{
        uint i = 0;
        for (i;i<=chainData.length-1;i++){
            //print(chainData[i])
        }
    }

    function getData(uint id, uint dataId) onlyAccountOf(id) payable external {
        require(msg.value == dataFee);
        travelData();
        downloadUserToData[idToUser[id]]=chainData[0];//0代表第一篇笔记
        //show to download student
    }

    function showDownloadInfo() public view returns (string) {
        names = "Hank,Stan,Bobby,Shelly download your notes";
        return names;
    }

    function withdraw() external onlyOwner {
        owner.transfer(this.balance);
    }

}