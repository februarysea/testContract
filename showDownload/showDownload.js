var userName1;
var userName2;

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
            document.getElementById("page1").hidden = true;
            document.getElementById("page2").hidden = false;
        }
        else {
            alert("Please input user1 name!");
        }
    };
}