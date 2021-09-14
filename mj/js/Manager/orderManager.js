
var oneColNum=0;
var oneRowNum=0;
var mjpOneCounter=0;


var twoColNum=0;
var twoRowNum=0;
var mjpTwoCounter=0;


var threeColNum=0;
var threeRowNum=0;
var mjpThreeCounter=0;


function feipaiManager(getWebSocketTempDirection) {

    if(feipaiFlag)
    {
        console.log("mjpCounter:"+mjpCounter+"||mjpThreeCounter:"+mjpThreeCounter+"||mjpTwoCounter:"+mjpTwoCounter+"||mjpOneCounter"+mjpOneCounter);
        if(tempdirection===0)
        {
            if(getWebSocketTempDirection=="b")
            {
                feipaiDirection=1;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                if((mjpOneCounter+1)%7==0&&mjpOneCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-4.9+2.0*oneRowNum,mjzy+8.5,mjzz+14.0-1.2*oneColNum);
                    feipaip[mjpCounter].position.set(mjzx-4.95+2.0*oneRowNum,mjzy+8.5,mjzz+13.9-1.2*oneColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(oneRowNum<3)
                    {
                        oneColNum=0;
                        oneRowNum++;
                    }else
                    {
                        oneColNum++;
                        oneRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-4.9+2.0*oneRowNum,mjzy+8.5,mjzz+14.0-1.2*oneColNum);
                    feipaip[mjpCounter].position.set(mjzx-4.95+2.0*oneRowNum,mjzy+8.5,mjzz+13.9-1.2*oneColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    oneColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpOneCounter++;
                feipaiFlag=false;
            }else if(getWebSocketTempDirection=="c")
            {
                feipaiDirection=2;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipai[mjpCounter].rotation.y=Math.PI/2;
                feipaip[mjpCounter].rotation.y=Math.PI/2;
                if((mjpTwoCounter+1)%7==0&&mjpTwoCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-6.5-1.1*twoColNum,mjzy+8.5,mjzz+4.5-2.0*twoRowNum);
                    feipaip[mjpCounter].position.set(mjzx-6.55-1.1*twoColNum,mjzy+8.5,mjzz+4.4-2.0*twoRowNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(twoRowNum<3)
                    {
                        twoColNum=0;
                        twoRowNum++;
                    }else
                    {
                        twoColNum++;
                        twoRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-6.5-1.1*twoColNum,mjzy+8.5,mjzz+4.5-2.0*twoRowNum);
                    feipaip[mjpCounter].position.set(mjzx-6.55-1.1*twoColNum,mjzy+8.5,mjzz+4.4-2.0*twoRowNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    twoColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpTwoCounter++;
                feipaiFlag=false;
            }else if(getWebSocketTempDirection=="d")
            {
                feipaiDirection=3;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipai[mjpCounter].rotation.y=-Math.PI;
                feipaip[mjpCounter].rotation.y=-Math.PI;
                if((mjpThreeCounter+1)%7==0&&mjpThreeCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-15.5-2.0*threeRowNum,mjzy+8.5,mjzz+5.8+1.2*threeColNum);
                    feipaip[mjpCounter].position.set(mjzx-15.55-2.0*threeRowNum,mjzy+8.5,mjzz+5.7+1.2*threeColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(threeRowNum<3)
                    {
                        threeColNum=0;
                        threeRowNum++;
                    }else
                    {
                        threeColNum++;
                        threeRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-15.5-2.0*threeRowNum,mjzy+8.5,mjzz+5.8+1.2*threeColNum);
                    feipaip[mjpCounter].position.set(mjzx-15.55-2.0*threeRowNum,mjzy+8.5,mjzz+5.7+1.2*threeColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    threeColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpThreeCounter++;
                feipaiFlag=false;
            }
        }else if(tempdirection===1)
        {
            if(getWebSocketTempDirection=="a")
            {
                feipaiDirection=3;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipai[mjpCounter].rotation.y=-Math.PI;
                feipaip[mjpCounter].rotation.y=-Math.PI;
                if((mjpThreeCounter+1)%7==0&&mjpThreeCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-15.5-2.0*threeRowNum,mjzy+8.5,mjzz+5.8+1.2*threeColNum);
                    feipaip[mjpCounter].position.set(mjzx-15.55-2.0*threeRowNum,mjzy+8.5,mjzz+5.7+1.2*threeColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(threeRowNum<3)
                    {
                        threeColNum=0;
                        threeRowNum++;
                    }else
                    {
                        threeColNum++;
                        threeRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-15.5-2.0*threeRowNum,mjzy+8.5,mjzz+5.8+1.2*threeColNum);
                    feipaip[mjpCounter].position.set(mjzx-15.55-2.0*threeRowNum,mjzy+8.5,mjzz+5.7+1.2*threeColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    threeColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpThreeCounter++;
                feipaiFlag=false;
            }else if(getWebSocketTempDirection=="c")
            {
                feipaiDirection=1;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                if((mjpOneCounter+1)%7==0&&mjpOneCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-4.9+2.0*oneRowNum,mjzy+8.5,mjzz+14.0-1.2*oneColNum);
                    feipaip[mjpCounter].position.set(mjzx-4.95+2.0*oneRowNum,mjzy+8.5,mjzz+13.9-1.2*oneColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(oneRowNum<3)
                    {
                        oneColNum=0;
                        oneRowNum++;
                    }else
                    {
                        oneColNum++;
                        oneRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-4.9+2.0*oneRowNum,mjzy+8.5,mjzz+14.0-1.2*oneColNum);
                    feipaip[mjpCounter].position.set(mjzx-4.95+2.0*oneRowNum,mjzy+8.5,mjzz+13.9-1.2*oneColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    oneColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpOneCounter++;
                feipaiFlag=false;
            }else if(getWebSocketTempDirection=="d")
            {
                feipaiDirection=2;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipai[mjpCounter].rotation.y=Math.PI/2;
                feipaip[mjpCounter].rotation.y=Math.PI/2;
                if((mjpTwoCounter+1)%7==0&&mjpTwoCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-6.5-1.1*twoColNum,mjzy+8.5,mjzz+4.5-2.0*twoRowNum);
                    feipaip[mjpCounter].position.set(mjzx-6.55-1.1*twoColNum,mjzy+8.5,mjzz+4.4-2.0*twoRowNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(twoRowNum<3)
                    {
                        twoColNum=0;
                        twoRowNum++;
                    }else
                    {
                        twoColNum++;
                        twoRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-6.5-1.1*twoColNum,mjzy+8.5,mjzz+4.5-2.0*twoRowNum);
                    feipaip[mjpCounter].position.set(mjzx-6.55-1.1*twoColNum,mjzy+8.5,mjzz+4.4-2.0*twoRowNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    twoColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpTwoCounter++;
                feipaiFlag=false;
            }
        }else if(tempdirection===2)
        {

            if(getWebSocketTempDirection=="a")
            {
                feipaiDirection=2;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipai[mjpCounter].rotation.y=Math.PI/2;
                feipaip[mjpCounter].rotation.y=Math.PI/2;
                if((mjpTwoCounter+1)%7==0&&mjpTwoCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-6.5-1.1*twoColNum,mjzy+8.5,mjzz+4.5-2.0*twoRowNum);
                    feipaip[mjpCounter].position.set(mjzx-6.55-1.1*twoColNum,mjzy+8.5,mjzz+4.4-2.0*twoRowNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(twoRowNum<3)
                    {
                        twoColNum=0;
                        twoRowNum++;
                    }else
                    {
                        twoColNum++;
                        twoRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-6.5-1.1*twoColNum,mjzy+8.5,mjzz+4.5-2.0*twoRowNum);
                    feipaip[mjpCounter].position.set(mjzx-6.55-1.1*twoColNum,mjzy+8.5,mjzz+4.4-2.0*twoRowNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    twoColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpTwoCounter++;
                feipaiFlag=false;
            }else if(getWebSocketTempDirection=="b")
            {
                feipaiDirection=3;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipai[mjpCounter].rotation.y=-Math.PI;
                feipaip[mjpCounter].rotation.y=-Math.PI;
                if((mjpThreeCounter+1)%7==0&&mjpThreeCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-15.5-2.0*threeRowNum,mjzy+8.5,mjzz+5.8+1.2*threeColNum);
                    feipaip[mjpCounter].position.set(mjzx-15.55-2.0*threeRowNum,mjzy+8.5,mjzz+5.7+1.2*threeColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(threeRowNum<3)
                    {
                        threeColNum=0;
                        threeRowNum++;
                    }else
                    {
                        threeColNum++;
                        threeRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-15.5-2.0*threeRowNum,mjzy+8.5,mjzz+5.8+1.2*threeColNum);
                    feipaip[mjpCounter].position.set(mjzx-15.55-2.0*threeRowNum,mjzy+8.5,mjzz+5.7+1.2*threeColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    threeColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpThreeCounter++;
                feipaiFlag=false;
            }else if(getWebSocketTempDirection=="d")
            {
                feipaiDirection=1;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                if((mjpOneCounter+1)%7==0&&mjpOneCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-4.9+2.0*oneRowNum,mjzy+8.5,mjzz+14.0-1.2*oneColNum);
                    feipaip[mjpCounter].position.set(mjzx-4.95+2.0*oneRowNum,mjzy+8.5,mjzz+13.9-1.2*oneColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(oneRowNum<3)
                    {
                        oneColNum=0;
                        oneRowNum++;
                    }else
                    {
                        oneColNum++;
                        oneRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-4.9+2.0*oneRowNum,mjzy+8.5,mjzz+14.0-1.2*oneColNum);
                    feipaip[mjpCounter].position.set(mjzx-4.95+2.0*oneRowNum,mjzy+8.5,mjzz+13.9-1.2*oneColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    oneColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpOneCounter++;
                feipaiFlag=false;
            }
        }else if(tempdirection===3)
        {
            if(getWebSocketTempDirection=="a")
            {
                feipaiDirection=1;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                if((mjpOneCounter+1)%7==0&&mjpOneCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-4.9+2.0*oneRowNum,mjzy+8.5,mjzz+14.0-1.2*oneColNum);
                    feipaip[mjpCounter].position.set(mjzx-4.95+2.0*oneRowNum,mjzy+8.5,mjzz+13.9-1.2*oneColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(oneRowNum<3)
                    {
                        oneColNum=0;
                        oneRowNum++;
                    }else
                    {
                        oneColNum++;
                        oneRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-4.9+2.0*oneRowNum,mjzy+8.5,mjzz+14.0-1.2*oneColNum);
                    feipaip[mjpCounter].position.set(mjzx-4.95+2.0*oneRowNum,mjzy+8.5,mjzz+13.9-1.2*oneColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    oneColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpOneCounter++;
                feipaiFlag=false;
            }else if(getWebSocketTempDirection=="b")
            {
                feipaiDirection=2;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipai[mjpCounter].rotation.y=Math.PI/2;
                feipaip[mjpCounter].rotation.y=Math.PI/2;
                if((mjpTwoCounter+1)%7==0&&mjpTwoCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-6.5-1.1*twoColNum,mjzy+8.5,mjzz+4.5-2.0*twoRowNum);
                    feipaip[mjpCounter].position.set(mjzx-6.55-1.1*twoColNum,mjzy+8.5,mjzz+4.4-2.0*twoRowNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(twoRowNum<3)
                    {
                        twoColNum=0;
                        twoRowNum++;
                    }else
                    {
                        twoColNum++;
                        twoRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-6.5-1.1*twoColNum,mjzy+8.5,mjzz+4.5-2.0*twoRowNum);
                    feipaip[mjpCounter].position.set(mjzx-6.55-1.1*twoColNum,mjzy+8.5,mjzz+4.4-2.0*twoRowNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    twoColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpTwoCounter++;
                feipaiFlag=false;
            }else if(getWebSocketTempDirection=="c")
            {
                feipaiDirection=3;
                feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                feipai[mjpCounter].rotation.y=-Math.PI;
                feipaip[mjpCounter].rotation.y=-Math.PI;
                if((mjpThreeCounter+1)%7==0&&mjpThreeCounter!=0)
                {
                    feipai[mjpCounter].position.set(mjzx-15.5-2.0*threeRowNum,mjzy+8.5,mjzz+5.8+1.2*threeColNum);
                    feipaip[mjpCounter].position.set(mjzx-15.55-2.0*threeRowNum,mjzy+8.5,mjzz+5.7+1.2*threeColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    if(threeRowNum<3)
                    {
                        threeColNum=0;
                        threeRowNum++;
                    }else
                    {
                        threeColNum++;
                        threeRowNum=3;
                    }
                }else
                {

                    feipai[mjpCounter].position.set(mjzx-15.5-2.0*threeRowNum,mjzy+8.5,mjzz+5.8+1.2*threeColNum);
                    feipaip[mjpCounter].position.set(mjzx-15.55-2.0*threeRowNum,mjzy+8.5,mjzz+5.7+1.2*threeColNum);
                    feipaip[mjpCounter].children[0].material =mjpmesh[getWebSocketMahJong];
                    threeColNum++;
                }
                //如果不是东的玩家进入禁止出牌
                scene.add(feipai[mjpCounter]);
                scene.add(feipaip[mjpCounter]);
                mjpCounter++;
                mjpThreeCounter++;
                feipaiFlag=false;
            }
        }
        // if (nextDirection == 1) {
        //     feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipai[mjpCounter].position.set(mjzx - 13.5 + 1.1 * colNum, mjzy + 8.5, mjzz + 15 + 2.0 * rowNum);
        //     feipaip[mjpCounter].position.set(mjzx - 13.5 + 1.1 * colNum, mjzy + 10.6, mjzz + 15 + 2.0 * rowNum);
        //     feipaip[mjpCounter].children[0].material = mjpmesh[meshTempMj];
        //     feipaiFlag=false;
        // }
        console.log("mjpCounter:"+mjpCounter+"||mjpThreeCounter:"+mjpThreeCounter+"||mjpTwoCounter:"+mjpTwoCounter+"||mjpOneCounter"+mjpOneCounter);
    }

}

function backOrderManager() {
    if(mahjongTempMahjong1!="null")
    {
        if(tempdirection==0)
        {
            if(mahjongTempMahjong1=="b")
            {
                mjpOneCounter--;
            }else if(mahjongTempMahjong1=="c")
            {
                mjpTwoCounter--;
            }else if(mahjongTempMahjong1=="d")
            {
                mjpThreeCounter--;
            }
        }else if(tempdirection==1)
        {
            if(mahjongTempMahjong1=="a")
            {
                mjpThreeCounter--;
            }else if(mahjongTempMahjong1=="c")
            {
                mjpOneCounter--;
            }else if(mahjongTempMahjong1=="d")
            {
                mjpTwoCounter--;
            }
        }else if(tempdirection==2)
        {
            if(mahjongTempMahjong1=="a")
            {
                mjpTwoCounter--;
            }else if(mahjongTempMahjong1=="b")
            {
                mjpThreeCounter--;
            }else if(mahjongTempMahjong1=="d")
            {
                mjpOneCounter--;
            }
        }else if(tempdirection==3)
        {
            if(mahjongTempMahjong1=="a")
            {
                mjpOneCounter--;
            }else if(mahjongTempMahjong1=="b")
            {
                mjpTwoCounter--;
            }else if(mahjongTempMahjong1=="c")
            {
                mjpThreeCounter--;
            }
        }
    }
}

function feipaiPengChihHuCountManagerUtil(mahjongPengTempPlayer) {
    console.log("mahjongPengTempPlayer:"+mahjongPengTempPlayer);
    console.log("mjpCounter:"+mjpCounter+"||mjpThreeCounter:"+mjpThreeCounter+"||mjpTwoCounter:"+mjpTwoCounter+"||mjpOneCounter"+mjpOneCounter);
    if(tempdirection==0)
    {
        if(feipaiDirection==1)
        {
            if(mjpOneCounter>0)
            {
                mjpOneCounter--;
            }
        }else if(feipaiDirection==2)
        {
            if(mjpTwoCounter>0)
            {
                mjpTwoCounter--;
            }
        }else if(feipaiDirection==3)
        {
            if(mjpThreeCounter>0)
            {
                mjpThreeCounter--;
            }
        }else if(feipaiDirection==0)
        {
            if(zeroCount>0)
            {
                zeroCount--;
            }
        }
        // if(mahjongPengTempPlayer==1)
        // {
        //     if(mjpOneCounter>0)
        //     {
        //         mjpOneCounter--;
        //     }
        // }else if(mahjongPengTempPlayer==2)
        // {
        //     if(mjpTwoCounter>0)
        //     {
        //         mjpTwoCounter--;
        //     }
        // }else if(mahjongPengTempPlayer==3)
        // {
        //     if(mjpThreeCounter>0)
        //     {
        //         mjpThreeCounter--;
        //     }
        // }
    }else if(tempdirection==1)
    {
        if(feipaiDirection==1)
        {
            if(mjpOneCounter>0)
            {
                mjpOneCounter--;
            }
        }else if(feipaiDirection==2)
        {
            if(mjpTwoCounter>0)
            {
                mjpTwoCounter--;
            }
        }else if(feipaiDirection==3)
        {
            if(mjpThreeCounter>0)
            {
                mjpThreeCounter--;
            }
        }else if(feipaiDirection==0)
        {
            if(zeroCount>0)
            {
                zeroCount--;
            }
        }
        // if(mahjongPengTempPlayer==0)
        // {
        //     if(mjpThreeCounter>0)
        //     {
        //         mjpThreeCounter--;
        //     }
        // }else if(mahjongPengTempPlayer==2)
        // {
        //     if(mjpOneCounter>0)
        //     {
        //         mjpOneCounter--;
        //     }
        //
        // }else if(mahjongPengTempPlayer==3)
        // {
        //     if(mjpTwoCounter>0)
        //     {
        //         mjpTwoCounter--;
        //     }
        // }
    }else if(tempdirection==2)
    {
        if(feipaiDirection==1)
        {
            if(mjpOneCounter>0)
            {
                mjpOneCounter--;
            }
        }else if(feipaiDirection==2)
        {
            if(mjpTwoCounter>0)
            {
                mjpTwoCounter--;
            }
        }else if(feipaiDirection==3)
        {
            if(mjpThreeCounter>0)
            {
                mjpThreeCounter--;
            }
        }else if(feipaiDirection==0)
        {
            if(zeroCount>0)
            {
                zeroCount--;
            }
        }
        // if(mahjongPengTempPlayer==0)
        // {
        //     if(mjpTwoCounter>0)
        //     {
        //         mjpTwoCounter--;
        //     }
        // }else if(mahjongPengTempPlayer==1)
        // {
        //     if(mjpThreeCounter>0)
        //     {
        //         mjpThreeCounter--;
        //     }
        // }else if(mahjongPengTempPlayer==3)
        // {
        //     if(mjpOneCounter>0)
        //     {
        //         mjpOneCounter--;
        //     }
        // }
    }else if(tempdirection==3)
    {
        if(feipaiDirection==1)
        {
            if(mjpOneCounter>0)
            {
                mjpOneCounter--;
            }
        }else if(feipaiDirection==2)
        {
            if(mjpTwoCounter>0)
            {
                mjpTwoCounter--;
            }
        }else if(feipaiDirection==3)
        {
            if(mjpThreeCounter>0)
            {
                mjpThreeCounter--;
            }
        }else if(feipaiDirection==0)
        {
            if(zeroCount>0)
            {
                zeroCount--;
            }
        }
        // if(mahjongPengTempPlayer==0)
        // {
        //     if(mjpOneCounter>0)
        //     {
        //         mjpOneCounter--;
        //     }
        // }else if(mahjongPengTempPlayer==1)
        // {
        //     if(mjpTwoCounter>0)
        //     {
        //         mjpTwoCounter--;
        //     }
        // }else if(mahjongPengTempPlayer==2)
        // {
        //     if(mjpThreeCounter>0)
        //     {
        //         mjpThreeCounter--;
        //     }
        // }
    }
    console.log("mahjongPengTempPlayer:"+mahjongPengTempPlayer);
    console.log("mjpCounter:"+mjpCounter+"||mjpThreeCounter:"+mjpThreeCounter+"||mjpTwoCounter:"+mjpTwoCounter+"||mjpOneCounter"+mjpOneCounter);
}
