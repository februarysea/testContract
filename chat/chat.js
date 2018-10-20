function getInputAlice() {
    var inputBtn = document.getElementById("AliceSendBtn");
    inputBtn.onclick = function() {
        var beforeText = document.getElementById("BobText").value;
        var inputAliceContext = document.getElementById("AliceContext").value;
        if(beforeText){
            document.getElementById("BobText").innerText = beforeText + "\n" + inputAliceContext;
        }
        else {
            document.getElementById("BobText").innerText = inputAliceContext;
        }
    }
}

function getInputBob() {
    var inputBtn = document.getElementById("BobSendBtn");
    inputBtn.onclick = function() {
        var beforeText = document.getElementById("AliceText").value;
        var inputAliceContext = document.getElementById("BobContext").value;
        if(beforeText){
            document.getElementById("AliceText").innerText = beforeText + "\n" + inputAliceContext;
        }
        else {
            document.getElementById("AliceText").innerText = inputAliceContext;
        }
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
        }
    }
}

