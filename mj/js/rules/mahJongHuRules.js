
function maJongHu(qp,getWebSocketMahJong) {
    qp.push(getWebSocketMahJong);
    qp.sort(function (a, b) {
        return a - b
    });
    temp1qp=qp.slice(0);
    for(var i=0;i<qp.length;i++)
    {
        if(parseInt(temp1qp[i])===parseInt(temp1qp[i+1]))
        {
            //console.log("i:"+i+"|||||qp[i]:"+qp[i]+"||||||qp[i+1]:"+qp[i+1]);
            delete qp[i];
            delete qp[i+1];
            qp=qp.filter(function(n){return n});
            tempqp=qp.slice(0);
            qp.length=0;
            qp=temp1qp.slice(0);
            maJongShunOrKe(tempqp,getWebSocketMahJong);
        }
    }
}

function maJongShunOrKe(tempqp,getWebSocketMahJong) {
    // noinspection JSAnnotator

    if(tempqp.length==0)
    {
        maJongHuCount++;
        if(maJongHuCount==1)
        {
            majongTempNumber=getWebSocketMahJong;
            qpHuPaiFlag=true;
            mahjongPengChiHuIconOrder();
            console.log("qpHuPaiFlag:"+qpHuPaiFlag+"||||majongTempNumber:"+getWebSocketMahJong);
        }
        return;
    }else{
        mouseClickFlag=false;
    }

    for(var j=1;j<tempqp.length;j++)
    {
        if(parseInt(tempqp[j])==parseInt(tempqp[0])+1)
        {
            for(var k=1;k<5;k++)
            {
                if(parseInt(tempqp[j+k])==parseInt(tempqp[0])+2)
                {
                    delete tempqp[0];
                    delete tempqp[j];
                    delete tempqp[j+k];
                    tempqp=tempqp.filter(function(n){return n});
                    maJongShunOrKe(tempqp,getWebSocketMahJong);
                }
            }
        }
    }
    if(tempqp.length!=0)
    {
        for(var j=1;j<tempqp.length;j++)
        {
            if(parseInt(tempqp[j])==parseInt(tempqp[0])&&parseInt(tempqp[j+1])==parseInt(tempqp[0]))
            {
                delete tempqp[0];
                delete tempqp[j];
                delete tempqp[j+1];
                tempqp=tempqp.filter(function(n){return n});
                maJongShunOrKe(tempqp,getWebSocketMahJong);
            }

        }

    }
}