function page1ToPage2(web3) {
    var page1Btn = document.getElementById("page1ButtonA");
    page1Btn.onclick = function () {
        var searchAddress = document.getElementById("searchAddress").value;
        if (searchAddress.length === 42) {
            web3.eth.getCode(searchAddress, function (error, result) {
                if (!error) {
                    if (result === "0x0") {
                        alert("Address exists!");
                        document.getElementById("secondAlice").innerText = "Check address: " + searchAddress;
                        document.getElementById("firstAlice").innerText = "The Download Information\n"
                        document.getElementById("page1").hidden = true;
                        document.getElementById("page2").hidden = false;
                        getInputAlice();
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

function getInputAlice() {
    var inputAliceContext = "oefhpwporejgfiowerjig\najlfg;gns;kg\n";
    document.getElementById("AliceText").innerText = "[Download information]:\n"+ inputAliceContext;
    document.getElementById("AliceContext").value = "";
}