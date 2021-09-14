function resetAllGame() {
    removeObj();
}

var removeObjTime;
var otherPlayerObjCount=0;//界面消失的
var removeFeipaiObjTime;
var feipaiObjCount=0;
function removeObj() {
    console.log("removeObj");

    removeObjTime=window.setInterval(function () {
        if(otherPlayerObjCount<16)
        {
            scene.remove(upqp[otherPlayerObjCount]);
            scene.remove(liftqp[otherPlayerObjCount]);
            scene.remove(rightqp[otherPlayerObjCount]);
            scene.remove(myqp[otherPlayerObjCount]);
            scene.remove(mymjp[otherPlayerObjCount]);
            scene.remove(mahjongPengPaiArray1[otherPlayerObjCount]);
            scene.remove(mahjongPengPaiArrayp1[otherPlayerObjCount]);
            scene.remove(mahjongPengPaiArray2[otherPlayerObjCount]);
            scene.remove(mahjongPengPaiArrayp2[otherPlayerObjCount]);
            scene.remove(mahjongPengPaiArray3[otherPlayerObjCount]);
            scene.remove(mahjongPengPaiArrayp3[otherPlayerObjCount]);
            scene.remove(mahjongPengPaiArray0[otherPlayerObjCount]);
            scene.remove(mahjongPengPaiArrayp0[otherPlayerObjCount]);
            otherPlayerObjCount++;
        }else
        {
            location.reload(true);
            window.clearInterval(removeObjTime);
        }

    },200);

    removeFeipaiObjTime=window.setInterval(function () {
        if(otherPlayerObjCount<61)
        {
                scene.remove(feipaip[feipaiObjCount]);
                scene.remove(feipai[feipaiObjCount]);
            feipaiObjCount++;
        }else
        {
            window.clearInterval(removeFeipaiObjTime);
        }

    },100);

    scene.remove(majongPai[0]);
    scene.remove(majongPaidi[0]);
    scene.remove(majongPai[1]);
    scene.remove(majongPaidi[1]);
    scene.remove(majongPai[2]);
    scene.remove(majongPaidi[2]);
    scene.remove(majongPai[3]);
    scene.remove(majongPaidi[3]);
    scene.remove(majongPai[4]);
    scene.remove(majongPaidi[4]);
    scene.add(label1);
    label_Material1.map=directionimg[4];


    // window.setTimeout(function () {
    //     send("requestDirection");
    // },350);

        // for(var i=0;i<15;i++)
        // {
        //     scene.remove(upqp[i]);
        //     scene.remove(liftqp[i]);
        //     scene.remove(rightqp[i]);
        // }
        // for(var j=0;j<15;i++)
        // {
        //     scene.remove(myqp[j]);
        //     scene.remove(mymjp[j]);
        // }

    // for(var k=0;k<60;k++)
    // {
    //     scene.remove(feipaip[i]);
    //     scene.remove(feipai[i]);
    // }
}