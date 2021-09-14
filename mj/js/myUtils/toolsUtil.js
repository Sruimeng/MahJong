function returnChoosePlayer(strVal) {
    var playerInt=5;
    if(tempdirection===0)
    {
        if(strVal==="a")
        {
            playerInt=0;
            return playerInt;
        }else if(strVal==="b")
        {
            playerInt=1;
            return playerInt;
        }else if(strVal==="c")
        {
            playerInt=2;
            return playerInt;
        }else if(strVal==="d")
        {
            playerInt=3;
            return playerInt;
        }
    }else if(tempdirection===1)
    {
        if(strVal==="a")
        {
            playerInt=3;
            return playerInt;
        }else if(strVal==="b")
        {
            playerInt=0;
            return playerInt;
        }else if(strVal==="c")
        {
            playerInt=1;
            return playerInt;
        }else if(strVal==="d")
        {
            playerInt=2;
            return playerInt;
        }
    }else if(tempdirection===2)
    {
        if(strVal==="a")
        {
            playerInt=2;
            return playerInt;
        }else if(strVal==="b")
        {
            playerInt=3;
            return playerInt;
        }else if(strVal==="c")
        {
            playerInt=0;
            return playerInt;
        }else if(strVal==="d")
        {
            playerInt=1;
            return playerInt;
        }
    }else if(tempdirection===3)
    {
        if(strVal==="a")
        {
            playerInt=1;
            return playerInt;
        }else if(strVal==="b")
        {
            playerInt=2;
            return playerInt;
        }else if(strVal==="c")
        {
            playerInt=3;
            return playerInt;
        }else if(strVal==="d")
        {
            playerInt=0;
            return playerInt;
        }
    }

}

function returnYesOrNoFromTwoPlayers(tempdirection,getWebSocketTempDirection) {
    if(tempdirection===1&&getWebSocketTempDirection==="a")
    {
        return true;
    }else if(tempdirection===2&&getWebSocketTempDirection==="b")
    {
        return true;
    }else if(tempdirection===3&&getWebSocketTempDirection==="c")
    {
        return true;
    }else if(tempdirection===0&&getWebSocketTempDirection==="d")
    {
        return true;
    }
}

function PengChange() {
    if(tempdirection==1)
    {
        if(mahjongPengTempPlayer==0)
        {
            nextDirection=3;
        }else if(mahjongPengTempPlayer==2)
        {
            nextDirection=1;
        }else if(mahjongPengTempPlayer==3)
        {
            nextDirection=2;
        }
    }else if(tempdirection==2)
    {
        if(mahjongPengTempPlayer==0)
        {
            nextDirection=2;
        }else if(mahjongPengTempPlayer==1)
        {
            nextDirection=3;
        }else if(mahjongPengTempPlayer==3)
        {
            nextDirection=1;
        }
    }else if(tempdirection==3)
    {
        if(mahjongPengTempPlayer==0)
        {
            nextDirection=1;
        }else if(mahjongPengTempPlayer==1)
        {
            nextDirection=2;
        }else if(mahjongPengTempPlayer==2)
        {
            nextDirection=3;
        }
    }else if(tempdirection==0)
    {
        if(mahjongPengTempPlayer==0)
        {
            nextDirection=0;
        }else if(mahjongPengTempPlayer==1)
        {
            nextDirection=1;
        }else if(mahjongPengTempPlayer==2)
        {
            nextDirection=2;
        }
    }
}

function continueYesOrNo() {
    console.log("mahJongPengPaiFlag:"+mahJongPengPaiFlag+"||||||||qpHuPaiFlag"+qpHuPaiFlag+"||||||||mahjongChiFlag"+mahjongChiFlag+"||||||||mahjongGangFlag"+mahjongGangFlag);
    if(qpHuPaiFlag)
    {
        continueYesOrNoFlag=false;
    }else
    if(mahjongChiFlag)
    {
        continueYesOrNoFlag=false;
    }else
    if(mahJongPengPaiFlag)
    {
        continueYesOrNoFlag=false;
    }else
    if(mahjongGangFlag)
    {
        continueYesOrNoFlag=false;
    }else
    {
        continueYesOrNoFlag=true;
    }
}

