function mahjongGangManager() {
    mahjongGangAudio.play();
    if(nextDirection==1)
    {
        scene.remove(ontherPaidi);
        scene.remove(ontherPaimian);
        scene.remove(myqp[14]);
        scene.remove(mymjp[14]);
        scene.remove(feipai[mjpCounter-1]);
        scene.remove(feipaip[mjpCounter-1]);
        mjpCounter--;

        for(var i=0;i<4;i++)
        {


            mahjongPengPaiArray1[mahjongPengPaiTemp1].position.set(mjzx + 20, mjzy + 8.5, mjzz - 5 - 2.1 * 7+mahjongPengPaiTemp1*2.1);
            mahjongPengPaiArrayp1[mahjongPengPaiTemp1].position.set(mjzx + 20, mjzy + 8.5, mjzz - 5 - 2.1 * 7+mahjongPengPaiTemp1*2.1);
            mahjongPengPaiArrayp1[mahjongPengPaiTemp1].children[0].material =mjpmesh[mahjongGangNumber];
            scene.add(mahjongPengPaiArray1[mahjongPengPaiTemp1]);
            scene.add(mahjongPengPaiArrayp1[mahjongPengPaiTemp1]);

            mahjongPengPaiTemp1++;
        }


        for(var j=0;j<3;j++)
        {
            scene.remove(rightqp[12-mahjongPengChiGangTemp1]);
            mahjongPengChiGangTemp1--;
        }
        console.log("mahjongPengChiGangTemp1:"+mahjongPengChiGangTemp1);
        scene.remove(rightqp[12-mahjongPengChiGangTemp1]);
        scene.add(rightqp[12-mahjongPengChiGangTemp1+2]);

        mahjongGangFlag=false;
        continueYesOrNo();
        console.log("continueYesOrNoFlag:"+continueYesOrNoFlag);
    }else if(nextDirection==2)
    {
        scene.remove(ontherPaidi);
        scene.remove(ontherPaimian);
        scene.remove(myqp[14]);
        scene.remove(mymjp[14]);
        scene.remove(feipai[mjpCounter-1]);
        scene.remove(feipaip[mjpCounter-1]);
        mjpCounter--;

        for(var i=0;i<4;i++)
        {
            //nextDirection==2
            mahjongPengPaiArray2[mahjongPengPaiTemp2].rotation.y=Math.PI/2;
            mahjongPengPaiArrayp2[mahjongPengPaiTemp2].rotation.y=Math.PI/2;
            mahjongPengPaiArray2[mahjongPengPaiTemp2].position.set(mjzx+2-2.1*18+mahjongPengPaiTemp2*2.1,mjzy+8.5,mjzz-24);
            mahjongPengPaiArrayp2[mahjongPengPaiTemp2].position.set(mjzx+2-2.1*18+mahjongPengPaiTemp2*2.1,mjzy+8.5,mjzz-24);
            mahjongPengPaiArrayp2[mahjongPengPaiTemp2].children[0].material =mjpmesh[mahjongGangNumber];
            scene.add(mahjongPengPaiArray2[mahjongPengPaiTemp2]);
            scene.add(mahjongPengPaiArrayp2[mahjongPengPaiTemp2]);
            mahjongPengPaiTemp2++;
        }

        for(var j=0;j<3;j++)
        {
            scene.remove(upqp[mahjongPengChiGangTemp2]);
            mahjongPengChiGangTemp2--;
        }

        scene.remove(upqp[mahjongPengChiGangTemp2]);
        scene.add(upqp[mahjongPengChiGangTemp2+1]);

        mahjongGangFlag=false;
        continueYesOrNo();

    }else if(nextDirection==3)
    {
        scene.remove(ontherPaidi);
        scene.remove(ontherPaimian);
        scene.remove(myqp[14]);
        scene.remove(mymjp[14]);
        scene.remove(feipai[mjpCounter-1]);
        scene.remove(feipaip[mjpCounter-1]);
        mjpCounter--;

        for(var i=0;i<4;i++) {
            mahjongPengPaiArray3[i].rotation.y = -Math.PI;
            mahjongPengPaiArrayp3[i].rotation.y = -Math.PI;
            mahjongPengPaiArray3[i].position.set(mjzx - 40, mjzy + 8.5, mjzz - 5 + 2.1 * 15 + mahjongPengPaiTemp3 * 2.1);
            mahjongPengPaiArrayp3[i].position.set(mjzx - 40, mjzy + 8.5, mjzz - 5 + 2.1 * 15 + mahjongPengPaiTemp3 * 2.1);
            mahjongPengPaiArrayp3[i].children[0].material = mjpmesh[mahjongGangNumber];
            scene.add(mahjongPengPaiArray3[i]);
            scene.add(mahjongPengPaiArrayp3[i]);
            mahjongPengPaiTemp3++;
        }

        for(var j=0;j<3;j++)
        {
            scene.remove(liftqp[mahjongPengChiGangTemp3]);
            mahjongPengChiGangTemp3--;
        }

        scene.remove(liftqp[mahjongPengChiGangTemp3]);
        scene.add(liftqp[mahjongPengChiGangTemp3+1]);

        mahjongGangFlag=false;
        continueYesOrNo();
    }
    
}