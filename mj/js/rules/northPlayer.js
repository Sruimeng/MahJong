function northPlayer() {
    if(!fapaiflag)
    {
        if(nextDirection===0)
        {
            if(firstInFaPai)
            {
                scene.remove(myqp[14]);
                myqp[14] = fapai[1];
                myqp[14].position.set(mjzx + 15, mjzy + 8.5, mjzz - 5 - 2.1 * 2);
                scene.add(myqp[14]);
                fapaiflag = true;
                mouseClickFlag=true;
                finalCurrent = qp[finalCurrent];
                firstInFaPai=false;
            }else
            {
                console.log("playerFapaiFlag:"+playerFapaiFlag);
                if(playerFapaiFlag)
                {
                    if(qp.length!=13)
                    {
                        clickNumber=2;
                        scene.remove(myqp[14]);
                        scene.remove(mymjp[14]);
                        scene.remove(qp.length+1);
                        scene.remove(qp.length+1);
                        console.log("qp.length:"+qp.length);
                        myqp[qp.length+1] = fapai[nextDirection];
                        myqp[qp.length+1].position.set(mjzx - 23.2 + 2.15 * (qp.length+1), mjzy + 15.5, mjzz + 31);
                        scene.add(myqp[qp.length+1]);
                        mymjp[qp.length+1].position.set(mjzx - 23.2 + 2.15 * (qp.length+1), mjzy + 15.5, mjzz + 31);
                        mymjp[qp.length+1].children[0].material = mjpmesh[meshTempMj];
                        scene.add(mymjp[qp.length+1]);
                        fapaiflag = true;
                        mouseClickFlag=false;
                        playerFapaiFlag=false;
                        ohtherClickFlag=true;//如果进来的是小于13张的牌
                        finalCurrent = qp[finalCurrent];
                    }else
                    {
                        clickNumber=1;
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
                        mouseClickFlag=false;
                        playerFapaiFlag=false;

                        finalCurrent = qp[finalCurrent];
                    }
                }

            }

        }
        // if(mahJongPengPaiFlag)
        // {
        //
        //     if(!waitTimeFlag&&!continueYesOrNoFlag)
        //     {
        //         console.log("waitTimeFlag:"+waitTimeFlag);
        //         if(nextDirection===1)
        //         {
        //             scene.remove(myqp[14]);
        //             scene.remove(mymjp[14]);
        //             myqp[14] = fapai[nextDirection];
        //             myqp[14].position.set(mjzx + 15, mjzy + 8.5, mjzz - 5 - 2.1 * 2);
        //             scene.add(myqp[14]);
        //             fapaiflag = true;
        //             mouseClickFlag=false;
        //         }else if(nextDirection==2)
        //         {
        //             scene.remove(myqp[14]);
        //             scene.remove(mymjp[14]);
        //             myqp[14] = fapai[nextDirection];
        //             myqp[14].position.set(mjzx+2-2.1*14,mjzy+8.5,mjzz-15);
        //             scene.add(myqp[14]);
        //             fapaiflag = true;
        //             mouseClickFlag=false;
        //         }else if(nextDirection==3)
        //         {
        //             scene.remove(myqp[14]);
        //             scene.remove(mymjp[14]);
        //             myqp[14] = fapai[nextDirection];
        //             myqp[14].position.set(mjzx-35,mjzy+8.5,mjzz-5+2.1*14);
        //             scene.add(myqp[14]);
        //             fapaiflag = true;
        //             mouseClickFlag=false;
        //         }
        //     }
        //
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