function arrangeMj(qp) {
    if (resettingQpFlag) {
        for(var j=0;j<15;j++)
        {
            scene.remove(myqp[j]);
            scene.remove(mymjp[j]);
        }
        console.log("qp:"+qp);
        for (var i = 0; i < 14; i++) {
            myqp[i].position.set(mjzx - 23.2 + 2.15 * i, mjzy + 15.5, mjzz + 31);
            mymjp[i].position.set(mjzx - 23.2 + 2.15 * i, mjzy + 15.5, mjzz + 31);
            mymjp[i].children[0].material = mjpmesh[qp[i]];
            scene.add(mymjp[i]);
            scene.add(myqp[i]);
        }
        scene.remove(myqp[14]);
        scene.remove(mymjp[14]);
        resettingQpFlag=false;
        console.log("qp:"+qp);
        //resettingQpFlag=false;
    }
}

function arrangePengChiHuMahjong(qp) {
    if(resetArrangePengChiHuFlag)
    {
        console.log("qp:"+qp);
        for(var j=0;j<15;j++)
        {
            scene.remove(myqp[j]);
            scene.remove(mymjp[j]);
        }

        for(var i=0;i<qp.length-1;i++)
        {
            myqp[i].position.set(mjzx - 23.2 + 2.15 * i, mjzy + 15.5, mjzz + 31);
            scene.add(myqp[i]);

            qp.sort(function (a, b) {
                return a - b
            });
            mymjp[i].position.set(mjzx - 23.2 + 2.15 * i, mjzy + 15.5, mjzz + 31);
            mymjp[i].children[0].material = mjpmesh[qp[i]];
            scene.add(mymjp[i]);
        }

        myqp[qp.length].position.set(mjzx - 23.2 + 2.15 * qp.length, mjzy + 15.5, mjzz + 31);
        scene.add(myqp[qp.length]);
        mymjp[qp.length].position.set(mjzx - 23.2 + 2.15 * qp.length, mjzy + 15.5, mjzz + 31);
        mymjp[qp.length].children[0].material = mjpmesh[qp[qp.length-1]];
        scene.add(mymjp[qp.length]);

        console.log("qp[qp.length-1]:"+qp[qp.length-1]);
        resetArrangePengChiHuFlag=false;
    }
}
//吃操作
function arrangeChiMahjong(qp) {
    if(resetArrangePengChiHuFlag)
    {
        console.log("chiqp:"+qp);
        for(var j=0;j<15;j++)
        {
            scene.remove(myqp[j]);
            scene.remove(mymjp[j]);
        }

        for(var i=0;i<qp.length-1;i++)
        {
            myqp[i].position.set(mjzx - 23.2 + 2.15 * i, mjzy + 15.5, mjzz + 31);
            scene.add(myqp[i]);

            qp.sort(function (a, b) {
                return a - b
            });
            mymjp[i].position.set(mjzx - 23.2 + 2.15 * i, mjzy + 15.5, mjzz + 31);
            mymjp[i].children[0].material = mjpmesh[qp[i]];
            scene.add(mymjp[i]);
        }

        mymjp[qp.length].children[0].material = mjpmesh[qp[qp.length-1]];
        scene.add(myqp[qp.length]);
        scene.add(mymjp[qp.length]);
        console.log("qp.length:"+qp.length);
        resetArrangePengChiHuFlag=false;

    }
}

function arrangeEndPengChiHuMahjong(qp) {
    if(resetEndArrangePengChiHuFlag)
    {
        for(var j=0;j<15;j++)
        {
            scene.remove(myqp[j]);
            scene.remove(mymjp[j]);
        }
        qp.sort(function (a, b) {
            return a - b;
        });
        for(var i=0;i<qp.length;i++)
        {
            myqp[i].position.set(mjzx - 23.2 + 2.15 * i, mjzy + 15.5, mjzz + 31);
            scene.add(myqp[i]);

            mymjp[i].position.set(mjzx - 23.2 + 2.15 * i, mjzy + 15.5, mjzz + 31);
            mymjp[i].children[0].material = mjpmesh[qp[i]];
            scene.add(mymjp[i]);
        }

        scene.remove(myqp[qp.length+1]);
        scene.remove(mymjp[qp.length+1]);
        console.log("qp.length:"+(qp.length)+"||||||qp:"+qp);
        resetEndArrangePengChiHuFlag=false;
    }
}

