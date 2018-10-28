var userName1;
var userName2;
var state = 0;

function getInputAlice() {
    var inputBtn = document.getElementById("AliceSendBtn");
    var inputAliceContext = "";
    inputBtn.onclick = function() {
        if(inputAliceContext === "") {
            inputAliceContext = document.getElementById("AliceContext").value;
            document.getElementById("BobText").innerText = "[" + userName1 + "]:\n"+ inputAliceContext;
            document.getElementById("AliceContext").value = "";
        }
        else {
            inputAliceContext = inputAliceContext+ "\n" + document.getElementById("AliceContext").value;
            document.getElementById("BobText").innerText = "[" + userName1 + "]:\n"+ inputAliceContext;
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
            document.getElementById("AliceText").innerText = "[" + userName2 + "]:\n"+  inputBobContext;
            document.getElementById("BobContext").value = "";
        }
        else {
            inputBobContext = inputBobContext+ "\n" + document.getElementById("BobContext").value;
            document.getElementById("AliceText").innerText = "[" + userName2 + "]\n"+  inputBobContext;
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
                        if (AliceAdd === "0x454ae50829FC65D3c5e013D6C097862A84FA7546"){
                            $('#AliceConfirmBtn').prop('disabled', true);
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
                        if(BobAdd === "0xfBbc3725fb8Ed8c8328800BE9b7a7D4F9fD07bA4"){
                            $('#BobConfirmBtn').prop('disabled', true);
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

function page1ToPage2() {
    page1ButtonA.onclick = function () {
        if(document.getElementById("userNameA").value !== "") {
            userName1 = document.getElementById("userNameA").value;
            document.getElementById("firstAlice").innerText = userName1;
            document.getElementById("secondAlice").innerText = "Your address is: 0xfBbc3725fb8Ed8c8328800BE9b7a7D4F9fD07bA4.";
            document.getElementById("img1").hidden = true;
            document.getElementById("text1").hidden = true;
            document.getElementById("input1").hidden = true;
            document.getElementById("button1").hidden = true;
            document.getElementById("showText1").hidden = false;
            state++;
            if(state === 2) {
                document.getElementById("page1").hidden = true;
                document.getElementById("page2").hidden = false;
                document.getElementById("showText1").hidden = true;
            }
        }
        else {
            alert("Please input user1 name!");
        }
    };

    page1ButtonB.onclick = function () {
        if(document.getElementById("userNameB").value !== "") {
            userName2 = document.getElementById("userNameB").value;
            document.getElementById("firstBob").innerText = userName2;
            document.getElementById("secondBob").innerText = "Your address is: 0x454ae50829FC65D3c5e013D6C097862A84FA7546.";
            document.getElementById("img2").hidden = true;
            document.getElementById("text2").hidden = true;
            document.getElementById("input2").hidden = true;
            document.getElementById("button2").hidden = true;
            document.getElementById("showText2").hidden = false;
            state++;
            if(state === 2) {
                document.getElementById("page1").hidden = true;
                document.getElementById("page2").hidden = false;
                document.getElementById("showText1").hidden = true;
            }
        }
        else {
            alert("Please input user2 name!");
        }
    };
}