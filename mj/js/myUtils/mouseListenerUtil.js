

//无法点击时的点击操作
function mouseClickFlagFunction() {
    if (intersects.length > 0) {
        selected = intersects[0];//取第一个物体
        // console.log("x坐标:" + selected.point.x);
        // console.log("y坐标:" + selected.point.y);
        // console.log("z坐标:" + selected.point.z);
        pointx=Math.floor((selected.point.x+17.3)/2.1);
        if(firstcomeflage)
        {
            mymjp[tempselected].position.set(mjzx-23.2+2.15*tempselected,mjzy+15.5,mjzz+31);
            myqp[tempselected].position.set(mjzx-23.2+2.15*tempselected,mjzy+15.5,mjzz+31);
            mymjp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
            myqp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
            tempselected=pointx;
        }else
        {
            tempselected=pointx;
            mymjp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
            myqp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
            firstcomeflage=true;
        }
    }
}

//碰吃胡后的点击操作
function backClick() {

    if(mouseClickFlag)
    {
        mouseClickFlagFunction();
    }else
    {
        mouseClickFlagFunction();
        if(firstcomeflage)
        {
            currentClick=tempselected;
        }else
        {
            currentClick=pointx;
        }
        finalCurrent=currentClick;
        currentClick=(currentClick*2.1)-17.3;
        console.log("finalCurrent:"+finalCurrent);

        if(firstcomeflage)
        {

            if(clickNumIsOrNo==0)
            {
                console.log("tempClickMouseNum:"+tempClickMouseNum);
                console.log("currentClick:"+currentClick);

                if(currentClick==tempClickMouseNum)
                {
                    feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                    feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                    // feipai[mjpCounter].rotation.z=-Math.PI/4;
                    // feipaip[mjpCounter].rotation.z=-Math.PI/4;
                    feipai[mjpCounter].rotation.y=-Math.PI/2;
                    feipaip[mjpCounter].rotation.y=-Math.PI/2;
                    console.log("3finalCurrent:"+finalCurrent)
                    if((zeroCount+1)%7==0&&zeroCount!=0)
                    {
                        feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                        feipaip[mjpCounter].position.set(mjzx-13.55+1.1*colNum,mjzy+8.5,mjzz+14.9+2.0*rowNum);
                        if(finalCurrent<qp.length)
                        {
                            feipaip[mjpCounter].children[0].material =mjpmesh[qp[finalCurrent]];
                            mahjongMusicAudio[qp[finalCurrent]].play();
                        }else
                        {
                            feipaip[mjpCounter].children[0].material =mjpmesh[qp[qp.length-1]];
                            mahjongMusicAudio[qp[qp.length-1]].play();
                        }
                        if(rowNum<3)
                        {
                            colNum=0;
                            rowNum++;
                        }else
                        {
                            colNum++;
                            rowNum=3;
                        }
                    }else
                    {

                        feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                        feipaip[mjpCounter].position.set(mjzx-13.55+1.1*colNum,mjzy+8.5,mjzz+14.9+2.0*rowNum);
                        if(finalCurrent<qp.length)
                        {
                            feipaip[mjpCounter].children[0].material =mjpmesh[qp[finalCurrent]];
                            mahjongMusicAudio[qp[finalCurrent]].play();
                        }else
                        {
                            feipaip[mjpCounter].children[0].material =mjpmesh[qp[qp.length-1]];
                            mahjongMusicAudio[qp[qp.length-1]].play();
                        }
                        colNum++;
                    }
                    //如果不是东的玩家进入禁止出牌
                    scene.add(feipai[mjpCounter]);
                    scene.add(feipaip[mjpCounter]);


                    feipaiDirection=0;
                    mjpCounter++;
                    zeroCount++;
                    if(finalCurrent<qp.length)
                    {
                        finalChupaiMahJong=qp[finalCurrent];
                    }else if(finalCurrent==qp.length)
                    {
                        finalChupaiMahJong=qp[qp.length-1];
                    }
                    console.log("finalChupaiMahJong:"+finalChupaiMahJong);
                    tempPlayerString=choosePlayer(tempdirection);

                    //长时间消失，短时间开始
                    stopChupaiTime();
                    playWaitTimeStartFlag=true;
                    startFinaltime();

                    send(requestNextPlayer);
                    console.log("requestNextPlayer1:"+requestNextPlayer);
                    endFaPaiFlag=true;//结束发牌，进行动画的标志位，勿删。true不发牌
                    mouseClickFlag=true;
                }else
                {
                    tempClickMouseNum=currentClick;
                }
            }

        }
    }
}

