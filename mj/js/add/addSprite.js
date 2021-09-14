var particle;
var material = new THREE.SpriteMaterial( {
    map: new THREE.CanvasTexture( generateSprite() ),
    blending: THREE.AdditiveBlending,
    FrustrumCulled:true
} );
var addHuSpitex;
var addHuSpitey;
var addHuSpitez;

function addHuSpite(mahjongHuCartoonTempx,mahjongHuCartoonTempy,mahjongHuCartoonTempz) {

    if(mahJongHuPaiCartoonFlag)
    {
        addHuSpitex=mahjongHuCartoonTempx;
        addHuSpitey=mahjongHuCartoonTempy;
        addHuSpitez=mahjongHuCartoonTempz;
        console.log("mahjongHuCartoonTempx:"+mahjongHuCartoonTempx);


        console.log("mahjongHupaiPlayer: "+mahjongHupaiPlayer);



        resetSprite();



    }


        //
        //         //var sprite = new THREE.Particle(material);
        //         var sprite = new THREE.Sprite(material);
        //             sprite.position.x=mjzx-10+4 * Math.cos ( timer *(5*360));
        //             sprite.position.y=mjzy+8.5+4 * Math.sin ( timer *(5*360));
        //             sprite.position.z=mjzz+10+10*timer;
        //             //sprite.position.set(x * 10, y * 10, 0);
        //             scene.add(sprite);
}

function resetSprite() {

    if(spriteMoveFlag)
    {
        for ( var i = 0; i < 10; i++ ) {
            particle = new THREE.Sprite( material );
            initParticle( particle, i );
            scene.add( particle );
        }

        for(var i=0;i<starArray.length;i++)
        {
            var tempColor=getColor();

            var tempRamdon=parseInt(Math.random()*9);
            starArray[i].rotation.x=Math.PI/tempRamdon;
            starArray[i].rotation.y=Math.PI/tempRamdon;
            starArray[i].position.x=addHuSpitex+ 2*Math.cos ( theta-i);
            starArray[i].position.y=addHuSpitey+(theta-i)/30;
            starArray[i].position.z=addHuSpitez+2*Math.sin ( theta-i);
            starArray[i].children[1].material =new THREE.MeshPhongMaterial({ color: tempColor });//new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('textures/green.jpg')});
            starArray[i].children[0].material =new THREE.MeshPhongMaterial({ color: tempColor });//new THREE.MeshLambertMateri
            scene.add(starArray[i]);
            if(theta==360)
            {
                scene.remove(starArray[i]);
                theta=0;
            }
        }

        setTimeout(function () {
            TWEEN.update();
            requestAnimationFrame(resetSprite);
            mahjongHuPaiCartoonTime=mahjongHuPaiCartoonTime+50;
        },50);

        setTimeout(function () {
            theta=theta+30;
        },250);

        if(mahjongHuPaiCartoonTime>2900)
        {
            if(spriteMoveFlag)
            {
                for ( var i = 0; i < 10; i++ ) {
                    particle = new THREE.Sprite( material );
                    initParticle( particle, i );
                    scene.remove( particle );
                }
                for(var j=0;j<starArray.length;j++)
                {
                    scene.remove(starArray[j]);
                }
                mahjongBackgroundAudio.pause();
                mahjongGameOverAudio.play();
                document.getElementById("gameover").style.display = "block";
                document.getElementById("resetgame").style.display = "block";
                mahJongHuPaiCartoonFlag=false;
                spriteMoveFlag=false;
            }
        }
    }

}

function getColor(){
    var colorElements = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    var colorArray = colorElements.split(",");
    var color ="#";
    for(var i =0;i<6;i++){
        color+=colorArray[Math.floor(Math.random()*16)];
    }
    return color;
}


function initParticle( particle, delay ) {
    var particle= this instanceof THREE.Sprite ? this : particle;
    var delay = delay !== undefined ? delay : 0;
    particle.scale.x = particle.scale.y = Math.random() ;
    new TWEEN.Tween( particle )
        .delay( delay )
        .to( {}, 10000 )
        .onComplete( initParticle )
        .start();
    new TWEEN.Tween( particle.position )
        .delay( delay )
        .to( { x: Math.random() * 400 - 200, y: Math.random() * 100 - 50, z: Math.random() * 400 - 200 }, 10000 )
        .start();
    new TWEEN.Tween( particle.scale )
        .delay( delay )
        .to( { x: 0.01, y: 0.01 }, 10000 )
        .start();
}


function generateSprite() {
    var canvas = document.createElement( 'canvas' );
    canvas.width = 32;
    canvas.height = 32;
    var context = canvas.getContext( '2d' );
    context.beginPath();
    var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
    gradient.addColorStop( 0, getColor() );//'rgba(0,255,255,1)'
    gradient.addColorStop( 0.2, getColor());// 'rgba(0,255,255,1)');
    gradient.addColorStop( 0.4, getColor());//'rgba(0,0,64,1)' );
    gradient.addColorStop( 1,getColor() );// 'rgba(0,0,0,1)');
    context.fillStyle = gradient;
    context.fillRect( 0, 0, 9, 9);
    return canvas;
}