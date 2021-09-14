//**********开局变量*********//
var socketSrc="ws://localhost:11111/ws";
var cy=70;
var cz=65;
var cTime;
var tempDirectionFlag=true;
var player1FirstIn=true;//玩家1是否第一次进入游戏
var feipaiFlag=true;
var continueYesOrNoFlag=true;//能否继续发牌
var nextPlayerAndDirectionFlag=true;//判断下一个玩家是谁
var qpHuPaiFlag=false;//判断是否胡牌
var mahJongHuPaiCartoonFlag=true;//胡牌动画结束标志位
var mahJongPengPaiFlag=false;//碰牌标志位
var mahjongChiFlag=false;//吃牌标志位
var mahJongPengPaiCartoonFlag=true;//碰牌动画结束标志位
var mahjongGangFlag=false;
var chupaiTimeFlag=true;
var waitTimeFlag=true;

var maJongHuCount=0;//胡牌次数
var mjzx=7;//麻将桌X坐标
var mjzy=-5;//麻将桌Y坐标
var mjzz=-10;//麻将桌Z坐标
var isInGame=false;//开始游戏标志位
var scene = new THREE.Scene();//新建场景
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);//新建摄像机
var meshMaterial = new THREE.MeshPhongMaterial();//新建麻将牌的材质
var renderer;
var clickChupaiFlag=true;
var myMahjongNumber;
//*********碰吃杠*********//
var mahjongPengChiGangTemp0=12;
var mahjongPengChiGangTemp1=12;
var mahjongPengChiGangTemp2=12;
var mahjongPengChiGangTemp3=12;
var mahjongTempMahjong1="null";
//*********吃牌*********//
var mahjongChiArray=new Array(3);//吃牌的测试数组
var mahjongChiNumberArray=new Array(3);//吃牌的数组
var mahjongChiNumberArray=new Array(3);//吃牌的数组
var mahjongChiNumberArray1=new Array(3);//吃牌的数组
var mahjongOhtherChi=5;
//*********碰牌*********//
var mahjongPengPaiNumber;
var mahjongPengTempPlayer;//碰牌的玩家是谁
var mahjongPengTempNumber;//碰牌的牌的牌面
var mahjongPengPaiTemp0=0;//碰牌数组位置
var mahjongPengPaiTemp1=0;
var mahjongPengPaiTemp2=0;
var mahjongPengPaiTemp3=0;
var mahjongPengPaiArray0=new Array(12);
var mahjongPengPaiArray1=new Array(12);
var mahjongPengPaiArray2=new Array(12);
var mahjongPengPaiArray3=new Array(12);
var mahjongPengPaiArrayp0=new Array(12);
var mahjongPengPaiArrayp1=new Array(12);
var mahjongPengPaiArrayp2=new Array(12);
var mahjongPengPaiArrayp3=new Array(12);
//*********胡牌粒子系统*********//
var spriteMoveFlag=true;
var theta=0;
var starArray=new Array(60);
var star;
var mahjongHuPaiCartoonTime=0;
var majongPaidi=new Array(4);
var majongPai=new Array(4);
var majongHuFromThere=5;//胡牌的麻将来自哪里0代表自胡 1代表吃胡
//*********杠*********//
var mahjongGangNumber;
var requestGangNumber;
//*********胡牌*********//
var tempqp="";
var temp1qp;
var mahjongHupaiPlayer;
var majongTempNumber=0;
var qpHuPaiFlag=false;
//**********时间*********//
var resetArrangePengChiHuFlag=false;
var resetEndArrangePengChiHuFlag=true;
var waitTimeFlag=true;
var timeFlag=false;
var playerFapaiFlag=false;
var playerTime=new THREE.PlaneGeometry(2,4,1,1);//创建时间容器
var playerTimeMaterial=new THREE.MeshBasicMaterial();
var playerWaitTimeLabel;
var playerTime1=new THREE.PlaneGeometry(2,4,1,1);//创建时间容器
var playerTimeMaterial1=new THREE.MeshBasicMaterial();
var playerTimeLabel;
var initTimeImgArray=new Array(9);
var initWaitTimeImgArray=new Array(5);
var timeBackgroundImg;
var playTimeStartFlag=true;
var playWaitTimeStartFlag=true;
//**********方向*********//
var directionimg=new Array(5);//方向图片数组
var tempdirection;//起牌0为东1为南2为西3为呗
var nextDirection;//游戏过程中的方向0自己，1下家，2对家，3上家
//**********连接服务器*********//
var socket;//接口变量
var socketLinkFlag=false;//web连接服务器标志位
var container, stats;
var playerslike_Number;//连接服务器的人数
//**********发牌*********//
var ontherPaidi;
var ontherPaimian;
var fapai=new Array(4);//发的牌是啥0为自己1为下家2为再下架3为上家
var fapaip;//发的牌是啥
var fapainumber;
var fapaiflag=false;//发牌开关，true发牌false不发牌
var endFaPaiFlag=false;//结束发牌开关,开始动画
var resettingQpFlag=false;//重新重置起牌的数组的标志位，
var clickNumIsOrNo=0;
var finalChupaiMahJong;
var firstInFaPai=true;//有没有第十四张牌
var qpArray=new Array(13);
//**********与服务器连接收到返回值的变量***********//
var getWebSocketMahJong=0;//从服务器收到的上一个玩家出的牌的变量
var getWebSocketTempDirection;//从服务器收到的上一个玩家是谁
//**********鼠标点击******//
var clickMouseNum=0;
var tempClickMouseNum;
var mouseClickFlag=true;
//**********桌面上的弃牌池***********//
var zeroCount=0;
var feipaiDirection=5;
var feipai=new Array(60);
var feipaip=new Array(60);
//**********动画*********//
var meshTempMj=0;//当前发的麻将的ID,后续由服务器发送
var firstInEndCartoonFlag=true;//第一次初始化动画 *********
var tempx;//X坐标
var tempy;//Y坐标
var tempz;//Z坐标
var tempx14;//第14张牌的X坐标
var timeTwoToThree;//第二个动画和第三个动画之间的间隔
var timeFast;//插入位置在最后，插入的牌的时间
var timeSlow;//普通移动牌的时间
var mjLocationInArray;//插入的牌在数组中的位置
var chumjLoctionInArray;//出牌的麻将牌在数组里的位置
var translationLoctionInArray;//要进行小范围移动的牌的ID
//**********其他玩家信息*********//
var otherChiNumber=0;
var clickNumber=0;//1为13张牌时的2为碰吃胡后的牌3为
var ohtherClickFlag=false;
var otherPlayer=5;
var otherPlayerIntArrayLength=0;
var otherObj;
var ohterMahjongTrueFlag=false;
//**********当前出的牌********//
var finalCurrent;//当前出的牌ID
var qpString;//起牌数组的字符串
//**********光照*********//
var controls;
var light = new THREE.SpotLight(0xffffff);//新建聚光灯
var qp=new Array(13);//起始牌数组
var qpInt=new Array(13);
var initflag=false;//初始化标志位
var liftqp=new Array(13);
var rightqp=new Array(13);
var upqp=new Array(13);
var myqp=new Array(15);
var mymjp=new Array(15);//麻将牌面模型数组
var mjpmesh=new Array(34);//麻将牌面纹理数组
//**********音乐*********//
var mahjongMusicSource=new Array(34);//麻将音乐数组
var mahjongMusicAudio=new Array(34);//麻将音乐数组
var mahjongChiAudio;//吃音效
var mahjongChiSource;
var mahjongPengAudio;//碰音效
var mahjongPengSource;
var mahjongGangAudio;//杠音效
var mahjongGangSource;
var mahjongHuAudio;//胡音效
var mahjongHuSource;
var mahjongZimoAudio;//自摸音效
var mahjongZimoSource;
var mahjongGameOverAudio;//游戏结束音效
var mahjongGameOverSource;
var mahjongReadyGameAudio;//游戏结束音效
var mahjongReadyGameSource;

