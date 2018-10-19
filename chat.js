function getInputAlice() {
    var inputBtn = document.getElementById("AliceSendBtn");
    var str = document.getElementById("AliceContext").value;
    inputBtn.onclick = function() {
    }
}

function getInputBob() {
    var inputBtn = document.getElementById("BobSendBtn");
    var str = document.getElementById("Context").value;
    inputBtn.onclick = function () {
    }
}

function confirmAliceAddress(address) {
    var confirmBtn = document.getElementById("AliceConfirmBtn");
    confirmBtn.onclick = function(){
        if(address) {//travel address
            alert("Address exists!");
        }
        else {
            alert("No Address!");
        }
    }
}

function confirmBobAddress(address) {
    var confirmBtn = document.getElementById("BobConfirmBtn");
    confirmBtn.onclick = function(){
        if(address) {//travel address
            alert("Address exists!");
        }
        else {
            alert("No Address!");
        }
    }
}

