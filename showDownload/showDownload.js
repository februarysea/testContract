function showDownloadData() {
    var inputBtn = document.getElementById("AliceSendBtn");
    var inputAliceContext = "";
    inputBtn.onclick = function() {
            var Alice = "0xd5677cf67b5aa051bb40496e68ad359eb97cfbf8";
            var AliceDownload = "math.pdf download list\nBob,Stan,Butters,Wendy.\n"
            inputAliceContext = document.getElementById("AliceContext").value;
            if(inputAliceContext === Alice){
                document.getElementById("AliceText").innerText = AliceDownload;
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
                        alert("Please input context!");
                        showDownloadData();
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
