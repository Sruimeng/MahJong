function addChupaiTranslation(tempx1) {
    var tempLong=0.15;
    fastTranslation=window.setInterval(function () {
        if(tempx1 >= mjzx - 23.2 + 2.15 *(qp.length-1))
        {
            tempx1 = tempx1 - tempLong;
            myqp[qp.length+1].position.set(tempx1, mjzy + 15.5, mjzz + 31);
            mymjp[qp.length+1].position.set(tempx1, mjzy + 15.5, mjzz + 31);
        }else
        {
            window.clearInterval(fastTranslation);
        }

    }, 16.6);
}

function addChupaiTranslationAndRotate(tempy,tempz,tempx,timeTwoToThree,translationLoctionInArray) {
    var tempBigLong=0.5;//步长
    var tempSmallZRotate=-Math.PI/18;
    var tempY=0;
    var tempZ=0;
    var tempRotation=myqp[qp.length+1].rotation.y;
    var Y=13.0;
    smallRotate=window.setInterval(function () {
        if(tempy<mjzy + 16)
        {
            tempy=tempy+tempBigLong;
            tempz=tempz-tempBigLong;
            myqp[qp.length+1].rotation.y = myqp[qp.length+1].rotation.y+tempSmallZRotate;
            mymjp[qp.length+1].rotation.y = mymjp[qp.length+1].rotation.y+tempSmallZRotate;
            myqp[qp.length+1].position.set(mjzx - 23.2 + 2.15 *(qp.length+1), tempy, tempz);
            mymjp[qp.length+1].position.set(mjzx - 23.2 + 2.15 *(qp.length+1), tempy, tempz);
            window.setTimeout(function () {
                transferParameterMjp(tempy,tempz);
            },timeTwoToThree);
        }else{
            window.clearInterval(smallRotate);

        }
    },100);

    function transferParameterMjp(a,b) {
        tempY=a;
        tempZ=b;

        smallImageRotate=window.setInterval(function () {

            if (tempY > mjzy + 15.5 && tempZ <= mjzy + 31&&myqp[qp.length+1].rotation.y<tempRotation) {
                //if(Y==tempY-tempBigLong) {
                tempY = tempY - tempBigLong;
                tempZ = tempZ + tempBigLong;
                //console.log("finalratation:"+myqp[14].rotation.y);
                myqp[qp.length+1].rotation.y = myqp[qp.length+1].rotation.y - tempSmallZRotate;
                mymjp[qp.length+1].rotation.y = mymjp[qp.length+1].rotation.y - tempSmallZRotate;
                myqp[qp.length+1].position.set(mjzx - 23.2 + 2.15 * translationLoctionInArray, tempY, tempZ);
                mymjp[qp.length+1].position.set(mjzx - 23.2 + 2.15 * translationLoctionInArray, tempY, tempZ);
                // }

            } else {
                window.clearInterval(smallImageRotate);
            }
        },100);
    }

    rotateAndTranslation=window.setInterval(function () {
        if(tempx<=mjzx - 23.2 + 2.15 *(qp.length+1)&&tempx>=(mjzx - 23.2 + 2.15 *finalCurrent))
        {
            tempx=tempx-tempBigLong-0.5;
            myqp[qp.length+1].position.set(tempx, mjzy + 18.5, mjzz + 28);
            mymjp[qp.length+1].position.set(tempx, mjzy + 18.5, mjzz + 28);
        }else{
            window.clearInterval(rotateAndTranslation);
        }
    },20);

}

function addChupaiSmallTranslation(tempx1,translationLoctionInArray,flag) {
    var tempLong=0.15;
    smallTranslation=window.setInterval(function () {
        if(flag==1)
        {
            tempx1 = tempx1 + tempLong;
            if(tempx1 < mjzx - 23.2 + 2.15 *(translationLoctionInArray+1))
            {
                myqp[translationLoctionInArray].position.set(tempx1, mjzy + 15.5, mjzz + 31);
                mymjp[translationLoctionInArray].position.set(tempx1, mjzy + 15.5, mjzz + 31);
            }else
            {
                window.clearInterval(smallTranslation);
            }
        }else
        {
            tempx1 = tempx1 - tempLong;
            if(tempx1 > mjzx - 23.2 + 2.15 *translationLoctionInArray)
            {
                myqp[translationLoctionInArray+1].position.set(tempx1, mjzy + 15.5, mjzz + 31);
                mymjp[translationLoctionInArray+1].position.set(tempx1, mjzy + 15.5, mjzz + 31);
            }else
            {
                window.clearInterval(smallTranslation);
            }
        }


    }, 20);
}


