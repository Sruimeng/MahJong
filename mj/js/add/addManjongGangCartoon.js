function addManjongGangCartoon() {
    mahjongGangAudio.play();

    document.getElementById("gangCartoon").style.left = "35%";
    document.getElementById("gangCartoon").style.top = "60%";
    document.getElementById("backgroundChineseInk").style.left = "35%";
    document.getElementById("backgroundChineseInk").style.top = "60%";
    document.getElementById("gangCartoon").style.display = "block";
    document.getElementById("backgroundChineseInk").style.display = "block";

    stopFinalStartTime();
    playTimeStartFlag=true;
    finalChupaiTime();

    scene.remove(myqp[14]);
    scene.remove(mymjp[14]);
    scene.remove(ontherPaidi);
    scene.remove(ontherPaimian);
    scene.remove(feipai[mjpCounter-1]);
    scene.remove(feipaip[mjpCounter-1]);

    mjpCounter--;

    for(var k=0;k<4;k++)
    {
        mahjongPengPaiArray0[mahjongPengPaiTemp0].rotation.y=-Math.PI/2;
        mahjongPengPaiArrayp0[mahjongPengPaiTemp0].rotation.y=-Math.PI/2;
        mahjongPengPaiArray0[mahjongPengPaiTemp0].position.set(mjzx-23.2+2.15*21-2.15*mahjongPengPaiTemp0,mjzy+8.5,mjzz+28);
        mahjongPengPaiArrayp0[mahjongPengPaiTemp0].position.set(mjzx-23.2+2.15*21-2.15*mahjongPengPaiTemp0,mjzy+8.5,mjzz+28);

        mahjongPengPaiArrayp0[mahjongPengPaiTemp0].children[0].material =mjpmesh[mahjongGangNumber];
        scene.add(mahjongPengPaiArray0[mahjongPengPaiTemp0]);
        scene.add(mahjongPengPaiArrayp0[mahjongPengPaiTemp0]);
        mahjongPengPaiTemp0++;
    }

    for(var j=0;j<qp.length+1;j++)
    {
        if(qp[j]==mahjongGangNumber&&qp[j+1]==mahjongGangNumber&&qp[j+2]==mahjongGangNumber)
        {
            delete qp[j];
            delete qp[j+1];
            delete qp[j+2];
            qp=qp.filter(function (t) { return t });
        }
    }



    for(var i=0;i<4;i++)
    {
        scene.remove(myqp[mahjongPengChiGangTemp0]);
        scene.remove(mymjp[mahjongPengChiGangTemp0]);
        mahjongPengChiGangTemp0--;
    }
    mahjongPengChiGangTemp0++;


    window.setTimeout(function () {

        qp.unshift(requestGangNumber);
        console.log("qp:"+qp);
        resetArrangePengChiHuFlag = true;
        window.setTimeout(function () {
            arrangePengChiHuMahjong(qp);
        });

        firstcomeflage=true;
        mouseClickFlag=false;
        fapaiflag=true;
        clickNumIsOrNo=0;
    },200);

    setTimeout(function () {
        document.getElementById("gangCartoon").style.display = "none";
        document.getElementById("backgroundChineseInk").style.display = "none";
    },3000);

}