function getInputAlice() {
    var inputBtn = document.getElementById("AliceSendBtn");
    inputBtn.onclick = function() {
        var beforeText = document.getElementById("BobText").value;
        var inputAliceContext = document.getElementById("AliceContext").value;
        /*if(beforeText){
            document.getElementById("BobText").innerText = beforeText + "\n" + inputAliceContext;
        }
        else {
            document.getElementById("BobText").innerText = inputAliceContext;
        }*/
        document.getElementById("BobText").innerText = inputAliceContext;
        alert("send successfully!");
    }
}

function getInputBob() {
    var inputBtn = document.getElementById("BobSendBtn");
    inputBtn.onclick = function() {
        var beforeText = document.getElementById("AliceText").value;
        var inputAliceContext = document.getElementById("BobContext").value;
        /*if(beforeText){
            document.getElementById("AliceText").innerText = beforeText + "\n" + inputAliceContext;
        }
        else {
            document.getElementById("AliceText").innerText = inputAliceContext;
        }*/
        document.getElementById("AliceText").innerText = inputAliceContext;
        alert("send successfully!");
    }
}

function confirmAliceAddress(web3) {
    var confirmBtn = document.getElementById("AliceConfirmBtn");
    confirmBtn.onclick = function(){
        var AliceAdd = document.getElementById("AliceAddress").value;
        var code = web3.eth.getCode(AliceAdd);
        if(code === "0x") {//travel address
            alert("Address exists!\nPlease input context!");
            getInputAlice();
        }
        else {
            alert("No Address!");
        }
    }
}

function confirmBobAddress(web3) {
    var confirmBtn = document.getElementById("BobConfirmBtn");
    confirmBtn.onclick = function(){
        var BobAdd = document.getElementById("BobAddress").value;
        var code = web3.eth.getCode(BobAdd);
        if(code === "0x") {//travel address
            alert("Address exists!\nPlease input context!");
            getInputBob();
        }
        else {
            alert("No Address!");
        }
    }
}