///碰吃胡后的出牌动画
function threeChupaiTranslation(tempx1) {
    var tempLong=0.15;
    fastTranslation=window.setInterval(function () {
        if(tempx1 >= mjzx - 23.2 + 2.15 *(qp.length-1))
        {
            console.log(tempx1+"qp.length:"+qp.length);
            tempx1 = tempx1 - tempLong;
            myqp[qp.length+1].position.set(tempx1, mjzy + 15.5, mjzz + 31);
            mymjp[qp.length+1].position.set(tempx1, mjzy + 15.5, mjzz + 31);
        }else
        {
            window.clearInterval(fastTranslation);
        }

    }, 16.6);
}

function threeChupaiTranslationAndRotate(tempy,tempz,tempx,timeTwoToThree,translationLoctionInArray) {
    var tempBigLong=0.5;//步长
    var tempSmallZRotate=-Math.PI/18;
    var tempY=0;
    var tempZ=0;
    var tempRotation=myqp[qp.length].rotation.y;
    var Y=13.0;
    smallRotate=window.setInterval(function () {
        if(tempy<mjzy + 16)
        {
            tempy=tempy+tempBigLong;
            tempz=tempz-tempBigLong;
            myqp[qp.length].rotation.y = myqp[qp.length].rotation.y+tempSmallZRotate;
            mymjp[qp.length].rotation.y = mymjp[qp.length].rotation.y+tempSmallZRotate;
            myqp[qp.length].position.set(mjzx - 23.2 + 2.15 *(qp.length), tempy, tempz);
            mymjp[qp.length].position.set(mjzx - 23.2 + 2.15 *(qp.length), tempy, tempz);
            window.setTimeout(function () {
                transferParameterMjp(tempy,tempz);
            },timeTwoToThree);
        }else{
            window.clearInterval(smallRotate);

        }
    },100);

    function transferParameterMjp(a,b) {
        tempY=a;
        tempZ=b;

        smallImageRotate=window.setInterval(function () {

            if (tempY > mjzy + 15.5 && tempZ <= mjzy + 31&&myqp[qp.length].rotation.y<tempRotation) {
                //if(Y==tempY-tempBigLong) {
                tempY = tempY - tempBigLong;
                tempZ = tempZ + tempBigLong;
                //console.log("finalratation:"+myqp[14].rotation.y);
                myqp[qp.length].rotation.y = myqp[qp.length].rotation.y - tempSmallZRotate;
                mymjp[qp.length].rotation.y = mymjp[qp.length].rotation.y - tempSmallZRotate;
                myqp[qp.length].position.set(mjzx - 23.2 + 2.15 * translationLoctionInArray, tempY, tempZ);
                mymjp[qp.length].position.set(mjzx - 23.2 + 2.15 * translationLoctionInArray, tempY, tempZ);
                // }

            } else {
                window.clearInterval(smallImageRotate);
            }
        },100);
    }

    rotateAndTranslation=window.setInterval(function () {
        if(tempx<=mjzx - 23.2 + 2.15 *(qp.length)&&tempx>=(mjzx - 23.2 + 2.15 *finalCurrent))
        {
            tempx=tempx-tempBigLong-0.5;
            myqp[qp.length].position.set(tempx, mjzy + 18.5, mjzz + 28);
            mymjp[qp.length].position.set(tempx, mjzy + 18.5, mjzz + 28);
        }else{
            window.clearInterval(rotateAndTranslation);
        }
    },20);

}

function threeChupaiSmallTranslation(tempx1,translationLoctionInArray,flag) {
    var tempLong=0.15;
    smallTranslation=window.setInterval(function () {
        if(flag==1)
        {
            tempx1 = tempx1 + tempLong;
            if(tempx1 < mjzx - 23.2 + 2.15 *(translationLoctionInArray+1))
            {
                myqp[translationLoctionInArray].position.set(tempx1, mjzy + 15.5, mjzz + 31);
                mymjp[translationLoctionInArray].position.set(tempx1, mjzy + 15.5, mjzz + 31);
            }else
            {
                window.clearInterval(smallTranslation);
            }
        }else
        {
            tempx1 = tempx1 - tempLong;
            if(tempx1 > mjzx - 23.2 + 2.15 *translationLoctionInArray)
            {
                myqp[translationLoctionInArray+1].position.set(tempx1, mjzy + 15.5, mjzz + 31);
                mymjp[translationLoctionInArray+1].position.set(tempx1, mjzy + 15.5, mjzz + 31);
            }else
            {
                window.clearInterval(smallTranslation);
            }
        }


    }, 20);
}