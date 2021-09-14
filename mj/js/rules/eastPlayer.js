function eastPlayer(nextDirection) {
    //发牌标志位
    if(!fapaiflag)
    {
        if(nextDirection===0)
        {
            console.log("continueYesOrNoFlag:"+continueYesOrNoFlag+"|||||||||waitTimeFlag:"+waitTimeFlag);
            if(player1FirstIn)//第一次进入标志位
            {
                clickNumber=1;
                clickChupaiFlag=false;
                scene.remove(myqp[14]);
                scene.remove(mymjp[14]);
                myqp[14] = fapai[nextDirection];
                myqp[14].position.set(mjzx - 23.2 + 2.15 * 14, mjzy + 15.5, mjzz + 31);
                scene.add(myqp[14]);
                mymjp[14].position.set(mjzx - 23.2 + 2.15 * 14, mjzy + 15.5, mjzz + 31);
                mymjp[14].children[0].material = mjpmesh[meshTempMj];
                scene.add(mymjp[14]);
                fapaiflag = true;
                finalCurrent = qp[finalCurrent];
                player1FirstIn=false;
                console.log("clickChupaiFlag:"+clickChupaiFlag);
            }else
            {
                console.log("playerFapaiFlag:"+playerFapaiFlag);
                if(playerFapaiFlag)
                {
                    if(qp.length!=13)
                    {
                        clickNumber=2;//起牌长度不为13
                        scene.remove(myqp[14]);
                        scene.remove(mymjp[14]);
                        scene.remove(qp.length+1);
                        scene.remove(qp.length+1);
                        console.log("qp.length:"+qp.length);
                        myqp[qp.length+1] = fapai[nextDirection];
                        myqp[qp.length+1].position.set(mjzx-23.2+ 2.15 * (qp.length+1), mjzy + 15.5, mjzz + 31);
                        scene.add(myqp[qp.length+1]);
                        mymjp[qp.length+1].position.set(mjzx - 23.2 + 2.15 * (qp.length+1), mjzy + 15.5, mjzz + 31);
                        mymjp[qp.length+1].children[0].material = mjpmesh[meshTempMj];
                        scene.add(mymjp[qp.length+1]);
                        fapaiflag = true;
                        ohtherClickFlag=true;//如果进来的是小于13张的牌
                        finalCurrent = qp[finalCurrent];
                    }else
                    {
                        clickNumber=1;//起牌长度为13
                        scene.remove(myqp[14]);
                        scene.remove(mymjp[14]);
                        scene.remove(myqp[qp.length+1]);
                        scene.remove(mymjp[qp.length+1]);
                        myqp[qp.length+1] = fapai[nextDirection];
                        myqp[qp.length+1].position.set(mjzx - 23.2 + 2.15 * (qp.length+1), mjzy + 15.5, mjzz + 31);
                        scene.add(myqp[qp.length+1]);
                        mymjp[qp.length+1].position.set(mjzx - 23.2 + 2.15 * (qp.length+1), mjzy + 15.5, mjzz + 31);
                        mymjp[qp.length+1].children[0].material = mjpmesh[meshTempMj];
                        scene.add(mymjp[qp.length+1]);
                        fapaiflag = true;
                        finalCurrent = qp[finalCurrent];
                    }

                }
            }
        }
        // if(mahJongPengPaiFlag)
        // {
        //     if(!waitTimeFlag||continueYesOrNoFlag)
        //     {
        //         console.log("waitTimeFlag:"+waitTimeFlag);
        //         if(nextDirection===1)
        //         {
        //             scene.remove(ontherPaidi);
        //             scene.remove(ontherPaimian);
        //             ontherPaidi = fapai[nextDirection];
        //             ontherPaidi.position.set(mjzx + 15, mjzy + 8.5, mjzz - 5 - 2.1 * 2);
        //             scene.add(ontherPaidi);
        //             fapaiflag = true;
        //             mouseClickFlag=false;
        //         }else if(nextDirection==2)
        //         {
        //             scene.remove(ontherPaidi);
        //             scene.remove(ontherPaimian);
        //             ontherPaidi = fapai[nextDirection];
        //             ontherPaidi.position.set(mjzx+2-2.1*14,mjzy+8.5,mjzz-15);
        //             scene.add(ontherPaidi);
        //             fapaiflag = true;
        //             mouseClickFlag=false;
        //         }else if(nextDirection==3)
        //         {
        //             scene.remove(ontherPaidi);
        //             scene.remove(ontherPaimian);
        //             ontherPaidi = fapai[nextDirection];
        //             ontherPaidi.position.set(mjzx-35,mjzy+8.5,mjzz-5+2.1*14);
        //             scene.add(ontherPaidi);
        //             fapaiflag = true;
        //             mouseClickFlag=false;
        //         }
        //
        //     }
        // }

    }

    if (endFaPaiFlag) {
        firstInEndCartoonFlag=true;
        if(clickNumber==1)
        {
            threeteenClickEndUtil();
            console.log("clickNumber:"+clickNumber);
        }else if(clickNumber==2)
        {
            TwoClickNumberEndUtil();
            console.log("clickNumber:"+clickNumber);
        }else if(clickNumber==3)
        {
            ThreeClickNumberEndUtil();
            console.log("clickNumber:"+clickNumber);

        }
    }



}