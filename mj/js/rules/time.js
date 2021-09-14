/**
 * Created by Administrator on 2017/7/24.
 */
var chupaiTimeCount1=-1;
var startTimeCount1=-1
var chupaiTimeInterval;
var starTimeInterval;

function finalChupaiTime() {
    if(playTimeStartFlag)
    {

        playTimeStartFlag=false;
        chupaiTimeInterval=window.setInterval(function () {
            finalChupaiTimeCount();
        },1000);
    }

}

function finalChupaiTimeCount()
{
    chupaiTimeCount1++;
    console.log("startTimeCount1:"+startTimeCount1);
    if(chupaiTimeCount1==9)
    {
        if(getWebSocketMahJong!=0)
        {
            if(returnYesOrNoFromTwoPlayers(tempdirection,getWebSocketTempDirection))
            {
                clickChupaiFlag=false;
            }
        }

        stopFianlChupaiTime();
    }

    playerTimeMaterial.transparent=true;
    playerTimeMaterial.map=initTimeImgArray[chupaiTimeCount1];
    playerTimeLabel=new THREE.Mesh(playerTime1,playerTimeMaterial);
    playerTimeLabel.position.x =mjzx-9.7;
    playerTimeLabel.position.y =mjzy+11;
    playerTimeLabel.position.z =mjzz+12.5;
    scene.add(playerTimeLabel);
}

