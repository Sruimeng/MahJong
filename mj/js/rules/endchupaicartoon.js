var smallTranslation;     //小距离平移的计时器ID
/*   ....        ....  */
/*  .  .        .  .   */
/* .  .        .  .    */
/*....        ....     */
/*                     */
/*(3) <- （2）  <-  (1)*/
/*                     */
/* ....       ....     */
/* .  .       .  .     */
/* .  .       .  .     */
/* ....       ....     */
var smallRotate;          //小距离旋转的计时器ID图中（1）所示
var rotateAndTranslation;//小距离平移的计时器ID如图中(2)所示
var smallImageRotate;    //小距离镜像旋转的计时器ID如图中（3）所示
var fastTranslation;     //快速直接平移的计时器ID
function chupaiTranslation(tempx1) {
    var tempLong=0.15;
    fastTranslation=window.setInterval(function () {
        if(tempx1 >= mjzx - 23.2 + 2.15 *12)
        {
            tempx1 = tempx1 - tempLong;
            myqp[14].position.set(tempx1, mjzy + 15.5, mjzz + 31);
            mymjp[14].position.set(tempx1, mjzy + 15.5, mjzz + 31);
        }else
        {
            window.clearInterval(fastTranslation);
        }

    }, 16.6);
}

function chupaiTranslationAndRotate(tempy,tempz,tempx,timeTwoToThree,translationLoctionInArray) {
    var tempBigLong=0.5;
    var tempSmallZRotate=-Math.PI/18;
    var tempY=0;
    var tempZ=0;
    var tempRotation=myqp[14].rotation.y;
    var Y=13.0;
    smallRotate=window.setInterval(function () {
        if(tempy<mjzy + 16)
        {
            tempy=tempy+tempBigLong;
            tempz=tempz-tempBigLong;
            myqp[14].rotation.y = myqp[14].rotation.y+tempSmallZRotate;
            mymjp[14].rotation.y = mymjp[14].rotation.y+tempSmallZRotate;
            myqp[14].position.set(mjzx - 23.2 + 2.15 *14, tempy, tempz);
            mymjp[14].position.set(mjzx - 23.2 + 2.15 *14, tempy, tempz);
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

            if (tempY > mjzy + 15.5 && tempZ <= mjzy + 31&&myqp[14].rotation.y<tempRotation) {
                //if(Y==tempY-tempBigLong) {
                    tempY = tempY - tempBigLong;
                    tempZ = tempZ + tempBigLong;
                    //console.log("finalratation:"+myqp[14].rotation.y);
                    myqp[14].rotation.y = myqp[14].rotation.y - tempSmallZRotate;
                    mymjp[14].rotation.y = mymjp[14].rotation.y - tempSmallZRotate;
                    myqp[14].position.set(mjzx - 23.2 + 2.15 * translationLoctionInArray, tempY, tempZ);
                    mymjp[14].position.set(mjzx - 23.2 + 2.15 * translationLoctionInArray, tempY, tempZ);
               // }

            } else {
                window.clearInterval(smallImageRotate);
            }
            },100);
    }
    
    rotateAndTranslation=window.setInterval(function () {
        if(tempx<=mjzx - 23.2 + 2.15 *14&&tempx>=(mjzx - 23.2 + 2.15 *finalCurrent))
        {
            tempx=tempx-tempBigLong-0.5;
            myqp[14].position.set(tempx, mjzy + 18.5, mjzz + 28);
            mymjp[14].position.set(tempx, mjzy + 18.5, mjzz + 28);
        }else{
            window.clearInterval(rotateAndTranslation);
        }
    },20);

}

function chupaiSmallTranslation(tempx1,translationLoctionInArray,flag) {
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