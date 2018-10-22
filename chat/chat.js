function getInputAlice() {
    var inputBtn = document.getElementById("AliceSendBtn");
    var inputAliceContext = "";
    inputBtn.onclick = function() {
        if(inputAliceContext === "") {
            inputAliceContext = document.getElementById("AliceContext").value;
            document.getElementById("BobText").innerText = inputAliceContext;
            document.getElementById("AliceContext").value = "";
        }
        else {
            inputAliceContext = inputAliceContext+ "\n" + document.getElementById("AliceContext").value;
            document.getElementById("BobText").innerText = inputAliceContext;
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
            document.getElementById("AliceText").innerText = inputBobContext;
            document.getElementById("BobContext").value = "";
        }
        else {
            inputBobContext = inputBobContext+ "\n" + document.getElementById("BobContext").value;
            document.getElementById("AliceText").innerText = inputBobContext;
            document.getElementById("BobContext").value = "";
        }

    }
}

function confirmAliceAddress(web3) {
    var confirmBtn = document.getElementById("AliceConfirmBtn");
    confirmBtn.onclick = function(){
        var AliceAdd = document.getElementById("AliceAddress").value;
        var code = web3.eth.getCode(AliceAdd, function(error, result) {
            if(!error) {
                if(result === "0x0") {
                    alert("Address exists!");
                    alert("Please input context!");
                    getInputAlice();
                }
                else {
                    alert("No Address!");
                }
            }
            else {
                alert("Please input correct address!");
            }
        });
    };
}

function confirmBobAddress(web3) {
    var confirmBtn = document.getElementById("BobConfirmBtn");
    confirmBtn.onclick = function(){
        var BobAdd = document.getElementById("BobAddress").value;
        var code = web3.eth.getCode(BobAdd, function(error, result) {
            if(!error) {
                if(result === "0x0") {
                    alert("Address exists!");
                    alert("Please input context!");
                    getInputBob();
                }
                else {
                    alert("No Address!");
                }
            }
            else {
                alert("Please input correct address!");
            }
        });
    }
}
