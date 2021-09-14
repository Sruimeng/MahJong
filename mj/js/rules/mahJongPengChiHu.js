
function mahJongPeng(qp,getWebSocketMahJong) {
    console.log("碰的数组"+qp);
    qp.sort(function (a, b) {
        return a - b
    });
    for(var j=0;j<qp.length;j++)
    {

        if(getWebSocketMahJong==qp[j]&&getWebSocketMahJong==qp[j+1])
        {
            mahJongPengPaiFlag=true;
            mahjongPengPaiNumber=getWebSocketMahJong;

        }
    }

    if(mahJongPengPaiFlag)
    {
        clickNumber=3;
        mahjongPengChiHuIconOrder();
        // document.getElementById("guo").style.display = "block";
        // document.getElementById("peng").style.display = "block";
        console.log("苏瑞梦clickNumber:"+clickNumber);
    }

}

//麻将吃的算法
function mahJongChi(qp,getWebSocketMahJong) {
    console.log("吃的数组为："+qp);

    qp.sort(function (a, b) {
        return a - b
    });

    for(var j=0;j<qp.length;j++)
    {
        mahjongChiArray[0]=getWebSocketMahJong;

        if(parseInt(qp[j])-parseInt(getWebSocketMahJong)==1)
        {
            for(var i=1;i<5;i++)
            {
                if(parseInt(qp[j+i])-parseInt(getWebSocketMahJong)==2)
                {
                    mahjongChiFlag=true;
                    mahjongChiNumberArray[1]=qp[j];
                    mahjongChiNumberArray[2]=qp[j+i];
                    mahjongChiNumberArray[0]=getWebSocketMahJong;
                    mahjongChiNumberArray1[0]=qp[j];
                    mahjongChiNumberArray1[1]=qp[j+i];
                    mahjongChiNumberArray1[2]=getWebSocketMahJong;
                }
            }
        }else if(parseInt(qp[j])-parseInt(getWebSocketMahJong)==-1)
        {
            for(var i=1;i<5;i++)
            {
                if(parseInt(qp[j+i])-parseInt(getWebSocketMahJong)==1)
                {
                    mahjongChiFlag=true;
                    mahjongChiNumberArray[0]=qp[j];
                    mahjongChiNumberArray[2]=qp[j+i];
                    mahjongChiNumberArray[1]=getWebSocketMahJong;
                    mahjongChiNumberArray1[0]=qp[j];
                    mahjongChiNumberArray1[1]=qp[j+i];
                    mahjongChiNumberArray1[2]=getWebSocketMahJong;
                }
            }
        }else if(parseInt(qp[j])-parseInt(getWebSocketMahJong)==-2)
        {
            for(var i=1;i<5;i++)
            {
                if(parseInt(qp[j+i])-parseInt(getWebSocketMahJong)==-1)
                {
                    mahjongChiFlag=true;
                    mahjongChiNumberArray[0]=qp[j];
                    mahjongChiNumberArray[1]=qp[j+i];
                    mahjongChiNumberArray[2]=getWebSocketMahJong;
                    mahjongChiNumberArray1[0]=qp[j];
                    mahjongChiNumberArray1[1]=qp[j+i];
                    mahjongChiNumberArray1[2]=getWebSocketMahJong;
                }
            }
        }

    }
    otherChiNumber=getWebSocketMahJong;
    console.log("mahjongChiNumberArray:"+mahjongChiNumberArray);
    console.log("mahjongChiNumberArray1:"+mahjongChiNumberArray1);

    //
    if(mahjongChiFlag)
    {
        clickNumber=3;
        mahjongPengChiHuIconOrder();
        console.log("苏瑞梦clickNumber:"+clickNumber);
        // document.getElementById("guo").style.display = "block";
        // document.getElementById("chi").style.display = "block";

    }


}

//判断是否是杠
function mahJongGang(qp,getWebSocketMahJong) {
    qp.sort(function (a, b) {
        return a - b
    });
    for(var j=0;j<qp.length;j++)
    {
        console.log("qp[j]:"+qp[j]+"|||getWebSocketMahJong:"+getWebSocketMahJong);
        if(getWebSocketMahJong==qp[j]&&getWebSocketMahJong==qp[j+1]&&getWebSocketMahJong==qp[j+2])
        {
            mahjongGangFlag=true;
            mahjongGangNumber=getWebSocketMahJong;
        }

        //
        if(mahjongGangFlag)
        {
            clickNumber=3;
            mahjongPengChiHuIconOrder();
            // document.getElementById("guo").style.display = "block";
            // document.getElementById("gang").style.display = "block";
        }
    }
}

function mahjongPengChiHuIconOrder() {
    mouseClickFlag=false;
    if(qpHuPaiFlag)
    {
        document.getElementById("guo").style.display = "block";
        document.getElementById("hu").style.display = "block";
        if(mahJongPengPaiFlag)
        {
            document.getElementById("guo").style.display = "block";
            document.getElementById("peng1").style.display = "block";
            if(mahjongChiFlag)
            {
                document.getElementById("guo").style.display = "block";
                document.getElementById("chi2").style.display = "block";
                if(mahjongGangFlag)
                {
                    document.getElementById("guo").style.display = "block";
                    document.getElementById("gang3").style.display = "block";
                }
            }else
            {
                if(mahjongGangFlag)
                {
                    document.getElementById("guo").style.display = "block";
                    document.getElementById("gang2").style.display = "block";
                }
            }
        }else
        {
            if(mahjongChiFlag)
            {
                document.getElementById("guo").style.display = "block";
                document.getElementById("chi1").style.display = "block";
                if(mahjongGangFlag)
                {
                    document.getElementById("guo").style.display = "block";
                    document.getElementById("gang2").style.display = "block";
                }
            }else
            {
                if(mahjongGangFlag)
                {
                    document.getElementById("guo").style.display = "block";
                    document.getElementById("gang1").style.display = "block";
                }
            }
        }
    }else
    {
        if(mahJongPengPaiFlag)
        {
            document.getElementById("guo").style.display = "block";
            document.getElementById("peng").style.display = "block";
            if(mahjongChiFlag)
            {
                document.getElementById("guo").style.display = "block";
                document.getElementById("chi1").style.display = "block";
                if(mahjongGangFlag)
                {
                    document.getElementById("guo").style.display = "block";
                    document.getElementById("gang2").style.display = "block";
                }
            }else
            {
                if(mahjongGangFlag)
                {
                    document.getElementById("guo").style.display = "block";
                    document.getElementById("gang1").style.display = "block";
                }
            }
        }else
        {
            if(mahjongChiFlag)
            {
                document.getElementById("guo").style.display = "block";
                document.getElementById("chi").style.display = "block";
                if(mahjongGangFlag)
                {
                    document.getElementById("guo").style.display = "block";
                    document.getElementById("gang1").style.display = "block";
                }
            }else
            {

            }
        }
    }
}




