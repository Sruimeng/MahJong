
function addWebSocket() {

    if (!window.WebSocket)
    {
        window.WebSocket = window.MozWebSocket;
    }
    if (window.WebSocket)
    {
        socket = new WebSocket(socketSrc);
        socket.binaryType = "arraybuffer" ;
        socket.onmessage = function(event)
        {
            if(!(event.data instanceof ArrayBuffer))
            {
                console.log(event.data) ;
            }
            else
            {
                processData(event.data);
            }
        };
        socket.onopen = function(event)
        {
            console.log("打开连接!");
        };
        socket.onclose = function(event)
        {
            console.log("连接断开!");
        };
    } else
    {
        alert("你的浏览器不支持 WebSocket！");
    }
    if(tempDirectionFlag)
    {
        window.setTimeout(function () {
            send("requestDirection");
        },350);
        console.log(tempDirectionFlag);
    }


}

function send(message)
{
    if (!window.WebSocket)
    {
        return;
    }
    if (socket.readyState == WebSocket.OPEN)
    {
        console.log("message内容为："+message);
        messageResolution(socket,message);
    } else
    {
        alert("连接没有开启!");
    }
}





function sendInt(socket,val)
{
    var b = new ArrayBuffer(8);
    var i = new Int32Array(b);
    i[0]=1;
    i[1]=val;
    socket.send(b);
}

function sendFloat(socket,val)
{
    var b = new ArrayBuffer(8);
    var i = new Int32Array(b);
    var f = new Float32Array(b);
    i[0]=2;
    f[1]=val;
    socket.send(b);
}

// 字符串转为ArrayBuffer对象，参数为字符串
function sendString(socket,str)
{
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(str.length*2+4);
    //字符串类型号3
    var buf32View = new Uint32Array(buf);
    buf32View[0]=3;
    //字符串数据字节（每个字符2个字节）
    var buf16View = new Uint16Array(buf);
    for (var i=0,strLen=str.length; i<strLen; i++)
    {
        buf16View[i+2] = str.charCodeAt(i);
    }
    socket.send(buf);
}

// 字符串转为ArrayBuffer对象，参数为字符串和Int类型
function sendStringandInt(socket,str,int)
{
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(str.length*2+8);
    //字符串类型号3
    var buf32View = new Uint32Array(buf);
    buf32View[0]=4;
    buf32View[1]=int;
    //字符串数据字节（每个字符2个字节）
    var buf16View = new Uint16Array(buf);
    for (var i=0,strLen=str.length; i<strLen; i++)
    {
        buf16View[i+4] = str.charCodeAt(i);

    }
    socket.send(buf);
}



function sendStringAndIntAndInt(socket,str,inta,intb) {
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(str.length*2+12);
    var buf32View=new Uint32Array(buf);
    buf32View[0]=5;
    buf32View[1]=inta;
    buf32View[2]=intb;
    var buf16View = new Uint16Array(buf);
    for (var i=0,strLen=str.length; i<strLen; i++)
    {
        buf16View[i+6] = str.charCodeAt(i);

    }
    socket.send(buf);
}

// 字符串转为ArrayBuffer对象，参数为字符串和Int类型
function fiveInt(socket,int0,int1,int2,int3,int4)
{
    console.log("int0:"+int0+"|int:"+int1+"|"+int2+"|"+int3+"|"+int4+"|");
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(24);
    //字符串类型号3
    var buf32View = new Int32Array(buf);
    buf32View[0]=6;
    buf32View[1]=int0;
    buf32View[2]=int1;
    buf32View[3]=int2;
    buf32View[4]=int3;
    buf32View[5]=int4;
    socket.send(buf);
}


// 字符串转为ArrayBuffer对象，参数为字符串和Int类型
function ThreeInt(socket,int0,int1,int2)
{
    console.log("int0:"+int0+"|int:"+int1+"|"+int2+"|");
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(16);
    //字符串类型号3
    var buf32View = new Int32Array(buf);
    buf32View[0]=7;
    buf32View[1]=int0;
    buf32View[2]=int1;
    buf32View[3]=int2;
    socket.send(buf);
}

// 字符串转为ArrayBuffer对象，参数为字符串和Int类型
function HuInt(socket,int0,int1,int2)
{
    console.log("int0:"+int0+"|int:"+int1+"|"+int2+"|");
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(16);
    //字符串类型号3
    var buf32View = new Int32Array(buf);
    buf32View[0]=8;
    buf32View[1]=int0;
    buf32View[2]=int1;
    buf32View[3]=int2;
    socket.send(buf);
}

// 字符串转为ArrayBuffer对象，参数为字符串和Int类型
function requsetGangNumberInt(socket,int0,int1,int2)
{
    console.log("int0:"+int0+"|int:"+int1+"|"+int2+"|");
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(16);
    //字符串类型号3
    var buf32View = new Int32Array(buf);
    buf32View[0]=8;
    buf32View[1]=int0;
    buf32View[2]=int1;
    buf32View[3]=int2;
    socket.send(buf);
}

//发送当前玩家数组长度
function sendTempPlayerIntLength(socket,int0,int1,int2)
{
    console.log("int0:"+int0+"|int:"+int1+"|"+int2+"|");
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(16);
    //字符串类型号3
    var buf32View = new Int32Array(buf);
    buf32View[0]=9;
    buf32View[1]=int0;
    buf32View[2]=int1;
    buf32View[3]=int2;
    socket.send(buf);
}

//发送当前玩家数组长度
function sendChiNumber(socket,int0,int1,int2)
{
    console.log("int0:"+int0+"|int:"+int1+"|"+int2+"|");
    //总字节数为字符串类型整数4字节加字符串字符数乘以2个字节（每个字符16比特）
    var buf = new ArrayBuffer(16);
    //字符串类型号3
    var buf32View = new Int32Array(buf);
    buf32View[0]=11;
    buf32View[1]=int0;
    buf32View[2]=int1;
    buf32View[3]=int2;
    socket.send(buf);
}



// ArrayBuffer转为字符串，参数为ArrayBuffer对象
function ab2str(buf)
{
    var ia=new Uint16Array(buf);
    var str="";
    for(var i=0;i<ia.length;i++)
    {
        str=str+String.fromCharCode(ia[i]);
    }
    return str;
}

//获取到的内容
function processData(ab)
{
    //获取显示内容用的文本区
    //var ta = document.getElementById('taLog');
    //取出返回数据的前4个字节
    //转化为整数，获得类型编号
    var type = new Int32Array(ab.slice(0,4));
    if(type[0]==3)
    {//字符串
        //获取字符串字节
        var strVal=ab2str(ab.slice(4));
        console.log("获取字符串字节");
        stringResolution(strVal);
        qpString=strVal;
        //qp=stringToInt(strVal);
        //ta.value = ta.value + "\n收到字符串>"+strVal;
    }
    else if(type[0]==1)
    {//整数
        var intVal=new Int32Array(ab.slice(4));
        console.log(intVal[0]+"||返回值为");
        intResolution(intVal[0]);
        //ta.value = ta.value + "\n收到整数>"+intVal[0];
    }
    else if(type[0]==2)
    {//浮点数
        var floatVal=new Float32Array(ab.slice(4));
        //ta.value = ta.value + "\n收到浮点数>"+floatVal[0];
    }
}

