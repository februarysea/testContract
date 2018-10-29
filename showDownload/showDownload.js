function page1ToPage2(web3) {
    var page1Btn = document.getElementById("page1ButtonA");
    page1Btn.onclick = function () {
        var searchAddress = document.getElementById("searchAddress").value;
        if (searchAddress.length === 42) {
            web3.eth.getCode(searchAddress, function (error, result) {
                if (!error) {
                    if (result === "0x0") {
                        alert("Address exists!");
                        var inputAliceContext = "0x6d71d5eFa710B51198C03807D75e0A8097b21543 Hunk\n"
                                              + "0x454ae50829FC65D3c5e013D6C097862A84FA7546 Kitty\n"
                                              + "0x030a2d378031577De72ac1AEca5fA3bc05E7b3a2 Stan\n";
                        document.getElementById("info").innerText = inputAliceContext;
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

