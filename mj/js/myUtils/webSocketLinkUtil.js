var chiString;
function stringResolution(strVal) {
    console.log("收到字符串为:"+strVal+"||||字符串长度为："+strVal.substring(1,29));
    if(strVal.substring(0,20)==sendqipaiMahJong)
    {
        strVal=strVal.substring(20,strVal.length);
        qp=stringToInt(strVal);
        qp=qp.splice(0,13);
        qpInt=qp;
        initcene();

    }else if(strVal.substring(0,19)===sendNextMahJong)
    {
        strVal=strVal.substring(19,strVal.length);
        meshTempMj=parseInt(strVal);
        temp1qp=qp.slice(0);
        majongHuFromThere=0;
        maJongHu(temp1qp,meshTempMj);
        temp1qp=qp.slice(0);
        console.log("temp1qp:"+temp1qp+"||meshTempMj:"+meshTempMj);
        mahJongGang(temp1qp,meshTempMj);
    }else if(strVal.substring(1,26)===sendNextPlayerMahJong)
    {
        getWebSocketTempDirection=strVal.substring(0,1);
        mahjongTempMahjong1=strVal.substring(0,1);
        getWebSocketMahJong=strVal.substring(26,strVal.length);
        feipaiFlag=true;//废牌池开启
        feipaiManager(getWebSocketTempDirection);
       // myBackOrderManager(getWebSocketMahJong);
        console.log("getWebSocketMahJong:"+getWebSocketMahJong);
        mahjongMusicAudio[getWebSocketMahJong].play();
        console.log("getWebSocketTempDirection:"+getWebSocketTempDirection);
        console.log("temp1qp:"+temp1qp);
        majongHuFromThere=1;
        temp1qp=qp.slice(0);
        maJongHu(temp1qp,getWebSocketMahJong);
        temp1qp=qp.slice(0);
        mahJongPeng(temp1qp,getWebSocketMahJong);
        if(returnYesOrNoFromTwoPlayers(tempdirection,getWebSocketTempDirection))
        {
            temp1qp=qp.slice(0);
            mahJongChi(temp1qp,getWebSocketMahJong);
        }
        temp1qp=qp.slice(0);
        mahJongGang(temp1qp,getWebSocketMahJong);
        setTimeout(function () {
            mahjongChiFlag=false;
            qpHuPaiFlag=false;
            mahjongGangFlag=false;
            mahJongPengPaiFlag=false;
        },200);

        timeFlag=false;
        stopChupaiTime();
        playWaitTimeStartFlag=true;
        if(returnYesOrNoFromTwoPlayers(tempdirection,getWebSocketTempDirection))
        {
            starttime();
        }else
        {
            startFinaltime();
        }

        continueYesOrNo();
        playerFapaiFlag=false;
        mouseClickFlag=true;
        fapaiflag=true;//再发一次牌

        console.log("continueYesOrNoFlag:"+continueYesOrNoFlag);
    }else if(strVal.substring(0,18)==sendNextPlayer)
    {
        continueYesOrNo();
        console.log("continueYesOrNoFlag:"+continueYesOrNoFlag);
        setTimeout(function () {
            if(continueYesOrNoFlag)//重要
            {
                strVal=strVal.substring(18,strVal.length);
                fapaiflag=false;
                if(nextPlayerAndDirectionFlag)
                {

                    nextDirection=returnChoosePlayer(strVal);
                    console.log("nextDirection1111111111:"+nextDirection);
                    if(nextDirection===0)
                    {
                        clickNumIsOrNo=0;
                        firstInEndCartoonFlag=true;
                    }
                }else
                {
                    if(returnYesOrNoFromTwoPlayers(tempdirection,getWebSocketTempDirection))
                    {
                        console.log("nextDirection2222222222222222222222222222:"+nextDirection);
                        nextDirection=0;
                        nextPlayerAndDirectionFlag=false;
                    }else
                    {
                        console.log("nextDirection3333333333333333333333333:"+nextDirection);
                        nextDirection=returnChoosePlayer(strVal);
                    }
                }
                console.log(nextDirection + "nextDirection");
                startfapai(nextDirection);
            }else
            {
                strVal=strVal.substring(18,strVal.length);
                fapaiflag=true;
                if(nextPlayerAndDirectionFlag)
                {

                    nextDirection=returnChoosePlayer(strVal);
                    console.log("nextDirection1111111111:"+nextDirection);
                    if(nextDirection===0)
                    {
                        clickNumIsOrNo=0;
                        firstInEndCartoonFlag=true;
                    }
                }else
                {
                    if(returnYesOrNoFromTwoPlayers(tempdirection,getWebSocketTempDirection))
                    {
                        console.log("nextDirection2222222222222222222222222222:"+nextDirection);
                        nextDirection=0;
                        nextPlayerAndDirectionFlag=false;
                    }else
                    {
                        console.log("nextDirection3333333333333333333333333:"+nextDirection);
                        nextDirection=returnChoosePlayer(strVal);
                    }
                }
                console.log(nextDirection + "nextDirection");
                console.log("mahJongPengPaiFlag:"+mahJongPengPaiFlag+"||||||||qpHuPaiFlag"+qpHuPaiFlag+"||||||||mahjongChiFlag"+mahjongChiFlag+"||||||||mahjongGangFlag"+mahjongGangFlag);
            }
        });


    }else if(strVal.substring(1,29)==sendPengMahJongAndPlayer)
    {
        //控制时间显示
        stopFinalStartTime();
        playTimeStartFlag=true;
        chupaiTime();

        //backOrderManager();
        fapaiflag=false;
        mahjongPengTempNumber=strVal.substring(29,strVal.length);
        mahjongPengTempPlayer=strVal.substring(0,1);
        mahJongPengPaiFlag=false;

        //其他玩家的废牌显示
        feipaiPengChihHuCountManagerUtil(mahjongPengTempPlayer);


        iconCartoonPosition(mahjongPengTempNumber,tempdirection);
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
        PengChange();//将当前牌型改为传来数据的牌型
        mahjongPengManager();
        console.log("mahJongPengPaiFlag:"+mahJongPengPaiFlag+"}}}}}nextDirection:"+nextDirection);
    }else if(strVal.substring(1,28)==sendChiMahJongAndPlayer)
    {

        //控制时间显示
        stopFinalStartTime();
        playTimeStartFlag=true;
        chupaiTime();


        //backOrderManager();
        console.log("}}}}}nextDirection:"+nextDirection);
        fapaiflag=false;
        chiString=strVal.substring(28,strVal.length);
        mahjongPengTempPlayer=strVal.substring(0,1);
        mahjongChiNumberArray=stringToInt(chiString);
        mahjongChiNumberArray=mahjongChiNumberArray.splice(0,3);
        mahjongChiFlag=false;

        //其他玩家的废牌显示
        feipaiPengChihHuCountManagerUtil(mahjongPengTempPlayer);

        chiIconCartoonPosition(mahjongPengTempPlayer,tempdirection);
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
        PengChange();//将当前牌型改为传来数据的牌型
        mahjongChiManager();
        console.log("mahjongChiNumberArray:"+mahjongChiNumberArray+"|||||nextDirection:"+nextDirection+"|||mahjongPengTempPlayer"+mahjongPengTempPlayer);

    }else if(strVal.substring(1,29)==sendGangMahJongAndPlayer)
    {
        //控制时间显示
        stopFinalStartTime();
        playTimeStartFlag=true;
        chupaiTime();

        //backOrderManager();
        console.log("}}}}}nextDirection:"+nextDirection);
        fapaiflag=false;
        mahjongGangNumber=strVal.substring(29,strVal.length);
        mahjongPengTempPlayer=strVal.substring(0,1);
        mahjongGangFlag=false;

        //其他玩家的废牌显示
        feipaiPengChihHuCountManagerUtil(mahjongPengTempPlayer);

        gangIconCartoonPositoon(mahjongPengTempPlayer,tempdirection);
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
        PengChange();//将当前牌型改为传来数据的牌型
        mahjongGangManager();
        console.log("mahjongChiNumberArray:"+mahjongChiNumberArray+"|||||nextDirection:"+nextDirection+"|||mahjongPengTempPlayer"+mahjongPengTempPlayer);
    }else if(strVal.substring(1,27)==sendHuMahJongAndPlayer)
    {
        setTimeout(function () {
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

            majongHuTempNumber=strVal.substring(27,strVal.length);
            mahjongHupaiPlayer=strVal.substring(0,1);

            console.log("majongHuTempNumber:"+majongHuTempNumber+"|||||mahjongHupaiPlayer:"+mahjongHupaiPlayer);
            huIconCartoonPosition(mahjongHupaiPlayer,tempdirection);
            if(majongHuFromThere==0)
            {
                majongHuFromThere=1;
            }else
            {
                majongHuFromThere=3;
            }
            console.log("qpHuPaiFlag:"+qpHuPaiFlag);
            if(!qpHuPaiFlag)
            {
                mahjongHuManager(majongHuTempNumber);
            }
        },200);

    }else if(strVal.substring(0,25)==sendPlayerLinkeNumber)
    {
        playerslike_Number=strVal.substring(25,strVal.length);
        if(parseInt(playerslike_Number)==3)
        {
            document.getElementById("linkNumber3").style.display = "block";
        }else if(parseInt(playerslike_Number)==2)
        {
            document.getElementById("linkNumber3").style.display = "none";
            document.getElementById("linkNumber2").style.display = "block";
        }else if(parseInt(playerslike_Number)==1)
        {
            document.getElementById("linkNumber2").style.display = "none";
            document.getElementById("linkNumber1").style.display = "block";
        }else if(parseInt(playerslike_Number)==0)
        {
            isInGame=true;
            mahjongBackgroundAudio.play();
            mahjongReadyGameAudio.pause();
            document.getElementById("linkNumber1").style.display = "none";
            document.getElementById("linkNumber0").style.display = "block";
            document.getElementById("background").style.display = "none";
            setTimeout(function () {
                document.getElementById("linkNumber0").style.display = "none";
                document.getElementById("Mytitle").style.display = "none";
            },1000);
            cTime=window.setInterval(function () {
                if(cy>40)
                {
                    cy=cy-1;
                    cz=cz-1;
                    camera.position.x = 0;//设置摄像机的x坐标
                    camera.position.y = cy ;//设置摄像机的y坐标40
                    camera.position.z = cz;//设置摄像机的z坐标35
                    camera.lookAt(new THREE.Vector3(0, mjzy, mjzz));//设置摄像机焦点
                }else
                {
                    window.clearInterval(cTime);
                }
            }, 16.6);

            setTimeout(function () {
                document.getElementById("timeCartoon").style.display = "none";
            },2000);

        }
    }else if(strVal.substring(0,35)==sendRequestGangMahJongAndPlayer)
    {
        requestGangNumber=strVal.substring(35,36);
        console.log("requestGangNumber:"+requestGangNumber);
    }else if(strVal.substring(1,36)==sendTempPlayerAndIntArrayLength)
    {
        otherPlayer=parseInt(strVal.substring(0,1));
        otherPlayerIntArrayLength=parseInt(strVal.substring(36,strVal.length));
        console.log("otherPlayer:"+otherPlayer+"|||otherPlayerIntArrayLength"+otherPlayerIntArrayLength);
    }else if(strVal.substring(1,17)==sendChiNumber)
    {
        mahjongOhtherChi=strVal.substring(0,1);
        console.log("sendChiNumber:"+sendChiNumber);
    }
}
//int类型的返回数据的处理
function intResolution(intVal) {
    if (tempDirectionFlag) {
        //console.log("event.data" + event.data);
        if (intVal == 0) {
            //myMap.set(event.data,intVal);
            tempdirection = intVal;
            console.log(tempdirection + "tempdirection");
            nextDirection=0;
            send(intVal);
            send("requestNextMahJong");
            tempDirectionFlag = false;
        }else
        if (intVal == 1) {
           // myMap.set(event.data,intVal);
            tempdirection = intVal;
            console.log(tempdirection + "tempdirection");
            nextDirection=0;
            send(intVal);
            tempDirectionFlag = false;
        }else
        if (intVal == 2) {
           // myMap.set(event.data,intVal);
            tempdirection = intVal;
            console.log(tempdirection + "tempdirection");
            nextDirection=0;
            send(intVal);
            tempDirectionFlag = false;
        }else
        if (intVal == 3) {
           // myMap.set(event.data,intVal);
            tempdirection = intVal;
            console.log(tempdirection + "tempdirection");
            nextDirection=0;
            send(intVal);
            tempDirectionFlag = false;
        }

    }

}
//对发送数据的处理
function messageResolution(socket,message) {
    if(message=="requestDirection")
    {
        sendString(socket,message);
    }else if(message==playerLinkNumber)
    {
        sendString(socket,message);
    }
    else if(message==0)
    {
        sendInt(socket,message);
    }else if(message==1)
    {
        sendInt(socket,message);
    }else if(message==2)
    {
        sendInt(socket,message);
    }else if(message==3)
    {
        sendInt(socket,message);
    }
    else if(message=="requestNextMahJong")
    {
        sendString(socket,message);
    }
    else if(message==requestNextPlayer)
    {
        //sendTempPlayerIntLength(socket,14,tempdirection,qp.length);
        clickChupaiFlag=false;
        myMahjongNumber=finalChupaiMahJong;
        sendStringandInt(socket,requestNextPlayer+tempPlayerString,finalChupaiMahJong);
    }else if(message==HuMahJongAndPlayer)
    {
        console.log("tempdirection"+tempdirection+"}}}majongTempNumber:"+majongTempNumber);
        HuInt(socket,13,tempdirection,majongTempNumber);
    }else if(message==pengMahJongAndPlayer)
    {
        console.log("mahjongPengPaiNumber"+mahjongPengPaiNumber);
        sendStringAndIntAndInt(socket,pengMahJongAndPlayer,tempdirection,mahjongPengPaiNumber);
    }
    else if(message==chiMahJongAndPlayer)
    {
        console.log("mahjongChiNumberArray1"+mahjongChiNumberArray1+"mahjongChiNumberArray1[0]："+mahjongChiNumberArray1[0]+"||||||||mahjongChiNumberArray[1]:"+mahjongChiNumberArray1[1]+"|||||||||mahjongChiNumberArray[2]:"+mahjongChiNumberArray1[2]);
        fiveInt(socket,11,tempdirection,mahjongChiNumberArray1[0],mahjongChiNumberArray1[1],mahjongChiNumberArray1[2]);
    }
    else if(message==gangMahJongAndPlayer)
    {
        ThreeInt(socket,12,tempdirection,mahjongGangNumber,0);
    }
    else if(message==resetGame)
    {
        console.log("resetGame");
        sendResetGame(socket,15);
    }
    else if(message==chiNumber)
    {
        console.log("chiNumber");
        sendChiNumber(socket,16,tempdirection,otherChiNumber);
    }
}

//发送当前玩家数组长度
function sendResetGame(socket,int0)
{
    console.log("int0:"+int0);
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(8);
    //字符串类型号3
    var buf32View = new Int32Array(buf);
    buf32View[0]=10;
    buf32View[1]=int0;
    socket.send(buf);
}