function stopFianlChupaiTime() {
    playerTimeMaterial.map = timeBackgroundImg;
    scene.remove(playerTimeLabel);

    window.clearInterval(chupaiTimeInterval);
    chupaiTimeCount1 = -1;
    if(!clickChupaiFlag)
    {
        if(clickNumber==1)
        {
            scene.remove(myqp[14]);
            scene.remove(mymjp[14]);
            console.log("xxxxxxxxxxxxxxxxxxxxxxxclickNumber:"+clickNumber);
            feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
            feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
            feipai[mjpCounter].rotation.y=-Math.PI/2;
            feipaip[mjpCounter].rotation.y=-Math.PI/2;
            if((mjpCounter+1)%7==0&&mjpCounter!=0)
            {
                feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                if(qp.length==13)
                {
                    feipaip[mjpCounter].children[0].material =mjpmesh[qp[14]];
                    mahjongMusicAudio[qp[14]].play();
                }else {
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
                feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);

                if(qp.length==13)
                {
                    feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
                    mahjongMusicAudio[meshTempMj].play();
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
            mjpCounter++;
            if(qp.length==13)
            {
                finalChupaiMahJong=meshTempMj;
            }else
            {
                finalChupaiMahJong=qp[qp.length-1]
            }
            mouseClickFlag=true;
            console.log("finalChupaiMahJong:"+finalChupaiMahJong);
            tempPlayerString=choosePlayer(tempdirection);
            send(requestNextPlayer);
            console.log("requestNextPlayer3:"+requestNextPlayer);
            endFaPaiFlag=false;//结束发牌，进行动画的标志位，勿删。
            clickNumIsOrNo=1;
            clickChupaiFlag=true;
        }
        // else if(clickNumber==2)
        // {
        //     scene.remove(myqp[14]);
        //     scene.remove(mymjp[14]);
        //     scene.remove(myqp[qp.length]);
        //     scene.remove(mymjp[qp.length]);
        //     console.log("xxxxxxxxxxxxxxxxxxxxxxxclickNumber:"+clickNumber);
        //     feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipai[mjpCounter].rotation.y=-Math.PI/2;
        //     feipaip[mjpCounter].rotation.y=-Math.PI/2;
        //     if((mjpCounter+1)%7==0&&mjpCounter!=0)
        //     {
        //         feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
        //         mahjongMusicAudio[meshTempMj].play();
        //
        //         if(rowNum<3)
        //         {
        //             colNum=0;
        //             rowNum++;
        //         }else
        //         {
        //             colNum++;
        //             rowNum=3;
        //         }
        //     }else
        //     {
        //
        //         feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
        //         colNum++;
        //     }
        //     //如果不是东的玩家进入禁止出牌
        //     scene.add(feipai[mjpCounter]);
        //     scene.add(feipaip[mjpCounter]);
        //     mjpCounter++;
        //     finalChupaiMahJong=meshTempMj;
        //     mouseClickFlag=true;
        //     console.log("finalChupaiMahJong:"+finalChupaiMahJong);
        //     tempPlayerString=choosePlayer(tempdirection);
        //     send(requestNextPlayer);
        //     console.log("requestNextPlayer3:"+requestNextPlayer);
        //     endFaPaiFlag=false;//结束发牌，进行动画的标志位，勿删。
        //     clickNumIsOrNo=1;
        //     clickChupaiFlag=true;
        // }else if(clickNumber==3)
        // {
        //     scene.remove(myqp[14]);
        //     scene.remove(mymjp[14]);
        //     scene.remove(myqp[qp.length]);
        //     scene.remove(mymjp[qp.length]);
        //     console.log("xxxxxxxxxxxxxxxxxxxxxxxclickNumber:"+clickNumber);
        //     feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipai[mjpCounter].rotation.y=-Math.PI/2;
        //     feipaip[mjpCounter].rotation.y=-Math.PI/2;
        //     if((mjpCounter+1)%7==0&&mjpCounter!=0)
        //     {
        //         feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].children[0].material =mjpmesh[qp[qp.length-1]];
        //         mahjongMusicAudio[qp[qp.length-1]].play();
        //
        //         if(rowNum<3)
        //         {
        //             colNum=0;
        //             rowNum++;
        //         }else
        //         {
        //             colNum++;
        //             rowNum=3;
        //         }
        //     }else
        //     {
        //
        //         feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
        //         colNum++;
        //     }
        //     //如果不是东的玩家进入禁止出牌
        //     scene.add(feipai[mjpCounter]);
        //     scene.add(feipaip[mjpCounter]);
        //     mjpCounter++;
        //     finalChupaiMahJong=qp[qp.length-1];
        //     mouseClickFlag=true;
        //     console.log("finalChupaiMahJong:"+finalChupaiMahJong);
        //     tempPlayerString=choosePlayer(tempdirection);
        //     send(requestNextPlayer);
        //     console.log("requestNextPlayer3:"+requestNextPlayer);
        //     endFaPaiFlag=false;//结束发牌，进行动画的标志位，勿删。
        //     clickNumIsOrNo=1;
        //     clickChupaiFlag=true;
        // }
    }
}
function chupaiTime() {
    if(playTimeStartFlag)
    {

        playTimeStartFlag=false;
        chupaiTimeInterval=window.setInterval(function () {
            chupaiTimeCount();
        },1000);
    }

}

function stopChupaiTime() {
    playerTimeMaterial.map=timeBackgroundImg;
    scene.remove(playerTimeLabel);

    window.clearInterval(chupaiTimeInterval);
    chupaiTimeCount1=-1;
    console.log("TimeclickChupaiFlag"+clickChupaiFlag);
    if(!clickChupaiFlag)
    {
        if(clickNumber==1)
        {
            scene.remove(myqp[14]);
            scene.remove(mymjp[14]);
            console.log("xxxxxxxxxxxxxxxxxxxxxxxclickNumber:"+clickNumber);
            feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
            feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
            feipai[mjpCounter].rotation.y=-Math.PI/2;
            feipaip[mjpCounter].rotation.y=-Math.PI/2;
            if((zeroCount+1)%7==0&&zeroCount!=0)
            {
                feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
                if(qp.length==13)
                {
                    feipaip[mjpCounter].children[0].material =mjpmesh[qp[14]];
                    mahjongMusicAudio[qp[14]].play();
                }else {
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
                feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);

                if(qp.length==13)
                {
                    feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
                    mahjongMusicAudio[meshTempMj].play();
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

            if(qp.length==13)
            {
                finalChupaiMahJong=meshTempMj;
            }else
            {
                finalChupaiMahJong=qp[qp.length-1]
            }
            mouseClickFlag=true;
            console.log("finalChupaiMahJong:"+finalChupaiMahJong);
            tempPlayerString=choosePlayer(tempdirection);
            send(requestNextPlayer);
            console.log("requestNextPlayer3:"+requestNextPlayer);
            endFaPaiFlag=false;//结束发牌，进行动画的标志位，勿删。
            clickNumIsOrNo=1;
            clickChupaiFlag=true;
        }
        // else if(clickNumber==2)
        // {
        //     scene.remove(myqp[qp.length]);
        //     scene.remove(mymjp[qp.length]);
        //     console.log("xxxxxxxxxxxxxxxxxxxxxxxclickNumber:"+clickNumber);
        //     feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipai[mjpCounter].rotation.y=-Math.PI/2;
        //     feipaip[mjpCounter].rotation.y=-Math.PI/2;
        //     if((mjpCounter+1)%7==0&&mjpCounter!=0)
        //     {
        //         feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
        //         mahjongMusicAudio[meshTempMj].play();
        //
        //         if(rowNum<3)
        //         {
        //             colNum=0;
        //             rowNum++;
        //         }else
        //         {
        //             colNum++;
        //             rowNum=3;
        //         }
        //     }else
        //     {
        //
        //         feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
        //         colNum++;
        //     }
        //     //如果不是东的玩家进入禁止出牌
        //     scene.add(feipai[mjpCounter]);
        //     scene.add(feipaip[mjpCounter]);
        //     mjpCounter++;
        //     finalChupaiMahJong=meshTempMj;
        //     mouseClickFlag=true;
        //     console.log("finalChupaiMahJong:"+finalChupaiMahJong);
        //     tempPlayerString=choosePlayer(tempdirection);
        //     send(requestNextPlayer);
        //     console.log("requestNextPlayer3:"+requestNextPlayer);
        //     endFaPaiFlag=false;//结束发牌，进行动画的标志位，勿删。
        //     clickNumIsOrNo=1;
        //     clickChupaiFlag=true;
        // }else if(clickNumber==3)
        // {
        //     scene.remove(myqp[qp.length]);
        //     scene.remove(mymjp[qp.length]);
        //     console.log("xxxxxxxxxxxxxxxxxxxxxxxclickNumber:"+clickNumber);
        //     feipai[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipaip[mjpCounter].scale.set(0.07, 0.07, 0.07);//设置放大系数
        //     feipai[mjpCounter].rotation.y=-Math.PI/2;
        //     feipaip[mjpCounter].rotation.y=-Math.PI/2;
        //     if((mjpCounter+1)%7==0&&mjpCounter!=0)
        //     {
        //         feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].children[0].material =mjpmesh[qp[qp.length-1]];
        //         mahjongMusicAudio[qp[qp.length-1]].play();
        //
        //         if(rowNum<3)
        //         {
        //             colNum=0;
        //             rowNum++;
        //         }else
        //         {
        //             colNum++;
        //             rowNum=3;
        //         }
        //     }else
        //     {
        //
        //         feipai[mjpCounter].position.set(mjzx-13.5+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].position.set(mjzx-13.4+1.1*colNum,mjzy+8.5,mjzz+15+2.0*rowNum);
        //         feipaip[mjpCounter].children[0].material =mjpmesh[meshTempMj];
        //         colNum++;
        //     }
        //     //如果不是东的玩家进入禁止出牌
        //     scene.add(feipai[mjpCounter]);
        //     scene.add(feipaip[mjpCounter]);
        //     mjpCounter++;
        //     finalChupaiMahJong=qp[qp.length-1];
        //     mouseClickFlag=true;
        //     console.log("finalChupaiMahJong:"+finalChupaiMahJong);
        //     tempPlayerString=choosePlayer(tempdirection);
        //     send(requestNextPlayer);
        //     console.log("requestNextPlayer3:"+requestNextPlayer);
        //     endFaPaiFlag=false;//结束发牌，进行动画的标志位，勿删。
        //     clickNumIsOrNo=1;
        //     clickChupaiFlag=true;
        // }
    }

}

function chupaiTimeCount()
{
    chupaiTimeCount1++;
    console.log("startTimeCount1:"+startTimeCount1);
    if(chupaiTimeCount1==9)
    {
        stopChupaiTime();
    }

    playerTimeMaterial.transparent=true;
    playerTimeMaterial.map=initTimeImgArray[chupaiTimeCount1];
    playerTimeLabel=new THREE.Mesh(playerTime1,playerTimeMaterial);
    playerTimeLabel.position.x =mjzx-9.7;
    playerTimeLabel.position.y =mjzy+11;
    playerTimeLabel.position.z =mjzz+12.5;
    scene.add(playerTimeLabel);
}



function startFinaltime() {
    if (playWaitTimeStartFlag)
    {
        playWaitTimeStartFlag=false;
        starTimeInterval=window.setInterval(function () {
            startFinalTimeCount();
        },1000);
    }

}

function startFinalTimeCount() {
    startTimeCount1++;
    if(startTimeCount1==5)
    {
        stopFinalStartTime();
    }
    playerTimeMaterial.transparent=true;
    playerTimeMaterial.map=initWaitTimeImgArray[startTimeCount1];
    playerWaitTimeLabel=new THREE.Mesh(playerTime,playerTimeMaterial);
    playerWaitTimeLabel.position.x =mjzx-9.7;
    playerWaitTimeLabel.position.y =mjzy+11;
    playerWaitTimeLabel.position.z =mjzz+12.5;
    scene.add(playerWaitTimeLabel);
}

function stopFinalStartTime() {
    playerTimeMaterial.map=timeBackgroundImg;
    scene.remove(playerWaitTimeLabel);
    window.clearInterval(starTimeInterval);
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
    console.log("time0");
    startTimeCount1=-1;
}

function starttime() {
    if (playWaitTimeStartFlag)
    {
        playWaitTimeStartFlag=false;
        starTimeInterval=window.setInterval(function () {
            startTimeCount();
        },1000);
    }
    
}

function startTimeCount() {
    startTimeCount1++;
    console.log("startTimeCount1:"+startTimeCount1);
    if(startTimeCount1==5)
    {
        stopStartTime();
    }
    playerTimeMaterial.transparent=true;
    playerTimeMaterial.map=initWaitTimeImgArray[startTimeCount1];
    playerWaitTimeLabel=new THREE.Mesh(playerTime,playerTimeMaterial);
    playerWaitTimeLabel.position.x =mjzx-9.7;
    playerWaitTimeLabel.position.y =mjzy+11;
    playerWaitTimeLabel.position.z =mjzz+12.5;
    scene.add(playerWaitTimeLabel);
}

function stopStartTime() {
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
    console.log("time1");
    ohterMahjongTrueFlag=true;
    playerTimeMaterial.map=timeBackgroundImg;
    scene.remove(playerWaitTimeLabel);
    if(timeFlag)
    {
        waitTimeFlag=true;
        timeFlag=false;
    }else
    {
        waitTimeFlag=false;
    }
    continueYesOrNoFlag=true;
    console.log("waitTimeFlag:"+waitTimeFlag+"|||||||continueYesOrNoFlag:"+continueYesOrNoFlag);
    window.clearInterval(starTimeInterval);
    continueChupai();
    startTimeCount1=-1;
}



function continueChupai() {

    if(!waitTimeFlag)//重要
    {
        console.log("waitTimeFlag:"+waitTimeFlag+"|||||||continueYesOrNoFlag:"+continueYesOrNoFlag);
        if(returnYesOrNoFromTwoPlayers(tempdirection,getWebSocketTempDirection))
        {
            clickChupaiFlag=true;
            send("requestNextMahJong");
            firstInFaPai=false;
            console.log("requestNextMahJongnextDirection:"+nextDirection);
            playTimeStartFlag=true;
            stopFinalStartTime();
            chupaiTime();
        }

        setTimeout(function () {
            fapaiflag=false;//再发一次牌
            feipaiFlag=false;
            firstcomeflage=false;
            playerFapaiFlag=true;
            resettingQpFlag = false;
            firstInEndCartoonFlag=true;
            clickNumIsOrNo=0;
        },200);

    }
    //startfapai(nextDirection);
}