function addMaJongHuPaiCartoon() {
    stopChupaiTime();
    stopFinalStartTime();
    console.log("majongHuFromThere"+majongHuFromThere);
    console.log("mahJongHuPaiCartoonFlag:"+mahJongHuPaiCartoonFlag);
    qpHuPaiFlag=false;
    if(majongHuFromThere==0)//自摸胡
    {
        mahjongZimoAudio.play();
        scene.remove(feipai[mjpCounter-1]);
        scene.remove(feipaip[mjpCounter-1]);
        mjpCounter--;
        scene.remove(myqp[14]);
        scene.remove(mymjp[14]);
        scene.remove(label1);
    }else if(majongHuFromThere==1)
    {
        mahjongHuAudio.play();
        scene.remove(myqp[14]);
        scene.remove(mymjp[14]);
        scene.remove(feipai[mjpCounter-1]);
        scene.remove(feipaip[mjpCounter-1]);
        mjpCounter--;
        scene.remove(label1);
    }

    majongPai[0].position.set(mjzx-10,mjzy+8.5,mjzz+12.5);
    majongPaidi[0].position.set(mjzx-10,mjzy+8.5,mjzz+12.5);
    majongPai[0].rotation.y=-Math.PI/2;
    majongPaidi[0].rotation.y=-Math.PI/2;
    majongPai[0].children[0].material =mjpmesh[majongTempNumber];
    scene.add(majongPai[0]);
    scene.add(majongPaidi[0]);

    mySprite();
}

function mySprite() {
    if(mahJongHuPaiCartoonFlag)
    {
        if(majongHuFromThere==0||majongHuFromThere==1)
        {
            for(var i=0;i<starArray.length;i++)
            {
                var tempColor=getColor();

                var tempRamdon=parseInt(Math.random()*9);
                starArray[i].rotation.x=Math.PI/tempRamdon;
                starArray[i].rotation.y=Math.PI/tempRamdon;
                starArray[i].position.x=mjzx-10+ 2*Math.cos ( theta-i);
                starArray[i].position.y=mjzy+8.5+(theta-i)/30;
                starArray[i].position.z=mjzz+12.5+2*Math.sin ( theta-i);
                starArray[i].children[1].material =new THREE.MeshPhongMaterial({ color: tempColor });//new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('textures/green.jpg')});
                starArray[i].children[0].material =new THREE.MeshPhongMaterial({ color: tempColor });//new THREE.MeshLambertMateri
                scene.add(starArray[i]);
                if(theta==360)
                {
                    scene.remove(starArray[i]);
                    theta=0;
                }
            }
        }

        for ( var i = 0; i < 10; i++ ) {
            particle = new THREE.Sprite( material );
            initParticle( particle, i );
            scene.add( particle );
        }

        setTimeout(function () {
            TWEEN.update();
            requestAnimationFrame(mySprite);
            mahjongHuPaiCartoonTime=mahjongHuPaiCartoonTime+50;
        },50);
        if(mahjongHuPaiCartoonTime>2900)
        {
            for(var j=0;j<starArray.length;j++)
            {
                scene.remove(starArray[j]);
            }
            send(resetGame);
            mahjongBackgroundAudio.pause();
            mahjongGameOverAudio.play();
            document.getElementById("gameover").style.display = "block";
            document.getElementById("resetgame").style.display = "block";
            mahJongHuPaiCartoonFlag=false;
        }

        setTimeout(function () {
            theta=theta+30;
        },250);
    }

}