//少于13张牌并且是新发的牌
function otherClick() {
    if(mouseClickFlag)
    {
        mouseClickFlagFunction();
    }else
    {
        mouseClickFlagFunction();
        if(firstcomeflage)
        {
            currentClick=tempselected;
        }else
        {
            currentClick=pointx;
        }
        finalCurrent=currentClick;
        currentClick=(currentClick*2.1)-17.3;
        console.log("finalCurrent:"+finalCurrent);

        if(firstcomeflage)
        {

            if(clickNumIsOrNo==0)
            {
                console.log("tempClickMouseNum:"+tempClickMouseNum);
                console.log("currentClick:"+currentClick);

                if(currentClick==tempClickMouseNum)
                {
                    feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                    feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                    // feipai[mjpCounter].rotation.z=-Math.PI/4;
                    // feipaip[mjpCounter].rotation.z=-Math.PI/4;
                    feipai[mjpCounter].rotation.y=-Math.PI/2;
                    feipaip[mjpCounter].rotation.y=-Math.PI/2;
                    if((zeroCount+1)%7==0&&zeroCount!=0)
                    {
                        feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                        feipaip[mjpCounter].position.set(mjzx-13.55+1.1*colNum,mjzy+8.5,mjzz+14.9+2.0*rowNum);
                        if(finalCurrent<qp.length)
                        {
                            feipaip[mjpCounter].children[0].material =mjpmesh[qp[finalCurrent]];
                            mahjongMusicAudio[qp[finalCurrent]].play();
                        }else
                        {
                            feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
                            mahjongMusicAudio[meshTempMj].play();
                        }
                        if(rowNum<3)
                        {
                            colNum=0;
                            rowNum++;
                        }else
                        {
                            colNum++;
                            rowNum=3;
                        }
                    }else
                    {

                        feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                        feipaip[mjpCounter].position.set(mjzx-13.55+1.1*colNum,mjzy+8.5,mjzz+14.9+2.0*rowNum);
                        if(finalCurrent<qp.length)
                        {
                            feipaip[mjpCounter].children[0].material =mjpmesh[qp[finalCurrent]];
                            mahjongMusicAudio[qp[finalCurrent]].play();
                        }else
                        {
                            feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
                            mahjongMusicAudio[meshTempMj].play();
                        }
                        colNum++;
                    }
                    //如果不是东的玩家进入禁止出牌
                    scene.add(feipai[mjpCounter]);
                    scene.add(feipaip[mjpCounter]);


                    feipaiDirection=0;
                    mjpCounter++;
                    zeroCount++;
                    if(finalCurrent<qp.length)
                    {
                        finalChupaiMahJong=qp[finalCurrent];
                    }else
                    {
                        finalChupaiMahJong=meshTempMj;
                    }
                    console.log(finalChupaiMahJong);
                    tempPlayerString=choosePlayer(tempdirection);

                    //长时间消失，短时间开始
                    stopChupaiTime();
                    playWaitTimeStartFlag=true;
                    startFinaltime();

                    send(requestNextPlayer);
                    console.log("requestNextPlayer1:"+requestNextPlayer);
                    mouseClickFlag=true;
                    endFaPaiFlag=true;//结束发牌，进行动画的标志位，勿删。true不发牌
                }else
                {
                    tempClickMouseNum=currentClick;
                }
            }

        }
        console.log("zzzzzzzz");
    }
}

