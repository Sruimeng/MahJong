
var mahjongHuCartoonTempx;
var mahjongHuCartoonTempy;
var mahjongHuCartoonTempz;

function mahjongHuManager(majongTempNumber) {
    console.log("majongTempNumber:"+majongTempNumber);
    //停止计时
    stopChupaiTime();
    stopFinalStartTime();
    //播放音效
    mahjongHuAudio.play();
    scene.remove(myqp[14]);
    scene.remove(mymjp[14]);
    scene.remove(feipai[mjpCounter-1]);
    scene.remove(feipaip[mjpCounter-1]);
    mjpCounter--;
    scene.remove(label1);
    console.log("tempdirection:"+tempdirection+"|||majongTempNumber:"+majongTempNumber);
    if(tempdirection==0)
    {
        if(mahjongHupaiPlayer==1)
        {
            majongPai[1].position.set(mjzx-7.5,mjzy+8.5,mjzz+10);
            majongPaidi[1].position.set(mjzx-7.5,mjzy+8.5,mjzz+10);
            majongPai[1].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[1]);
            scene.add(majongPaidi[1]);
            mahjongHuCartoonTempx=mjzx-7.5;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+10;
        }else if(mahjongHupaiPlayer==2)
        {
            majongPai[2].position.set(mjzx-10,mjzy+8.5,mjzz+7.5);
            majongPaidi[2].position.set(mjzx-10,mjzy+8.5,mjzz+7.5);
            majongPai[2].rotation.y=Math.PI/2;
            majongPaidi[2].rotation.y=Math.PI/2;
            majongPai[2].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[2]);
            scene.add(majongPaidi[2]);
            mahjongHuCartoonTempx=mjzx-10;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+7.5;
        }else if(mahjongHupaiPlayer==3)
        {
            majongPai[3].position.set(mjzx-12.5,mjzy+8.5,mjzz+10);
            majongPaidi[3].position.set(mjzx-12.5,mjzy+8.5,mjzz+10);
            majongPai[3].rotation.y=-Math.PI;
            majongPaidi[3].rotation.y=-Math.PI;
            majongPai[3].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[3]);
            scene.add(majongPaidi[3]);
            mahjongHuCartoonTempx=mjzx-12.5;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+10;

        }
    }else if(tempdirection==1)
    {
        if(mahjongHupaiPlayer==0)
        {
            majongPai[3].position.set(mjzx-12.5,mjzy+8.5,mjzz+10);
            majongPaidi[3].position.set(mjzx-12.5,mjzy+8.5,mjzz+10);
            majongPai[3].rotation.y=-Math.PI;
            majongPaidi[3].rotation.y=-Math.PI;
            majongPai[3].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[3]);
            scene.add(majongPaidi[3]);
            mahjongHuCartoonTempx=mjzx-12.5;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+10;
        }else if(mahjongHupaiPlayer==2)
        {
            majongPai[1].position.set(mjzx-7.5,mjzy+8.5,mjzz+10);
            majongPaidi[1].position.set(mjzx-7.5,mjzy+8.5,mjzz+10);
            majongPai[1].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[1]);
            scene.add(majongPaidi[1]);
            mahjongHuCartoonTempx=mjzx-7.5;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+10;
        }else if(mahjongHupaiPlayer==3)
        {
            majongPai[2].position.set(mjzx-10,mjzy+8.5,mjzz+7.5);
            majongPaidi[2].position.set(mjzx-10,mjzy+8.5,mjzz+7.5);
            majongPai[2].rotation.y=Math.PI/2;
            majongPaidi[2].rotation.y=Math.PI/2;
            majongPai[2].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[2]);
            scene.add(majongPaidi[2]);
            mahjongHuCartoonTempx=mjzx-10;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+7.5;
        }
    }else if(tempdirection==2)
    {
        if(mahjongHupaiPlayer==0)
        {
            majongPai[2].position.set(mjzx-10,mjzy+8.5,mjzz+7.5);
            majongPaidi[2].position.set(mjzx-10,mjzy+8.5,mjzz+7.5);
            majongPai[2].rotation.y=Math.PI/2;
            majongPaidi[2].rotation.y=Math.PI/2;
            majongPai[2].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[2]);
            scene.add(majongPaidi[2]);
            mahjongHuCartoonTempx=mjzx-10;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+7.5;

        }else if(mahjongHupaiPlayer==1)
        {
            majongPai[3].position.set(mjzx-12.5,mjzy+8.5,mjzz+10);
            majongPaidi[3].position.set(mjzx-12.5,mjzy+8.5,mjzz+10);
            majongPai[3].rotation.y=-Math.PI;
            majongPaidi[3].rotation.y=-Math.PI;
            majongPai[3].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[3]);
            scene.add(majongPaidi[3]);
            mahjongHuCartoonTempx=mjzx-12.5;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+10;
        }else if(mahjongHupaiPlayer==3)
        {
            majongPai[1].position.set(mjzx-7.5,mjzy+8.5,mjzz+10);
            majongPaidi[1].position.set(mjzx-7.5,mjzy+8.5,mjzz+10);
            majongPai[1].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[1]);
            scene.add(majongPaidi[1]);
            mahjongHuCartoonTempx=mjzx-7.5;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+10;
        }
    }else if(tempdirection==3)
    {
        if(mahjongHupaiPlayer==0)
        {
            majongPai[1].position.set(mjzx-7.5,mjzy+8.5,mjzz+10);
            majongPaidi[1].position.set(mjzx-7.5,mjzy+8.5,mjzz+10);
            majongPai[1].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[1]);
            scene.add(majongPaidi[1]);
            mahjongHuCartoonTempx=mjzx-7.5;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+10;
        }else if(mahjongHupaiPlayer==1)
        {
            majongPai[2].position.set(mjzx-10,mjzy+8.5,mjzz+7.5);
            majongPaidi[2].position.set(mjzx-10,mjzy+8.5,mjzz+7.5);
            majongPai[2].rotation.y=Math.PI/2;
            majongPaidi[2].rotation.y=Math.PI/2;
            majongPai[2].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[2]);
            scene.add(majongPaidi[2]);
            mahjongHuCartoonTempx=mjzx-10;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+7.5;
        }else if(mahjongHupaiPlayer==2)
        {
            majongPai[3].position.set(mjzx-12.5,mjzy+8.5,mjzz+10);
            majongPaidi[3].position.set(mjzx-12.5,mjzy+8.5,mjzz+10);
            majongPai[3].rotation.y=-Math.PI;
            majongPaidi[3].rotation.y=-Math.PI;
            majongPai[3].children[0].material =mjpmesh[majongTempNumber];
            scene.add(majongPai[3]);
            scene.add(majongPaidi[3]);
            mahjongHuCartoonTempx=mjzx-12.5;
            mahjongHuCartoonTempy=mjzy+8.5;
            mahjongHuCartoonTempz=mjzz+10;

        }
    }
    addHuSpite(mahjongHuCartoonTempx,mahjongHuCartoonTempy,mahjongHuCartoonTempz);

}