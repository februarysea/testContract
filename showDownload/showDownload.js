
function page1ToPage2(web3) {
    var page1Btn = document.getElementById("page1ButtonA");
    page1Btn.onclick = function () {
        var searchAddress = document.getElementById("searchAddress").value;
        if (searchAddress.length === 42) {
            web3.eth.getCode(searchAddress, function (error, result) {
                if (!error) {
                    if (result === "0x0") {
                        alert("Address exists!");
                        const address = "0xd4d596310f6304d2293e177ff495440497931db5";
                        const abi = [
                            {
                                "constant": true,
                                "inputs": [],
                                "name": "names",
                                "outputs": [
                                    {
                                        "name": "",
                                        "type": "string"
                                    }
                                ],
                                "payable": false,
                                "stateMutability": "view",
                                "type": "function"
                            },
                            {
                                "constant": true,
                                "inputs": [],
                                "name": "owner",
                                "outputs": [
                                    {
                                        "name": "",
                                        "type": "address"
                                    }
                                ],
                                "payable": false,
                                "stateMutability": "view",
                                "type": "function"
                            },
                            {
                                "constant": true,
                                "inputs": [
                                    {
                                        "name": "",
                                        "type": "uint256"
                                    }
                                ],
                                "name": "studentAccounts",
                                "outputs": [
                                    {
                                        "name": "studentId",
                                        "type": "uint256"
                                    },
                                    {
                                        "name": "studentPassword",
                                        "type": "string"
                                    }
                                ],
                                "payable": false,
                                "stateMutability": "view",
                                "type": "function"
                            },
                            {
                                "constant": true,
                                "inputs": [
                                    {
                                        "name": "",
                                        "type": "uint256"
                                    }
                                ],
                                "name": "teacherAccounts",
                                "outputs": [
                                    {
                                        "name": "teacherId",
                                        "type": "uint256"
                                    },
                                    {
                                        "name": "teacherPassword",
                                        "type": "string"
                                    }
                                ],
                                "payable": false,
                                "stateMutability": "view",
                                "type": "function"
                            },
                            {
                                "constant": false,
                                "inputs": [
                                    {
                                        "name": "newOwner",
                                        "type": "address"
                                    }
                                ],
                                "name": "transferOwnership",
                                "outputs": [],
                                "payable": false,
                                "stateMutability": "nonpayable",
                                "type": "function"
                            },
                            {
                                "anonymous": false,
                                "inputs": [
                                    {
                                        "indexed": true,
                                        "name": "previousOwner",
                                        "type": "address"
                                    },
                                    {
                                        "indexed": true,
                                        "name": "newOwner",
                                        "type": "address"
                                    }
                                ],
                                "name": "OwnershipTransferred",
                                "type": "event"
                            },
                            {
                                "constant": false,
                                "inputs": [
                                    {
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "name": "data",
                                        "type": "string"
                                    }
                                ],
                                "name": "uploadStudentData",
                                "outputs": [],
                                "payable": false,
                                "stateMutability": "nonpayable",
                                "type": "function"
                            },
                            {
                                "constant": false,
                                "inputs": [
                                    {
                                        "name": "id",
                                        "type": "uint256"
                                    },
                                    {
                                        "name": "dataId",
                                        "type": "uint256"
                                    }
                                ],
                                "name": "getData",
                                "outputs": [],
                                "payable": true,
                                "stateMutability": "payable",
                                "type": "function"
                            },
                            {
                                "constant": true,
                                "inputs": [],
                                "name": "showDownloadInfo",
                                "outputs": [
                                    {
                                        "name": "",
                                        "type": "string"
                                    }
                                ],
                                "payable": false,
                                "stateMutability": "view",
                                "type": "function"
                            },
                            {
                                "constant": false,
                                "inputs": [],
                                "name": "withdraw",
                                "outputs": [],
                                "payable": false,
                                "stateMutability": "nonpayable",
                                "type": "function"
                            }
                        ];
                        const myContractInstance = web3.eth.contract(abi).at(address);
                        myContractInstance.showDownloadInfo.call(function (error, result) {
                            if(!error) {
                                alert(result);
                                document.getElementById("info").innerText = result;
                            }
                        });
                    }
                    else {
                        alert("No Address!");
                    }
                }
            });
        }
        else {
                alert("Please input correct address!");
        }
    };
}