//当有十三张牌的时的点击事件
function ThreetennClick() {
    if(tempdirection===0)
    {
        console.log("mouseClickFlag:"+mouseClickFlag);
        if(mouseClickFlag)//第二次进入成为nextDirectionO的时候
        {
            mouseClickFlagFunction();
        }else
        {
            console.log("firstcomeflage:"+firstcomeflage);
            console.log("clickNumIsOrNo:"+clickNumIsOrNo);

            mouseClickFlagFunction();
            if(firstcomeflage)
            {
                currentClick=tempselected;
            }else
            {
                currentClick=pointx;
            }
            finalCurrent=currentClick;
            currentClick=(currentClick*2.1)-17.3;
            console.log("finalCurrent:"+finalCurrent);
            if(firstcomeflage)
            {

                if(clickNumIsOrNo==0)
                {
                    console.log("tempClickMouseNum:"+tempClickMouseNum);
                    console.log("currentClick:"+currentClick);

                    if(currentClick==tempClickMouseNum)
                    {
                        feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                        feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                        // feipai[mjpCounter].rotation.z=-Math.PI/4;
                        // feipaip[mjpCounter].rotation.z=-Math.PI/4;
                        feipai[mjpCounter].rotation.y=-Math.PI/2;
                        feipaip[mjpCounter].rotation.y=-Math.PI/2;
                        if((zeroCount+1)%7==0&&zeroCount!=0)
                        {
                            feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                            feipaip[mjpCounter].position.set(mjzx-13.55+1.1*colNum,mjzy+8.5,mjzz+14.9+2.0*rowNum);
                            feipaip[mjpCounter].children[0].material =mjpmesh[qp[finalCurrent]];
                            mahjongMusicAudio[qp[finalCurrent]].play();
                            if(rowNum<3)
                            {
                                colNum=0;
                                rowNum++;
                            }else
                            {
                                colNum++;
                                rowNum=3;
                            }
                        }else
                        {

                            feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                            feipaip[mjpCounter].position.set(mjzx-13.55+1.1*colNum,mjzy+8.5,mjzz+14.9+2.0*rowNum);
                            if(finalCurrent<qp.length)
                            {
                                feipaip[mjpCounter].children[0].material =mjpmesh[qp[finalCurrent]];
                                mahjongMusicAudio[qp[finalCurrent]].play();
                            }else
                            {
                                if(qp.length==13)
                                {
                                    feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
                                    mahjongMusicAudio[meshTempMj].play();
                                }else
                                {
                                    feipaip[mjpCounter].children[0].material =mjpmesh[qp[qp.length-1]];
                                    mahjongMusicAudio[qp[qp.length-1]].play();
                                }
                            }
                            colNum++;
                        }
                        //如果不是东的玩家进入禁止出牌
                        scene.add(feipai[mjpCounter]);
                        scene.add(feipaip[mjpCounter]);

                        feipaiDirection=0;
                        zeroCount++;
                        mjpCounter++;
                        if(finalCurrent<qp.length)
                        {
                            finalChupaiMahJong=qp[finalCurrent];
                        }else
                        {
                            if(qp.length==13)
                            {
                                finalChupaiMahJong=meshTempMj;
                            }else
                            {
                                finalChupaiMahJong=qp[qp.length-1]
                            }
                        }
                        console.log(finalChupaiMahJong);
                        tempPlayerString=choosePlayer(tempdirection);

                        //长时间消失，短时间开始
                        stopChupaiTime();
                        playWaitTimeStartFlag=true;
                        startFinaltime();

                        send(requestNextPlayer);
                        console.log("requestNextPlayer1:"+requestNextPlayer);
                        mouseClickFlag=true;
                        endFaPaiFlag=true;//结束发牌，进行动画的标志位，勿删。true不发牌
                    }else
                    {
                        tempClickMouseNum=currentClick;
                    }
                }

            }
        }

    }else if(tempdirection!==0)
    {
        if(mouseClickFlag)//第二次进入成为nextDirectionO的时候
        {
            mouseClickFlagFunction();
        }else
        {
            console.log("firstcomeflage:"+firstcomeflage);
            console.log("clickNumIsOrNo:"+clickNumIsOrNo);
            if (intersects.length > 0) {

                if(southPlayerMove)
                {
                    selected = intersects[0];//取第一个物体
                    // console.log("x坐标:" + selected.point.x);
                    // console.log("y坐标:" + selected.point.y);
                    // console.log("z坐标:" + selected.point.z);
                    pointx=Math.floor((selected.point.x+17.3)/2.1);
                    if(firstcomeflage)
                    {
                        mymjp[tempselected].position.set(mjzx-23.2+2.15*tempselected,mjzy+15.5,mjzz+31);
                        myqp[tempselected].position.set(mjzx-23.2+2.15*tempselected,mjzy+15.5,mjzz+31);
                        mymjp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
                        myqp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
                        tempselected=pointx;
                    }else
                    {
                        console.log("走了");
                        tempselected=pointx;
                        mymjp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
                        myqp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
                        firstcomeflage=true;
                    }
                }else
                {
                    console.log("走了");
                    selected = intersects[0];//取第一个物体
                    // console.log("x坐标:" + selected.point.x);
                    // console.log("y坐标:" + selected.point.y);
                    // console.log("z坐标:" + selected.point.z);
                    pointx=Math.floor((selected.point.x+17.3)/2.1);
                    mymjp[tempselected].position.set(mjzx-23.2+2.15*tempselected,mjzy+15.5,mjzz+31);
                    myqp[tempselected].position.set(mjzx-23.2+2.15*tempselected,mjzy+15.5,mjzz+31);
                    mymjp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
                    myqp[pointx].position.set(mjzx-23.2+2.15*pointx,mjzy+17.5,mjzz+29);
                    tempselected=pointx;
                    firstcomeflage=true;
                }


            }
            if(firstcomeflage)
            {
                currentClick=tempselected;
            }else
            {
                currentClick=pointx;
            }
            finalCurrent=currentClick;
            currentClick=(currentClick*2.1)-17.3;
            if(firstcomeflage)
            {
                if(clickNumIsOrNo==0)
                {
                    if(currentClick==tempClickMouseNum)
                    {
                        feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                        feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
                        feipai[mjpCounter].rotation.y=-Math.PI/2;
                        feipaip[mjpCounter].rotation.y=-Math.PI/2;
                        if((zeroCount+1)%7==0&&zeroCount!=0)
                        {
                            feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                            feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                            if(finalCurrent<qp.length)
                            {
                                feipaip[mjpCounter].children[0].material =mjpmesh[qp[finalCurrent]];
                                mahjongMusicAudio[qp[finalCurrent]].play();
                            }else
                            {
                                if(qp.length==13)
                                {
                                    feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
                                    mahjongMusicAudio[meshTempMj].play();
                                }else
                                {
                                    feipaip[mjpCounter].children[0].material =mjpmesh[qp[qp.length-1]];
                                    mahjongMusicAudio[qp[qp.length-1]].play();
                                }
                            }
                            if(rowNum<3)
                            {
                                colNum=0;
                                rowNum++;
                            }else
                            {
                                colNum++;
                                rowNum=3;
                            }
                        }else
                        {

                            feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                            feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                            if(finalCurrent<qp.length)
                            {
                                feipaip[mjpCounter].children[0].material =mjpmesh[qp[finalCurrent]];
                                mahjongMusicAudio[qp[finalCurrent]].play();
                            }else
                            {

                                if(qp.length==13)
                                {
                                    feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
                                    mahjongMusicAudio[meshTempMj].play();
                                }else
                                {
                                    feipaip[mjpCounter].children[0].material =mjpmesh[qp[qp.length-1]];
                                    mahjongMusicAudio[qp[qp.length-1]].play();
                                }

                            }
                            colNum++;
                        }
                        //如果不是东的玩家进入禁止出牌
                        scene.add(feipai[mjpCounter]);
                        scene.add(feipaip[mjpCounter]);

                        feipaiDirection=0;
                        mjpCounter++;
                        zeroCount++;
                        if(finalCurrent<qp.length)
                        {
                            finalChupaiMahJong=qp[finalCurrent];
                        }else
                        {
                            if(qp.length==13)
                            {
                                finalChupaiMahJong=meshTempMj;
                            }else
                            {
                                finalChupaiMahJong=qp[qp.length-1]
                            }

                        }
                        console.log("finalChupaiMahJong:"+finalChupaiMahJong);

                        //长时间消失，短时间开始
                        stopChupaiTime();
                        playWaitTimeStartFlag=true;
                        startFinaltime();


                        tempPlayerString=choosePlayer(tempdirection);
                        send(requestNextPlayer);
                        console.log("requestNextPlayer2:"+requestNextPlayer);
                        endFaPaiFlag=true;//结束发牌，进行动画的标志位，勿删。
                    }else
                    {
                        tempClickMouseNum=currentClick;
                    }
                }

            }
            /////////////////////////////////////
        }
    }
}

function choosePlayer(tempdirection) {
    var playerString="";
    if(tempdirection==0)
    {
        playerString="a";
        return playerString;
    }else if(tempdirection==1)
    {
        playerString="b";
        return playerString;
    }else if(tempdirection==2)
    {
        playerString="c";
        return playerString;
    }else if(tempdirection==3)
    {
        playerString="d";
        return playerString;
    }
}