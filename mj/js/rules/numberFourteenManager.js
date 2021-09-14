function numberFourteenManager() {
    //当上个玩家数组长度为13时，其他玩家对当前玩家的摆放
    if(otherPlayerIntArrayLength==13)
    {
        if(tempdirection==0)
        {
            if(otherPlayer==1)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx + 15, mjzy + 8.5, mjzz - 5 - 2.1 * 2);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;
            }else if(otherPlayer==2)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx+2-2.1*14,mjzy+8.5,mjzz-15);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;
            }else if(otherPlayer==3)
            {
                scene.remove(ontherPaidi);
                scene.remove(ontherPaimian);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx-35,mjzy+8.5,mjzz-5+2.1*14);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;
            }

        }else if(tempdirection==1)
        {
            if(otherPlayer==0)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx-35,mjzy+8.5,mjzz-5+2.1*14);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;

            }else if(otherPlayer==2)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx + 15, mjzy + 8.5, mjzz - 5 - 2.1 * 2);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;

            }else if(otherPlayer==3)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx+2-2.1*14,mjzy+8.5,mjzz-15);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;
            }
        }else if(tempdirection==2)
        {
            if(otherPlayer==0)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx+2-2.1*14,mjzy+8.5,mjzz-15);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;
            }else if(otherPlayer==1)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx-35,mjzy+8.5,mjzz-5+2.1*14);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;

            }else if(otherPlayer==3)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx + 15, mjzy + 8.5, mjzz - 5 - 2.1 * 2);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;

            }
        }else if(tempdirection==3)
        {
            if(otherPlayer==0)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx + 15, mjzy + 8.5, mjzz - 5 - 2.1 * 2);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;
            }else if(otherPlayer==1)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx+2-2.1*14,mjzy+8.5,mjzz-15);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;
            }else if(otherPlayer==2)
            {
                scene.remove(otherObj);
                scene.remove(otherObj);
                otherObj = fapai[otherPlayer];
                otherObj.position.set(mjzx-35,mjzy+8.5,mjzz-5+2.1*14);
                scene.add(otherObj);
                fapaiflag = true;
                mouseClickFlag=false;
            }
        }
    }

}