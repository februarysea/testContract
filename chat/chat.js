function getInputAlice() {
    var inputBtn = document.getElementById("AliceSendBtn");
    inputBtn.onclick = function() {
        var inputAliceContext = document.getElementById("AliceContext").value;
        document.getElementById("BobText").innerText = inputAliceContext;
        return 0;
    }
}

function getInputBob() {
    var inputBtn = document.getElementById("BobSendBtn");
    inputBtn.onclick = function () {
        var inputBobContext = document.getElementById("BobContext").value;
        document.getElementById("AliceText").innerText = inputBobContext;
        return 0;
    }
}

function confirmAliceAddress() {
    var confirmBtn = document.getElementById("AliceConfirmBtn");
    confirmBtn.onclick = function(){
        var AliceAdd = document.getElementById("AliceAddress").value;
        if(AliceAdd) {//travel address
            alert("Address exists!\nPlease input context!");
            getInputAlice();
        }
        else {
            alert("No Address!");
        }
    }
}

function confirmBobAddress() {
    var confirmBtn = document.getElementById("BobConfirmBtn");
    confirmBtn.onclick = function(){
        var BoBAdd = document.getElementById("BobAddress").value;
        if(BoBAdd) {//travel address
            alert("Address exists!\nPlease input context!");
            getInputBob();
        }
        else {
            alert("No Address!");
            return 0;
        }
    }
}

