var addMahjongChiNumber1Flag=true;//保证只有一个吃的数组里的数消失
var addMahjongChiNumber2Flag=true;
function addMahJongChiCartoon() {
    mahjongChiAudio.play();
    document.getElementById("chiCartoon").style.left = "35%";
    document.getElementById("chiCartoon").style.top = "60%";
    document.getElementById("backgroundChineseInk").style.left = "35%";
    document.getElementById("backgroundChineseInk").style.top = "60%";
    document.getElementById("chiCartoon").style.display = "block";
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


    for(var k=0;k<3;k++)
    {
        console.log("mahjongChiNumberArray[3-k]"+mahjongChiNumberArray[2-k]);
        mahjongPengPaiArray0[mahjongPengPaiTemp0].rotation.y=-Math.PI/2;
        mahjongPengPaiArrayp0[mahjongPengPaiTemp0].rotation.y=-Math.PI/2;
        mahjongPengPaiArray0[mahjongPengPaiTemp0].position.set(mjzx-23.2+2.15*21-2.15*mahjongPengPaiTemp0,mjzy+8.5,mjzz+28);
        mahjongPengPaiArrayp0[mahjongPengPaiTemp0].position.set(mjzx-23.2+2.15*21-2.15*mahjongPengPaiTemp0,mjzy+8.5,mjzz+28);

        mahjongPengPaiArrayp0[mahjongPengPaiTemp0].children[0].material =mjpmesh[mahjongChiNumberArray[2-k]];
        scene.add(mahjongPengPaiArray0[mahjongPengPaiTemp0]);
        scene.add(mahjongPengPaiArrayp0[mahjongPengPaiTemp0]);
        mahjongPengPaiTemp0++;
    }

    for(var i=0;i<3;i++)
    {
        if(mahjongChiNumberArray[i]==mahjongChiArray[0])
        {
            delete mahjongChiNumberArray[i];
            mahjongChiNumberArray=mahjongChiNumberArray.filter(function (t) { return t });
        }
    }
    console.log("mahjongChiNumberArray:"+mahjongChiNumberArray);

    for(var j=0;j<qp.length+1;j++)
    {
        if(qp[j]==mahjongChiNumberArray[0]&&addMahjongChiNumber1Flag)
        {
            addMahjongChiNumber1Flag=false;
            console.log("qp[j]"+qp[j]+"||mahjongChiNumberArray[0]:"+mahjongChiNumberArray[0]);
            delete qp[j];

        }else if(qp[j]==mahjongChiNumberArray[1]&&addMahjongChiNumber2Flag)
        {
            addMahjongChiNumber2Flag=false;
            console.log("qp[j]"+qp[j]+"||mahjongChiNumberArray[1]:"+mahjongChiNumberArray[1]);
            delete qp[j];
        }

    }
    qp=qp.filter(function (t) { return t });

    console.log("qipai"+qp);

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

    firstcomeflage=true;
    mouseClickFlag=false;
    clickNumIsOrNo=0;

    setTimeout(function () {
        document.getElementById("chiCartoon").style.display = "none";
        document.getElementById("backgroundChineseInk").style.display = "none";
    },3000);
    //fapaiflag=true;
    //playTimeStartFlag=true;
}