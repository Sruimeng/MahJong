/**
 * Created by Administrator on 2017/7/27.
 */
var pointx;
var selected;//选中的模型
var tempselected=0;//上次选中的模型编号
var firstcomeflage=false;//是否第一次点击自己的麻将牌
var vector = new THREE.Vector3();//三维坐标对象
var intersects;
var mjpCounter=0;
var tempPlayerString="";
var southPlayerMove=true;//南的玩家是否在出现十四张牌之前动牌
var currentClick;
var rowNum=0;//废牌池行
var colNum=0;//废牌池列

function onDocumentMouseDown( event ) {

    event.preventDefault();

    vector.set(
        ( event.clientX / window.innerWidth ) * 2 - 1,
        -( event.clientY / window.innerHeight ) * 2 + 1,
        0.5);
    vector.unproject(camera);
    raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
    intersects = raycaster.intersectObjects(mymjp,true);
    if(clickNumber==1)
    {
        console.log("clickNumber:"+clickNumber);
        ThreetennClick();
        clickChupaiFlag=true;
        console.log("clickChupaiFlag:"+clickChupaiFlag);
    }else if(clickNumber==2)
    {
        otherClick();
        clickChupaiFlag=true;
        console.log("clickNumber:"+clickNumber);

    }else if(clickNumber==3)
    {
        backClick();
        clickChupaiFlag=true;
        console.log("clickNumber:"+clickNumber);

    }
}


