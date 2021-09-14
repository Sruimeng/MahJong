//当有13张牌之后的动画操作
function threeteenClickEndUtil() {
    if (firstInEndCartoonFlag) {
        tempx14 = mjzx - 23.2 + 2.15 * 14;
        tempy = mjzy + 15.5;
        tempz = mjzz + 31;
        mjLocationInArray = chupaisort(qp, meshTempMj);
        chumjLoctionInArray = finalCurrent;
        console.log("mjLocationInArray:"+mjLocationInArray);
        console.log("chumjLoctionInArray:"+chumjLoctionInArray);
        //************第二个动画和第三个动画之间的间隔***************//
        timeTwoToThree=(qp.length-mjLocationInArray+1)*50;

        console.log("timeTwoToThree:"+timeTwoToThree);
        //************出牌动画开始***************//
        //插入的位置和出牌的位置相同
        if(chumjLoctionInArray!==14)
        {
            if (mjLocationInArray == chumjLoctionInArray) {
                chupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray);

            } else if (mjLocationInArray == 12)
            //插入的位置在最后
            {
                chupaiTranslation(tempx14);
                for (var i = chumjLoctionInArray; i < mjLocationInArray; i++) {
                    tempx = mjzx - 23.2 + 2.15 * (i + 1);
                    chupaiSmallTranslation(tempx, i, 0);
                }
            } else if (mjLocationInArray < chumjLoctionInArray)
            //插入的位置在出牌的位置的前面
            {
                chupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray);
                for (var i = mjLocationInArray; i < chumjLoctionInArray; i++) {
                    tempx = mjzx - 23.2 + 2.15 * i;
                    chupaiSmallTranslation(tempx, i, 1);
                }
            }
            else if (mjLocationInArray > chumjLoctionInArray)
            //插入的位置在出牌的位置的后面
            {
                chupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray - 1);
                for (var i = chumjLoctionInArray; i < mjLocationInArray - 1; i++) {
                    tempx = mjzx - 23.2 + 2.15 * i + 1;
                    chupaiSmallTranslation(tempx, i, 0);
                }
            }
            firstInEndCartoonFlag = false;
            qp.splice(finalCurrent, 1, meshTempMj);
            qp.sort(function (a, b) {
                return a - b
            });
        }else
        {
            console.log("走了00");
        }

        //************出牌动画结束***************//

    }

    if (finalCurrent < 13) {
        scene.remove(myqp[finalCurrent]);
        scene.remove(mymjp[finalCurrent]);
    }else if(finalCurrent==14)
    {
        scene.remove(myqp[14]);
        scene.remove(mymjp[14]);
    }
    resettingQpFlag = true;
    window.setTimeout(function () {
        arrangeMj(qp);
    }, 500);
    //点击在废牌池有牌
    clickNumIsOrNo = 1;
    //false使无法发牌
    endFaPaiFlag = false;
    meshTempMj=0;//发的牌的数字置0
}

function TwoClickNumberEndUtil() {
    if(firstInEndCartoonFlag)
    {
        tempx14 = mjzx - 23.2 + 2.15 * (qp.length+1);
        tempy = mjzy + 15.5;
        tempz = mjzz + 31;
        mjLocationInArray=twoClickNumberchupaisort(qp, meshTempMj);//最后一张牌在数组里的位置
        chumjLoctionInArray = finalCurrent;//出去的牌在数组里的位置
        console.log("qp.lenght:"+qp.length);
        console.log("qp:"+qp);
        console.log("mjLocationInArray:"+mjLocationInArray);
        console.log("chumjLoctionInArray:"+chumjLoctionInArray);
        timeTwoToThree=(qp.length-mjLocationInArray+1)*50;
        //************出牌动画开始***************//
        //插入的位置和出牌的位置相同
        if(chumjLoctionInArray!==(qp.length-1)) {
            if (mjLocationInArray == chumjLoctionInArray) {
                addChupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray);
            } else if (mjLocationInArray == (qp.length-1))
            //插入的位置在最后
            {
                addChupaiTranslation(tempx14);
                for (var i = chumjLoctionInArray; i < mjLocationInArray; i++) {
                    tempx = mjzx - 23.2 + 2.15 * (i + 1);
                    addChupaiSmallTranslation(tempx, i, 0);
                }
            }
            else if (mjLocationInArray < chumjLoctionInArray)
            //插入的位置在出牌的位置的前面
            {
                addChupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray);
                for (var i = mjLocationInArray; i < chumjLoctionInArray; i++) {
                    tempx = mjzx - 23.2 + 2.15 * i;
                    addChupaiSmallTranslation(tempx, i, 1);
                }
            }
            else if (mjLocationInArray > chumjLoctionInArray)
            //插入的位置在出牌的位置的后面
            {
                addChupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray - 1);
                for (var i = chumjLoctionInArray; i < mjLocationInArray - 1; i++) {
                    tempx = mjzx - 23.2 + 2.15 * i + 1;
                    addChupaiSmallTranslation(tempx, i, 0);
                }
            }

            firstInEndCartoonFlag = false;
            console.log("finalCurrent:" + finalCurrent);
            console.log("qp.lenght:" + qp.length);
            console.log("qp1111111:" + qp);
            console.log("mjLocationInArray:" + mjLocationInArray);
            console.log("chumjLoctionInArray:" + chumjLoctionInArray);

            qp.splice(finalCurrent, 1, meshTempMj);//将出牌位置的牌换成获得的牌
            qp.sort(function (a, b) {
                return a - b
            });
            console.log("qp222222:" + qp);

        }
        //************出牌动画结束***************//
        if (finalCurrent < (qp.length+1)) {

            scene.remove(myqp[14]);
            scene.remove(mymjp[14]);
            scene.remove(myqp[finalCurrent]);
            scene.remove(mymjp[finalCurrent]);
        }else if(finalCurrent==(qp.length+1))
        {

            scene.remove(myqp[14]);
            scene.remove(mymjp[14]);
            scene.remove(myqp[qp.length+1]);
            scene.remove(mymjp[qp.length+1]);
        }

        resetEndArrangePengChiHuFlag=true;
        setTimeout(function () {
            console.log("55555555收到1111111");
            arrangeEndPengChiHuMahjong(qp);
        },500);

        console.log("meshTempMj"+meshTempMj);
        console.log("收到1111111");
        //点击在废牌池有牌
        clickNumIsOrNo = 1;
        //false使无法发牌
        endFaPaiFlag = false;
        //fapaiflag = false;
        meshTempMj=0;
    }
}

