function initcene() {
    container = document.createElement( 'div' );
    document.body.appendChild( container )
    var webGLRenderer = new THREE.WebGLRenderer();//新建渲染器
    webGLRenderer.setClearColor(new THREE.Color(0x000000, 0));//设置背景颜色
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);//设置窗口大小
    webGLRenderer.shadowMapEnabled = true;
    renderer = webGLRenderer;
    container.appendChild( renderer.domElement );
    stats = new Stats();
    container.appendChild( stats.dom );

    initMusic();
    initmj();
    initmjpmaterial();
    initTimeImg();
    addSkyBox();
    mahjongReadyGameAudio.play();

    camera.position.x = 0;//设置摄像机的x坐标
    camera.position.y = 70 ;//设置摄像机的y坐标40
    camera.position.z = 65;//设置摄像机的z坐标35
    camera.lookAt(new THREE.Vector3(0, mjzy, mjzz));//设置摄像机焦点


    var lightup;//上边的光源

    var ambientLight = new THREE.AmbientLight(0x0c0c0c);//新建环境光
    scene.add(ambientLight);//将环境光添加到场景中




    light.position.set(7,30,-10);//设置光源位置
    light.castShadow=true;//有阴影
    light.target.position.set(7,8.5,-10);
    light.angle=Math.PI;//光源的角度
    light.shadowCameraNear=5;
    light.shadowCameraFar=30;
    light.intensity = 1.0;//设置光照强度
    scene.add(light);//将聚光灯添加到场景中
    lightup=light.clone();//克隆光源对象
    lightup.position.set(0,30 , 30);//设置光源位置
    lightup.target.position.set(mjzx+2-2.1*7,mjzy+8.5,mjzz+32);
    lightup.intensity = 1.0;//设置光照强度
    scene.add(lightup);//将聚光灯添加到场景中
    document.getElementById("WebGL-output").appendChild(renderer.domElement);
    document.addEventListener('mousedown', onDocumentMouseDown, false);
    //render();
    //animate();
    startgame();
}

function startgame() {
    if(isInGame)
    {

        qipaiobj();
        chupaiTime();
        directionManager();
        if(initflag)
        {
            start(nextDirection);
        }

    }
    requestAnimationFrame(startgame);
    stats.update();
    renderer.render(scene, camera);//进行绘制
}

function render() {
    requestAnimationFrame(render);//请求绘制下一帧
    renderer.render(scene, camera);//进行绘制
}