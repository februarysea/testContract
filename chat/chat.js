var userName1;
var userName2;

function getInputAlice() {
    var inputBtn = document.getElementById("AliceSendBtn");
    var inputAliceContext = "";
    inputBtn.onclick = function() {
        if(inputAliceContext === "") {
            inputAliceContext = document.getElementById("AliceContext").value;
            document.getElementById("BobText").innerText = "[" + userName2 + "]:\n"+ inputAliceContext;
            document.getElementById("AliceContext").value = "";
        }
        else {
            inputAliceContext = inputAliceContext+ "\n" + document.getElementById("AliceContext").value;
            document.getElementById("BobText").innerText = "[" + userName2 + "]:\n"+ inputAliceContext;
            document.getElementById("AliceContext").value = "";
        }

    }
}

function getInputBob() {
    var inputBtn = document.getElementById("BobSendBtn");
    var inputBobContext = "";
    inputBtn.onclick = function() {
        if(inputBobContext === "") {
            inputBobContext = document.getElementById("BobContext").value;
            document.getElementById("AliceText").innerText = "[" + userName1 + "]:\n"+  inputBobContext;
            document.getElementById("BobContext").value = "";
        }
        else {
            inputBobContext = inputBobContext+ "\n" + document.getElementById("BobContext").value;
            document.getElementById("AliceText").innerText = "[" + userName1 + "]\n"+  inputBobContext;
            document.getElementById("BobContext").value = "";
        }

    }
}

function confirmAliceAddress(web3) {
    var confirmBtn = document.getElementById("AliceConfirmBtn");
    confirmBtn.onclick = function(){
        var AliceAdd = document.getElementById("AliceAddress").value;
        if (AliceAdd.length === 42) {
            web3.eth.getCode(AliceAdd, function(error, result) {
                if(!error) {
                    if(result === "0x0") {
                        alert("Address exists!");
                        alert("Please input context!");
                        if (AliceAdd === "0x454ae50829FC65D3c5e013D6C097862A84FA7546"){
                            getInputAlice();
                        }
                    }
                    else {
                        alert("No Address!");
                    }
                }
            });
        }
        else {
            alert("Please input correct address");
        }
    };
}

function confirmBobAddress(web3) {
    var confirmBtn = document.getElementById("BobConfirmBtn");
    confirmBtn.onclick = function(){
        var BobAdd = document.getElementById("BobAddress").value;
        if (BobAdd.length === 42) {
            web3.eth.getCode(BobAdd, function(error, result) {
                if(!error) {
                    if(result === "0x0") {
                        alert("Address exists!");
                        alert("Please input context!");
                        if(BobAdd == "0xfBbc3725fb8Ed8c8328800BE9b7a7D4F9fD07bA4"){
                            getInputBob();
                        }
                    }
                    else  {
                        alert("No Address!");
                    }
                }
            });
        }
        else {
            alert("Please input correct address");
        }
    }
}

/*function getName() {
    //userName1= prompt("Please input user1 name:");
    //userName2 = prompt("Please input user2 name:");

    document.getElementById("firstAlice").innerText = "\nUser1:" + userName1;
    document.getElementById("firstBob").innerText = "\nUser2:" + userName2;
    document.getElementById("secondAlice").innerText = "\nYour address is: 0xfBbc3725fb8Ed8c8328800BE9b7a7D4F9fD07bA4.";
    document.getElementById("secondBob").innerText="\nYour address is: 0x454ae50829FC65D3c5e013D6C097862A84FA7546.";
}*/

function page1ToPage2() {
    page1ButtonA.onclick = function () {
        userName1 = document.getElementById("userNameA").value;
        alert("hello");
        document.getElementById("page1A").hidden = true;
        document.getElementById("page2A").hidden = false;
    };

    page1ButtonB.onclick = function () {
        userName2 = document.getElementById("userNameB").value;
        alert("hello");
        document.getElementById("page1B").hidden = true;
        document.getElementById("page2B").hidden = false;
    };
}