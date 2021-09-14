/**
 * Created by srm on 2017/7/8.
 */
var label1;
var label_Material1 = new THREE.MeshBasicMaterial();//新建标签1的材质
var player1_label= new THREE.PlaneGeometry(30,30,1,1);//新建长方形标签;
function initmj()
{
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load( 'model/mj.mtl', function( materials ) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        objLoader.setPath( 'model/' );
        objLoader.load( 'mj.obj', function ( object ) {
            object.scale.set(0.7, 0.7, 0.7);//设置放大系数
            object.rotation.x = 0.0;//设置旋转
            object.position.set(mjzx,mjzy, mjzz);//设置麻将桌位置
            scene.add(object);

        });

    });






    // playerTimeMaterial.map=THREE.ImageUtils.loadTexture('img/time/time_4_glow.png');
    //
    //playerTimeLabel.scale.set(1.0,1.0,1.0);



    //************************************创建中间东西南北******************
    textureLoader.load( 'img/direction/EWSN.png', function (texture) {//读取标签1的图片
        label_Material1.transparent = true;
        label_Material1.map = texture;
        //	label_Material1.needsUpdate = true;
        label1 = new THREE.Mesh(player1_label,label_Material1);
        label1.scale.set(0.3,0.3,0.3);
        label1.rotation.x = -0.5 * Math.PI;
        label1.position.x = mjzx-10;
        label1.position.y = mjzy+8.5;
        label1.position.z = mjzz+10;
        scene.add(label1);
    });




    var mtlLoader1 = new THREE.MTLLoader();
    mtlLoader1.load( 'model/kbmj.mtl', function( materials ) {
        materials.preload();

        var objLoader1 = new THREE.OBJLoader();
        objLoader1.setMaterials( materials );
        objLoader1.setPath( 'model/' );
        objLoader1.load( 'kbmj.obj', function ( object ) {
            object.scale.set(0.13, 0.13, 0.13);//设置放大系数
            var model=	object.clone();
            object.receiveShadow=true;//接受平面阴影
            object.rotation.z = -Math.PI;//设置旋转
            for(var i=0;i<17;i++)
            {
                var rightmj=object.clone();
                rightmj.position.set(mjzx+10,mjzy+7.5,mjzz-10+2.1*i);
                scene.add( rightmj );
                var rightmj=object.clone();
                rightmj.position.set(mjzx+10,mjzy+8.5,mjzz-10+2.1*i);
                scene.add( rightmj );
                var liftmj=object.clone();
                liftmj.position.set(mjzx-30,mjzy+7.5,mjzz-10+2.1*i);
                scene.add( liftmj );
                var liftmj=object.clone();
                liftmj.position.set(mjzx-30,mjzy+8.5,mjzz-10+2.1*i);
                scene.add( liftmj );
            }
            object.rotation.y=-Math.PI/2;
            object.rotation.x=-Math.PI;

            object.rotation.x=-Math.PI*2;
            for(var i=0;i<17;i++)
            {
                var upmj=object.clone();

                upmj.position.set(mjzx+7-2.1*i,mjzy+7.5,mjzz-10);
                scene.add(upmj);
                var upmj=object.clone();
                upmj.position.set(mjzx+7-2.1*i,mjzy+8.5,mjzz-10);
                scene.add(upmj);
                var  downmj=object.clone();
                downmj.position.set(mjzx+7-2.1*i,mjzy+7.5,mjzz+23);
                scene.add(downmj);
                var  downmj=object.clone();
                downmj.position.set(mjzx+7-2.1*i,mjzy+8.5,mjzz+23);
                scene.add(downmj);
            }

            object.rotation.z=Math.PI*2;
            object.rotation.x=-Math.PI/2;
            for(var i=0;i<13;i++)
            {
                upqp[i]=object.clone();
                fapai[2]=object.clone();
            }

            object.rotation.x=Math.PI/2;
            // for(var i=0;i<13;i++)
            // {
            // 	 myqp[i]=object.clone();
            // 	 fapai[0]=object.clone();
            // }
            model.rotation.x=Math.PI;

            model.rotation.z=Math.PI/2;
            for(var i=0;i<13;i++)
            {
                liftqp[i]=model.clone();
                fapai[3]=model.clone();
            }
            model.rotation.z=-Math.PI/2;
            for(var i=0;i<13;i++)
            {
                rightqp[i]=model.clone();
                fapai[1]=model.clone();
            }

        });

    });

    var objLoader2 = new THREE.OBJLoader();

    objLoader2.load( 'model/star.obj', function ( object ) {
        object.scale.set(0.008, 0.008, 0.008);//设置放大系数
        object.position.set(mjzx-10,mjzy+10.5,mjzz+10);
        var shaderMaterial = new THREE.ShaderMaterial( {
            uniforms: {
                uLightLocation:{value : new THREE.Vector3( 0, 100,200 )},
                cameraPosition:{value: new THREE.Vector3( -1000,1000,-500)},
                sTexture:{ value: textureLoader.load( "textures/white.jpg" ) }
            },
            vertexShader: document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader').textContent
        });
        for(var i=0;i<starArray.length;i++)
        {

            starArray[i]=object.clone();
        }
        star=object.clone();
        star.children[1].material =new THREE.MeshPhongMaterial({ color: 0xCC0000 });//new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('textures/green.jpg')});
        star.children[0].material =new THREE.MeshPhongMaterial({ color: 0xCC0000 });//new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('textures/green.jpg')});
        // object.children[0].material = shaderMaterial;
        // object.children[0].material.needsUpdate = true;
        // object.children[1].material = shaderMaterial;
        // object.children[1].material.needsUpdate = true;
        //scene.add(star);
    });

    objLoader2.load( 'model/mjpaidi.obj', function ( object ) {
        object.scale.set(0.13, 0.13, 0.13);//设置放大系数
        object.children[0].material =new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('textures/green.jpg')});
        //object.receiveShadow=true;//接受平面阴影
        // object.rotation.x = Math.PI/2;//设置旋转
        for(var i=0;i<12;i++)
        {
            mahjongPengPaiArray0[i]=object.clone();
            mahjongPengPaiArray1[i]=object.clone();
            mahjongPengPaiArray2[i]=object.clone();
            mahjongPengPaiArray3[i]=object.clone();
        }
        for(var i=0;i<60;i++)
        {
            feipai[i]=object.clone();
        }
        majongPaidi[0]=object.clone();
        majongPaidi[1]=object.clone();
        majongPaidi[2]=object.clone();
        majongPaidi[3]=object.clone();
        object.rotation.z = -Math.PI/4;//设置旋转
        object.rotation.y = -Math.PI/2;//设置旋转
        ontherPaidi=object.clone();


        for(var i=0;i<13;i++)
        {

            myqp[i]=object.clone();
            fapai[0]=object.clone();
        }

        object.rotation.z = Math.PI/4;//设置旋转
        object.rotation.y = Math.PI/2;//设置旋转
        //桌面上的废牌池

    });

    objLoader2.setPath( 'model/' );
    objLoader2.load( 'mjp.obj', function ( object ) {
        object.scale.set(0.13, 0.13,0.13);//设置放大系数
        object.receiveShadow=true;//接受平面阴影
        for(var i=0;i<12;i++)
        {
            mahjongPengPaiArrayp0[i]=object.clone();
            mahjongPengPaiArrayp1[i]=object.clone();
            mahjongPengPaiArrayp2[i]=object.clone();
            mahjongPengPaiArrayp3[i]=object.clone();
        }
        for(var i=0;i<60;i++)
        {
            feipaip[i]=object.clone();
        }
        majongPai[0]=object.clone();
        majongPai[1]=object.clone();
        majongPai[2]=object.clone();
        majongPai[3]=object.clone();
        object.rotation.y = -Math.PI/2;//设置旋转
        object.rotation.z = -Math.PI/4;//设置旋转

        mymjp[14]=object.clone();
        for(var i=0;i<13;i++)
        {

            mymjp[i]=object.clone();
            meshMaterial=mjpmesh[0];
        }
        ontherPaimian=object.clone();
        mymjp[13]=object.clone();
        object.rotation.x = -Math.PI*2;//设置旋转
        object.rotation.y = Math.PI/2*3;//设置旋转
        object.rotation.z = Math.PI/4;//设置旋转


    });
}
function qipaiobj() {
    if(!initflag)
    {

        for(var i=0;i<13;i++)
        {
            upqp[i].position.set(mjzx+2-2.1*i,mjzy+8.5,mjzz-15);
            scene.add(upqp[i]);
            liftqp[i].position.set(mjzx-35,mjzy+8.5,mjzz-5+2.1*i);
            scene.add(liftqp[i]);
            rightqp[i].position.set(mjzx+15,mjzy+8.5,mjzz-5+2.1*i);
            scene.add(rightqp[i]);
        }
        for(var i=0;i<13;i++)
        {
            myqp[i].position.set(mjzx-23.2+2.15*i,mjzy+15.5,mjzz+31);
            scene.add(myqp[i]);
            if(qp!=null)
            {
                qp.sort(function(a,b){
                    return a-b});
                mymjp[i].position.set(mjzx-23.2+2.15*i,mjzy+15.5,mjzz+31);
                mymjp[i].children[0].material =mjpmesh[qp[i]];
                scene.add(mymjp[i]);
            }
        }
        initflag=true;
    }
}