var mahjongBackgroundAudio;//背景音效
var mahjongBackgroundSource;



var raycaster ;//射线用于3D拾取
var mouse = new THREE.Vector2();//鼠标二维数组
var INTERSECTED;//3D物体变量
var textureLoader = new THREE.TextureLoader();



var majongHuTempNumber=0;
//**********连接服务器的静态字符串*********//
var sendNextMahJong="<#sendNextMahJong#>";//下一张牌
var sendqipaiMahJong="<#sendqipaiMahJong#>";//发送起牌
var requestNextPlayer="<#requestNextPlayer#>";//结束出牌，请求下一个玩家出牌
var sendNextPlayer="<#sendNextPlayer#>";//收到结束出牌请求,返回下一个玩家
var sendNextPlayerMahJong="<#sendNextPlayerMahJong#>";//收到结束出牌请求,返回下一个玩家
var HuMahJongAndPlayer="<#HuMahJongAndPlayer#>";//胡牌发送
var sendHuMahJongAndPlayer="<#sendHuMahJongAndPlayer#>";//发送胡牌信息给其他玩家
var pengMahJongAndPlayer="<#pengMahJongAndPlayer#>";//发送碰牌
var sendPengMahJongAndPlayer="<#sendPengMahJongAndPlayer#>";//发送碰牌信息给其他玩家
var playerLinkNumber="<#playerLinkNumber#>";//发送连接人数
var sendPlayerLinkeNumber="<#sendPlayerLinkeNumber#>";//给其他玩家发送连接人数
var chiMahJongAndPlayer="<#chipaiMahJongAndPlayer#>";//发送吃牌
var sendChiMahJongAndPlayer="<#sendChiMahJongAndPlayer#>";//发送吃牌信息给其他玩家
var gangMahJongAndPlayer="<#gangMahJongAndPlayer#>";//发送吃牌
var requestGangMahJongAndPlayer="<#requestGangMahJongAndPlayer#>";//发送吃牌信息给其他玩家
var sendRequestGangMahJongAndPlayer="<#sendRequestGangMahJongAndPlayer#>";//发送吃牌信息给其他玩家
var sendGangMahJongAndPlayer="<#sendGangMahJongAndPlayer#>";//发送吃牌信息给其他玩家
var sendTempPlayerAndIntArrayLength="<#sendTempPlayerAndIntArrayLength#>";//发送当前玩家及当前玩家数组长度给其他玩家
var resetGame="<#resetGame#>";//发送重新游戏
var chiNumber="<#chiNumber#>";//发送吃的数
var sendChiNumber="<#sendChiNumber#>";