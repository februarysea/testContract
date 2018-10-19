function getInputAlice() {
    var str = document.getElementById("AliceContext").value;

}

function getInputBob() {
    var str = document.getElementById("BobContext").value;
}

function confirmAddress(address) {
    if(address === 570702561){//travel all address
        return true;
    }
    else {
        return false;
    }
}