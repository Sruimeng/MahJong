function chiIconManager() {
    console.log("mahjongChiFlag:"+mahjongChiFlag);
    document.getElementById("guo").style.display = "none";
    document.getElementById("chi").style.display = "none";
    document.getElementById("chi1").style.display = "none";
    document.getElementById("chi2").style.display = "none";
    document.getElementById("gang").style.display = "none";
    document.getElementById("peng").style.display = "none";
    document.getElementById("peng1").style.display = "none";
    document.getElementById("gang1").style.display = "none";
    document.getElementById("gang2").style.display = "none";
    document.getElementById("gang3").style.display = "none";
    document.getElementById("hu").style.display = "none";


    send(chiMahJongAndPlayer);
    setTimeout(function () {
        send(chiNumber);
    },300);

    addMahJongChiCartoon();
}

function pengIconManager() {
    console.log("mahJongPengPaiFlag:"+mahJongPengPaiFlag);
    document.getElementById("guo").style.display = "none";
    document.getElementById("chi").style.display = "none";
    document.getElementById("chi1").style.display = "none";
    document.getElementById("chi2").style.display = "none";
    document.getElementById("gang").style.display = "none";
    document.getElementById("peng").style.display = "none";
    document.getElementById("peng1").style.display = "none";
    document.getElementById("gang1").style.display = "none";
    document.getElementById("gang2").style.display = "none";
    document.getElementById("gang3").style.display = "none";
    document.getElementById("hu").style.display = "none";
    console.log("mahjongPengPaiNumber:"+mahjongPengPaiNumber);
    send(pengMahJongAndPlayer);
    addMahJongPengCartoon();
}
