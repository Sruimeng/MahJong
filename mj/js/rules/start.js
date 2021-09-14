/**
 * Created by Administrator on 2017/7/29.
 */

function start(nextDirection) {
    startfapai(nextDirection);
}

//开始发牌
function startfapai(nextDirection) {
    if(tempdirection===0)
    {
        eastPlayer(nextDirection);
    }else if(tempdirection===1) {
        southPlayer(nextDirection);
    }else if(tempdirection===2)
    {
        westPlayer(nextDirection);
    }else if(tempdirection===3)
    {
        northPlayer(nextDirection);
    }

    if(qpHuPaiFlag)
    {

    }


    // if (!fapaiflag) {
    //     orderManager(tempdirection,nextDirection);
    //     console.log("endFaPaiFlag:"+endFaPaiFlag);
    // }

    // if (tempdirection == 0) {
    //     if (endFaPaiFlag) {
    //         if (firstInEndCartoonFlag) {
    //             tempx14 = mjzx - 23.2 + 2.15 * 14;
    //             tempy = mjzy + 15.5;
    //             tempz = mjzz + 31;
    //             mjLocationInArray = chupaisort(qp, meshTempMj);
    //             chumjLoctionInArray = finalCurrent;
    //             // console.log("mjLocationInArray:"+mjLocationInArray);
    //             // console.log("chumjLoctionInArray:"+chumjLoctionInArray);
    //             //************第二个动画和第三个动画之间的间隔***************//
    //             if (mjLocationInArray <= 3) {
    //                 timeTwoToThree = 500;
    //             } else if (mjLocationInArray > 9) {
    //                 timeTwoToThree = 200;
    //             } else {
    //                 timeTwoToThree = 300;
    //             }
    //
    //             //console.log("timeTwoToThree:"+timeTwoToThree);
    //             //************出牌动画开始***************//
    //             //插入的位置和出牌的位置相同
    //             if (mjLocationInArray == chumjLoctionInArray) {
    //                 chupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray);
    //
    //             } else if (mjLocationInArray == 12)
    //             //插入的位置在最后
    //             {
    //                 chupaiTranslation(tempx14);
    //                 for (var i = chumjLoctionInArray; i < mjLocationInArray; i++) {
    //                     tempx = mjzx - 23.2 + 2.15 * (i + 1);
    //                     chupaiSmallTranslation(tempx, i, 0);
    //                 }
    //             } else if (mjLocationInArray < chumjLoctionInArray)
    //             //插入的位置在出牌的位置的前面
    //             {
    //                 chupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray);
    //                 for (var i = mjLocationInArray; i < chumjLoctionInArray; i++) {
    //                     tempx = mjzx - 23.2 + 2.15 * i;
    //                     chupaiSmallTranslation(tempx, i, 1);
    //                 }
    //             }
    //             else if (mjLocationInArray > chumjLoctionInArray)
    //             //插入的位置在出牌的位置的后面
    //             {
    //                 chupaiTranslationAndRotate(tempy, tempz, tempx14, timeTwoToThree, mjLocationInArray - 1);
    //                 for (var i = chumjLoctionInArray; i < mjLocationInArray - 1; i++) {
    //                     tempx = mjzx - 23.2 + 2.15 * i + 1;
    //                     chupaiSmallTranslation(tempx, i, 0);
    //                 }
    //             }
    //             //************出牌动画结束***************//
    //             firstInEndCartoonFlag = false;
    //             qp.splice(finalCurrent, 1, meshTempMj);
    //             qp.sort(function (a, b) {
    //                 return a - b
    //             });
    //         }
    //
    //         if (finalCurrent < 13) {
    //             scene.remove(myqp[finalCurrent]);
    //
    //             scene.remove(mymjp[finalCurrent]);
    //         }
    //         resettingQpFlag = true;
    //         window.setTimeout(function () {
    //             arrangeMj();
    //         }, 500);
    //         //点击在废牌池有牌
    //         clickNumIsOrNo = 1;
    //         //false使无法发牌
    //         endFaPaiFlag = false;
    //         //fapaiflag = false;
    //    }
    }
    //feipaiManager();//其他玩家出牌

//}

