function addMahJongPengCartoon() {
    mahjongPengAudio.play();

    document.getElementById("pengCartoon").style.left = "35%";
    document.getElementById("pengCartoon").style.top = "60%";
    document.getElementById("backgroundChineseInk").style.left = "35%";
    document.getElementById("backgroundChineseInk").style.top = "60%";
    document.getElementById("pengCartoon").style.display = "block";
    document.getElementById("backgroundChineseInk").style.display = "block";

    if(tempdirection!==5)
    {
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

        for(var j=0;j<qp.length;j++)
        {
            console.log("qp[j]:"+qp[j]+"|||qp[j+1]:"+qp[j+1]+"|||||||||mahjongPengPaiNumber:"+mahjongPengPaiNumber);
            if(qp[j]==mahjongPengPaiNumber&&qp[j+1]==mahjongPengPaiNumber)
            {

                delete qp[j];
                delete qp[j+1];
                qp=qp.filter(function(n){return n});

            }

        }

        for(var i=0;i<3;i++)
        {
            scene.remove(myqp[mahjongPengChiGangTemp0]);
            scene.remove(mymjp[mahjongPengChiGangTemp0]);
            mahjongPengChiGangTemp0--;
        }
        mahjongPengChiGangTemp0++;

        console.log("mahjongPengChiGangTemp0:"+mahjongPengChiGangTemp0);
        resetArrangePengChiHuFlag = true;
        arrangePengChiHuMahjong(qp);


        for(var k=0;k<3;k++)
        {
            mahjongPengPaiArray0[mahjongPengPaiTemp0].rotation.y=-Math.PI/2;
            mahjongPengPaiArrayp0[mahjongPengPaiTemp0].rotation.y=-Math.PI/2;
            mahjongPengPaiArray0[mahjongPengPaiTemp0].position.set(mjzx-23.2+2.15*21-2.15*mahjongPengPaiTemp0,mjzy+8.5,mjzz+28);
            mahjongPengPaiArrayp0[mahjongPengPaiTemp0].position.set(mjzx-23.2+2.15*21-2.15*mahjongPengPaiTemp0,mjzy+8.5,mjzz+28);
            mahjongPengPaiArrayp0[mahjongPengPaiTemp0].children[0].material =mjpmesh[mahjongPengPaiNumber];
            scene.add(mahjongPengPaiArray0[mahjongPengPaiTemp0]);
            scene.add(mahjongPengPaiArrayp0[mahjongPengPaiTemp0]);
            mahjongPengPaiTemp0++;
        }

        firstcomeflage=true;
        mouseClickFlag=false;
        fapaiflag=true;
        clickNumIsOrNo=0;

        setTimeout(function () {
            document.getElementById("pengCartoon").style.display = "none";
            document.getElementById("backgroundChineseInk").style.display = "none";
        },3000);

    }
}