function ThreeClickNumberEndUtil() {
    if(firstInEndCartoonFlag)
    {
        tempx14 = mjzx - 23.2 + 2.15 * (qp.length);
        tempy = mjzy + 15.5;
        tempz = mjzz + 31;
        mjLocationInArray=(qp.length-2);//最后一张牌在数组里的位置
        chumjLoctionInArray = finalCurrent;
        console.log("qp[qp.length-1]:"+qp[qp.length-1]);
        console.log("qp:"+qp);
        console.log("mjLocationInArray:"+mjLocationInArray);
        console.log("chumjLoctionInArray:"+chumjLoctionInArray);

        timeTwoToThree=(qp.length-mjLocationInArray)*50;//第二个动画和第三个动画之间的间隔

        //************出牌动画开始***************//

        if(chumjLoctionInArray!==qp.length) {
            //插入的位置和出牌的位置相同
            if (mjLocationInArray == chumjLoctionInArray) {
                threeChupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray);
            } else if (mjLocationInArray == (qp.length-2))
            //插入的位置在最后
            {
                threeChupaiTranslation(tempx14);
                for (var i = chumjLoctionInArray; i < mjLocationInArray; i++) {
                    tempx = mjzx - 23.2 + 2.15 * (i + 1);
                    threeChupaiSmallTranslation(tempx, i, 0);
                }
            }
            else if (mjLocationInArray < chumjLoctionInArray)
            //插入的位置在出牌的位置的前面
            {
                threeChupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray);
                for (var i = mjLocationInArray; i < chumjLoctionInArray; i++) {
                    tempx = mjzx - 23.2 + 2.15 * i;
                    threeChupaiSmallTranslation(tempx, i, 1);
                }
            }
            else if (mjLocationInArray > chumjLoctionInArray)
            //插入的位置在出牌的位置的后面
            {
                threeChupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray - 1);
                for (var i = chumjLoctionInArray; i < (mjLocationInArray-1); i++) {
                    tempx = mjzx - 23.2 + 2.15 * i + 1;
                    threeChupaiSmallTranslation(tempx, i, 0);
                }
            }



            firstInEndCartoonFlag = false;



            qp.splice(finalCurrent, 1, qp[qp.length - 1]);
            delete qp[qp.length-1];
            qp=qp.filter(function (t) { return t });
            qp.sort(function (a, b) {
                return a - b
            });

        }else
        {
            delete qp[qp.length-1];
            qp=qp.filter(function (t) { return t });
        }
        //************出牌动画结束***************//
        console.log("finalCurrent:" + finalCurrent);
        console.log("qp.lenght:" + qp.length);

        console.log("mjLocationInArray:" + mjLocationInArray);
        console.log("chumjLoctionInArray:" + chumjLoctionInArray);
        if (finalCurrent < (qp.length+1)) {
            console.log("qp1111111:" + qp);
            scene.remove(myqp[14]);
            scene.remove(mymjp[14]);
            scene.remove(myqp[finalCurrent]);
            scene.remove(mymjp[finalCurrent]);
        }else if(finalCurrent==(qp.length+1))
        {
            console.log("qp4444444:" + qp);
            scene.remove(myqp[14]);
            scene.remove(mymjp[14]);
            scene.remove(myqp[(qp.length+1)]);
            scene.remove(mymjp[(qp.length+1)]);
        }
        resetEndArrangePengChiHuFlag=true;
        setTimeout(function () {
            arrangeEndPengChiHuMahjong(qp);
        },500);

        console.log("meshTempMj"+meshTempMj);
        //点击在废牌池有牌
        clickNumIsOrNo = 1;
        //false使无法发牌
        endFaPaiFlag = false;
        //fapaiflag = false;
    }
}