function iconCartoonPosition(mahjongPengTempPlayer,tempdirection) {
    if(tempdirection==0)
    {
        if(mahjongPengTempPlayer==1)
        {
            document.getElementById("pengCartoon").style.left = "60%";
            document.getElementById("pengCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==2)
        {
            document.getElementById("pengCartoon").style.left = "35%";
            document.getElementById("pengCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==3)
        {
            document.getElementById("pengCartoon").style.left = "15%";
            document.getElementById("pengCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==1)
    {
        if(mahjongPengTempPlayer==2)
        {
            document.getElementById("pengCartoon").style.left = "60%";
            document.getElementById("pengCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==3)
        {
            document.getElementById("pengCartoon").style.left = "35%";
            document.getElementById("pengCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==0)
        {
            document.getElementById("pengCartoon").style.left = "15%";
            document.getElementById("pengCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==2)
    {
        if(mahjongPengTempPlayer==3)
        {
            document.getElementById("pengCartoon").style.left = "60%";
            document.getElementById("pengCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==0)
        {
            document.getElementById("pengCartoon").style.left = "35%";
            document.getElementById("pengCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==1)
        {
            document.getElementById("pengCartoon").style.left = "15%";
            document.getElementById("pengCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==3)
    {
        if(mahjongPengTempPlayer==0)
        {
            document.getElementById("pengCartoon").style.left = "60%";
            document.getElementById("pengCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==1)
        {
            document.getElementById("pengCartoon").style.left = "35%";
            document.getElementById("pengCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==2)
        {
            document.getElementById("pengCartoon").style.left = "15%";
            document.getElementById("pengCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("pengCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }

    setTimeout(function () {
        document.getElementById("pengCartoon").style.display = "none";
        document.getElementById("backgroundChineseInk").style.display = "none";
    },3000);
}

function chiIconCartoonPosition(mahjongPengTempPlayer,tempdirection) {
    if(tempdirection==0)
    {
        if(mahjongPengTempPlayer==1)
        {
            document.getElementById("chiCartoon").style.left = "60%";
            document.getElementById("chiCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==2)
        {
            document.getElementById("chiCartoon").style.left = "35%";
            document.getElementById("chiCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==3)
        {
            document.getElementById("chiCartoon").style.left = "15%";
            document.getElementById("chiCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==1)
    {
        if(mahjongPengTempPlayer==2)
        {
            document.getElementById("chiCartoon").style.left = "60%";
            document.getElementById("chiCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==3)
        {
            document.getElementById("chiCartoon").style.left = "35%";
            document.getElementById("chiCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==0)
        {
            document.getElementById("chiCartoon").style.left = "15%";
            document.getElementById("chiCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==2)
    {
        if(mahjongPengTempPlayer==3)
        {
            document.getElementById("chiCartoon").style.left = "60%";
            document.getElementById("chiCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==0)
        {
            document.getElementById("chiCartoon").style.left = "35%";
            document.getElementById("chiCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==1)
        {
            document.getElementById("chiCartoon").style.left = "15%";
            document.getElementById("chiCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==3)
    {
        if(mahjongPengTempPlayer==0)
        {
            document.getElementById("chiCartoon").style.left = "60%";
            document.getElementById("chiCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==1)
        {
            document.getElementById("chiCartoon").style.left = "35%";
            document.getElementById("chiCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==2)
        {
            document.getElementById("chiCartoon").style.left = "15%";
            document.getElementById("chiCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("chiCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }
    setTimeout(function () {
        document.getElementById("chiCartoon").style.display = "none";
        document.getElementById("backgroundChineseInk").style.display = "none";
    },3000);
}

function gangIconCartoonPositoon(mahjongPengTempPlayer,tempdirection) {
    if(tempdirection==0)
    {
        if(mahjongPengTempPlayer==1)
        {
            document.getElementById("gangCartoon").style.left = "60%";
            document.getElementById("gangCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==2)
        {
            document.getElementById("gangCartoon").style.left = "35%";
            document.getElementById("gangCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==3)
        {
            document.getElementById("gangCartoon").style.left = "15%";
            document.getElementById("gangCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==1)
    {
        if(mahjongPengTempPlayer==2)
        {
            document.getElementById("gangCartoon").style.left = "60%";
            document.getElementById("gangCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==3)
        {
            document.getElementById("gangCartoon").style.left = "35%";
            document.getElementById("gangCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==0)
        {
            document.getElementById("gangCartoon").style.left = "15%";
            document.getElementById("gangCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==2)
    {
        if(mahjongPengTempPlayer==3)
        {
            document.getElementById("gangCartoon").style.left = "60%";
            document.getElementById("gangCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==0)
        {
            document.getElementById("gangCartoon").style.left = "35%";
            document.getElementById("gangCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==1)
        {
            document.getElementById("gangCartoon").style.left = "15%";
            document.getElementById("gangCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==3)
    {
        if(mahjongPengTempPlayer==0)
        {
            document.getElementById("gangCartoon").style.left = "60%";
            document.getElementById("gangCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==1)
        {
            document.getElementById("gangCartoon").style.left = "35%";
            document.getElementById("gangCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==2)
        {
            document.getElementById("gangCartoon").style.left = "15%";
            document.getElementById("gangCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("gangCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }
    setTimeout(function () {
        document.getElementById("gangCartoon").style.display = "none";
        document.getElementById("backgroundChineseInk").style.display = "none";
    },3000);
}

function huIconCartoonPosition(mahjongPengTempPlayer,tempdirection) {

    if(tempdirection==0)
    {
        if(mahjongPengTempPlayer==1)
        {
            document.getElementById("huCartoon").style.left = "60%";
            document.getElementById("huCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==2)
        {
            document.getElementById("huCartoon").style.left = "35%";
            document.getElementById("huCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==3)
        {
            document.getElementById("huCartoon").style.left = "15%";
            document.getElementById("huCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==1)
    {
        if(mahjongPengTempPlayer==2)
        {
            document.getElementById("huCartoon").style.left = "60%";
            document.getElementById("huCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==3)
        {
            document.getElementById("huCartoon").style.left = "35%";
            document.getElementById("huCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==0)
        {
            document.getElementById("huCartoon").style.left = "15%";
            document.getElementById("huCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==2)
    {
        if(mahjongPengTempPlayer==3)
        {
            document.getElementById("huCartoon").style.left = "60%";
            document.getElementById("huCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==0)
        {
            document.getElementById("huCartoon").style.left = "35%";
            document.getElementById("huCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==1)
        {
            document.getElementById("huCartoon").style.left = "15%";
            document.getElementById("huCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }else if(tempdirection==3)
    {
        if(mahjongPengTempPlayer==0)
        {
            document.getElementById("huCartoon").style.left = "60%";
            document.getElementById("huCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "60%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==1)
        {
            document.getElementById("huCartoon").style.left = "35%";
            document.getElementById("huCartoon").style.top = "20%";
            document.getElementById("backgroundChineseInk").style.left = "35%";
            document.getElementById("backgroundChineseInk").style.top = "20%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }else if(mahjongPengTempPlayer==2)
        {
            document.getElementById("huCartoon").style.left = "15%";
            document.getElementById("huCartoon").style.top = "40%";
            document.getElementById("backgroundChineseInk").style.left = "15%";
            document.getElementById("backgroundChineseInk").style.top = "40%";
            document.getElementById("huCartoon").style.display = "block";
            document.getElementById("backgroundChineseInk").style.display = "block";
        }
    }
    setTimeout(function () {
        document.getElementById("huCartoon").style.display = "none";
        document.getElementById("backgroundChineseInk").style.display = "none";
    },3000);
}