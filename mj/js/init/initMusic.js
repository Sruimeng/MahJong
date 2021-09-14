function initMusic() {

    mahjongReadyGameAudio=document.createElement("audio");
    mahjongReadyGameSource=document.createElement("source");
    mahjongReadyGameSource.src="music/ready.mp3";
    mahjongReadyGameAudio.loop=true;
    mahjongReadyGameAudio.preload=true;
    mahjongReadyGameAudio.autoplay=false;
    mahjongReadyGameAudio.appendChild(mahjongReadyGameSource);
    mahjongReadyGameAudio.onended=mahjongReadyGameAudio.pause;

    mahjongBackgroundAudio=document.createElement("audio");
    mahjongBackgroundSource=document.createElement("source");
    mahjongBackgroundSource.src="music/playingInGame.mp3";
    mahjongBackgroundAudio.loop=true;
    mahjongBackgroundAudio.preload=true;
    mahjongBackgroundAudio.autoplay=false;
    mahjongBackgroundAudio.appendChild(mahjongBackgroundSource);
    mahjongBackgroundAudio.onended=mahjongBackgroundAudio.pause;

    mahjongChiAudio=document.createElement("audio");
    mahjongChiSource=document.createElement("source");
    mahjongChiSource.src="music/chi.mp3";
    mahjongChiAudio.loop=false;
    mahjongChiAudio.preload=true;
    mahjongChiAudio.autoplay=false;
    mahjongChiAudio.appendChild(mahjongChiSource);
    mahjongChiAudio.onended=mahjongChiAudio.pause;

    mahjongPengAudio=document.createElement("audio");
    mahjongPengSource=document.createElement("source");
    mahjongPengSource.src="music/peng.mp3";
    mahjongPengAudio.loop=false;
    mahjongPengAudio.preload=true;
    mahjongPengAudio.autoplay=false;
    mahjongPengAudio.appendChild(mahjongPengSource);
    mahjongPengAudio.onended=mahjongPengAudio.pause;

    mahjongGangAudio=document.createElement("audio");
    mahjongGangSource=document.createElement("source");
    mahjongGangSource.src="music/gang.mp3";
    mahjongGangAudio.loop=false;
    mahjongGangAudio.preload=true;
    mahjongGangAudio.autoplay=false;
    mahjongGangAudio.appendChild(mahjongGangSource);
    mahjongGangAudio.onended=mahjongGangAudio.pause;

    mahjongHuAudio=document.createElement("audio");
    mahjongHuSource=document.createElement("source");
    mahjongHuSource.src="music/hu.mp3";
    mahjongHuAudio.loop=false;
    mahjongHuAudio.preload=true;
    mahjongHuAudio.autoplay=false;
    mahjongHuAudio.appendChild(mahjongHuSource);
    mahjongHuAudio.onended=mahjongHuAudio.pause;

    mahjongZimoAudio=document.createElement("audio");
    mahjongZimoSource=document.createElement("source");
    mahjongZimoSource.src="music/hu_zimo.mp3";
    mahjongZimoAudio.loop=false;
    mahjongZimoAudio.preload=true;
    mahjongZimoAudio.autoplay=false;
    mahjongZimoAudio.appendChild(mahjongZimoSource);
    mahjongZimoAudio.onended=mahjongZimoAudio.pause;

    mahjongGameOverAudio=document.createElement("audio");
    mahjongGameOverSource=document.createElement("source");
    mahjongGameOverSource.src="music/gmover.mp3";
    mahjongGameOverAudio.loop=false;
    mahjongGameOverAudio.preload=true;
    mahjongGameOverAudio.autoplay=false;
    mahjongGameOverAudio.appendChild(mahjongGameOverSource);
    mahjongGameOverAudio.onended=mahjongGameOverAudio.pause;


    mahjongMusicAudio[1]=document.createElement("audio");
    mahjongMusicSource[1]=document.createElement("source");
    mahjongMusicSource[1].src="music/1wan.mp3";
    mahjongMusicAudio[1].loop=false;
    mahjongMusicAudio[1].preload=true;
    mahjongMusicAudio[1].autoplay=false;
    mahjongMusicAudio[1].appendChild(mahjongMusicSource[1]);
    mahjongMusicAudio[1].onended=mahjongMusicAudio[1].pause;

    mahjongMusicAudio[2]=document.createElement("audio");
    mahjongMusicSource[2]=document.createElement("source");
    mahjongMusicSource[2].src="music/2wan.mp3";
    mahjongMusicAudio[2].loop=false;
    mahjongMusicAudio[2].preload=true;
    mahjongMusicAudio[2].autoplay=false;
    mahjongMusicAudio[2].appendChild(mahjongMusicSource[2]);
    mahjongMusicAudio[2].onended=mahjongMusicAudio[2].pause;

    mahjongMusicAudio[3]=document.createElement("audio");
    mahjongMusicSource[3]=document.createElement("source");
    mahjongMusicSource[3].src="music/3wan.mp3";
    mahjongMusicAudio[3].loop=false;
    mahjongMusicAudio[3].preload=true;
    mahjongMusicAudio[3].autoplay=false;
    mahjongMusicAudio[3].appendChild(mahjongMusicSource[3]);
    mahjongMusicAudio[3].onended=mahjongMusicAudio[3].pause;

    mahjongMusicAudio[4]=document.createElement("audio");
    mahjongMusicSource[4]=document.createElement("source");
    mahjongMusicSource[4].src="music/4wan.mp3";
    mahjongMusicAudio[4].loop=false;
    mahjongMusicAudio[4].preload=true;
    mahjongMusicAudio[4].autoplay=false;
    mahjongMusicAudio[4].appendChild(mahjongMusicSource[4]);
    mahjongMusicAudio[4].onended=mahjongMusicAudio[4].pause;

    mahjongMusicAudio[5]=document.createElement("audio");
    mahjongMusicSource[5]=document.createElement("source");
    mahjongMusicSource[5].src="music/5wan.mp3";
    mahjongMusicAudio[5].loop=false;
    mahjongMusicAudio[5].preload=true;
    mahjongMusicAudio[5].autoplay=false;
    mahjongMusicAudio[5].appendChild(mahjongMusicSource[5]);
    mahjongMusicAudio[5].onended=mahjongMusicAudio[5].pause;

    mahjongMusicAudio[6]=document.createElement("audio");
    mahjongMusicSource[6]=document.createElement("source");
    mahjongMusicSource[6].src="music/6wan.mp3";
    mahjongMusicAudio[6].loop=false;
    mahjongMusicAudio[6].preload=true;
    mahjongMusicAudio[6].autoplay=false;
    mahjongMusicAudio[6].appendChild(mahjongMusicSource[6]);
    mahjongMusicAudio[6].onended=mahjongMusicAudio[6].pause;

    mahjongMusicAudio[7]=document.createElement("audio");
    mahjongMusicSource[7]=document.createElement("source");
    mahjongMusicSource[7].src="music/7wan.mp3";
    mahjongMusicAudio[7].loop=false;
    mahjongMusicAudio[7].preload=true;
    mahjongMusicAudio[7].autoplay=false;
    mahjongMusicAudio[7].appendChild(mahjongMusicSource[7]);
    mahjongMusicAudio[7].onended=mahjongMusicAudio[7].pause;

    mahjongMusicAudio[8]=document.createElement("audio");
    mahjongMusicSource[8]=document.createElement("source");
    mahjongMusicSource[8].src="music/8wan.mp3";
    mahjongMusicAudio[8].loop=false;
    mahjongMusicAudio[8].preload=true;
    mahjongMusicAudio[8].autoplay=false;
    mahjongMusicAudio[8].appendChild(mahjongMusicSource[8]);
    mahjongMusicAudio[8].onended=mahjongMusicAudio[8].pause;

    mahjongMusicAudio[9]=document.createElement("audio");
    mahjongMusicSource[9]=document.createElement("source");
    mahjongMusicSource[9].src="music/8wan.mp3";
    mahjongMusicAudio[9].loop=false;
    mahjongMusicAudio[9].preload=true;
    mahjongMusicAudio[9].autoplay=false;
    mahjongMusicAudio[9].appendChild(mahjongMusicSource[9]);
    mahjongMusicAudio[9].onended=mahjongMusicAudio[9].pause;

    mahjongMusicAudio[11]=document.createElement("audio");
    mahjongMusicSource[11]=document.createElement("source");
    mahjongMusicSource[11].src="music/1tiao.mp3";
    mahjongMusicAudio[11].loop=false;
    mahjongMusicAudio[11].preload=true;
    mahjongMusicAudio[11].autoplay=false;
    mahjongMusicAudio[11].appendChild(mahjongMusicSource[11]);
    mahjongMusicAudio[11].onended=mahjongMusicAudio[11].pause;

    mahjongMusicAudio[12]=document.createElement("audio");
    mahjongMusicSource[12]=document.createElement("source");
    mahjongMusicSource[12].src="music/2tiao.mp3";
    mahjongMusicAudio[12].loop=false;
    mahjongMusicAudio[12].preload=true;
    mahjongMusicAudio[12].autoplay=false;
    mahjongMusicAudio[12].appendChild(mahjongMusicSource[12]);
    mahjongMusicAudio[12].onended=mahjongMusicAudio[12].pause;

    mahjongMusicAudio[13]=document.createElement("audio");
    mahjongMusicSource[13]=document.createElement("source");
    mahjongMusicSource[13].src="music/3tiao.mp3";
    mahjongMusicAudio[13].loop=false;
    mahjongMusicAudio[13].preload=true;
    mahjongMusicAudio[13].autoplay=false;
    mahjongMusicAudio[13].appendChild(mahjongMusicSource[13]);
    mahjongMusicAudio[13].onended=mahjongMusicAudio[13].pause;

    mahjongMusicAudio[14]=document.createElement("audio");
    mahjongMusicSource[14]=document.createElement("source");
    mahjongMusicSource[14].src="music/4tiao.mp3";
    mahjongMusicAudio[14].loop=false;
    mahjongMusicAudio[14].preload=true;
    mahjongMusicAudio[14].autoplay=false;
    mahjongMusicAudio[14].appendChild(mahjongMusicSource[14]);
    mahjongMusicAudio[14].onended=mahjongMusicAudio[14].pause;

    mahjongMusicAudio[15]=document.createElement("audio");
    mahjongMusicSource[15]=document.createElement("source");
    mahjongMusicSource[15].src="music/5tiao.mp3";
    mahjongMusicAudio[15].loop=false;
    mahjongMusicAudio[15].preload=true;
    mahjongMusicAudio[15].autoplay=false;
    mahjongMusicAudio[15].appendChild(mahjongMusicSource[15]);
    mahjongMusicAudio[15].onended=mahjongMusicAudio[15].pause;

    mahjongMusicAudio[16]=document.createElement("audio");
    mahjongMusicSource[16]=document.createElement("source");
    mahjongMusicSource[16].src="music/6tiao.mp3";
    mahjongMusicAudio[16].loop=false;
    mahjongMusicAudio[16].preload=true;
    mahjongMusicAudio[16].autoplay=false;
    mahjongMusicAudio[16].appendChild(mahjongMusicSource[16]);
    mahjongMusicAudio[16].onended=mahjongMusicAudio[16].pause;

    mahjongMusicAudio[17]=document.createElement("audio");
    mahjongMusicSource[17]=document.createElement("source");
    mahjongMusicSource[17].src="music/7tiao.mp3";
    mahjongMusicAudio[17].loop=false;
    mahjongMusicAudio[17].preload=true;
    mahjongMusicAudio[17].autoplay=false;
    mahjongMusicAudio[17].appendChild(mahjongMusicSource[17]);
    mahjongMusicAudio[17].onended=mahjongMusicAudio[17].pause;

    mahjongMusicAudio[18]=document.createElement("audio");
    mahjongMusicSource[18]=document.createElement("source");
    mahjongMusicSource[18].src="music/8tiao.mp3";
    mahjongMusicAudio[18].loop=false;
    mahjongMusicAudio[18].preload=true;
    mahjongMusicAudio[18].autoplay=false;
    mahjongMusicAudio[18].appendChild(mahjongMusicSource[18]);
    mahjongMusicAudio[18].onended=mahjongMusicAudio[18].pause;

    mahjongMusicAudio[19]=document.createElement("audio");
    mahjongMusicSource[19]=document.createElement("source");
    mahjongMusicSource[19].src="music/9tiao.mp3";
    mahjongMusicAudio[19].loop=false;
    mahjongMusicAudio[19].preload=true;
    mahjongMusicAudio[19].autoplay=false;
    mahjongMusicAudio[19].appendChild(mahjongMusicSource[19]);
    mahjongMusicAudio[19].onended=mahjongMusicAudio[19].pause;

    mahjongMusicAudio[21]=document.createElement("audio");
    mahjongMusicSource[21]=document.createElement("source");
    mahjongMusicSource[21].src="music/1tong.mp3";
    mahjongMusicAudio[21].loop=false;
    mahjongMusicAudio[21].preload=true;
    mahjongMusicAudio[21].autoplay=false;
    mahjongMusicAudio[21].appendChild(mahjongMusicSource[21]);
    mahjongMusicAudio[21].onended=mahjongMusicAudio[21].pause;

    mahjongMusicAudio[22]=document.createElement("audio");
    mahjongMusicSource[22]=document.createElement("source");
    mahjongMusicSource[22].src="music/2tong.mp3";
    mahjongMusicAudio[22].loop=false;
    mahjongMusicAudio[22].preload=true;
    mahjongMusicAudio[22].autoplay=false;
    mahjongMusicAudio[22].appendChild(mahjongMusicSource[22]);
    mahjongMusicAudio[22].onended=mahjongMusicAudio[22].pause;

    mahjongMusicAudio[23]=document.createElement("audio");
    mahjongMusicSource[23]=document.createElement("source");
    mahjongMusicSource[23].src="music/3tong.mp3";
    mahjongMusicAudio[23].loop=false;
    mahjongMusicAudio[23].preload=true;
    mahjongMusicAudio[23].autoplay=false;
    mahjongMusicAudio[23].appendChild(mahjongMusicSource[23]);
    mahjongMusicAudio[23].onended=mahjongMusicAudio[23].pause;

    mahjongMusicAudio[24]=document.createElement("audio");
    mahjongMusicSource[24]=document.createElement("source");
    mahjongMusicSource[24].src="music/4tong.mp3";
    mahjongMusicAudio[24].loop=false;
    mahjongMusicAudio[24].preload=true;
    mahjongMusicAudio[24].autoplay=false;
    mahjongMusicAudio[24].appendChild(mahjongMusicSource[24]);
    mahjongMusicAudio[24].onended=mahjongMusicAudio[24].pause;

    mahjongMusicAudio[25]=document.createElement("audio");
    mahjongMusicSource[25]=document.createElement("source");
    mahjongMusicSource[25].src="music/5tong.mp3";
    mahjongMusicAudio[25].loop=false;
    mahjongMusicAudio[25].preload=true;
    mahjongMusicAudio[25].autoplay=false;
    mahjongMusicAudio[25].appendChild(mahjongMusicSource[25]);
    mahjongMusicAudio[25].onended=mahjongMusicAudio[25].pause;

    mahjongMusicAudio[26]=document.createElement("audio");
    mahjongMusicSource[26]=document.createElement("source");
    mahjongMusicSource[26].src="music/6tong.mp3";
    mahjongMusicAudio[26].loop=false;
    mahjongMusicAudio[26].preload=true;
    mahjongMusicAudio[26].autoplay=false;
    mahjongMusicAudio[26].appendChild(mahjongMusicSource[26]);
    mahjongMusicAudio[26].onended=mahjongMusicAudio[26].pause;

    mahjongMusicAudio[27]=document.createElement("audio");
    mahjongMusicSource[27]=document.createElement("source");
    mahjongMusicSource[27].src="music/7tong.mp3";
    mahjongMusicAudio[27].loop=false;
    mahjongMusicAudio[27].preload=true;
    mahjongMusicAudio[27].autoplay=false;
    mahjongMusicAudio[27].appendChild(mahjongMusicSource[27]);
    mahjongMusicAudio[27].onended=mahjongMusicAudio[27].pause;

    mahjongMusicAudio[28]=document.createElement("audio");
    mahjongMusicSource[28]=document.createElement("source");
    mahjongMusicSource[28].src="music/8tong.mp3";
    mahjongMusicAudio[28].loop=false;
    mahjongMusicAudio[28].preload=true;
    mahjongMusicAudio[28].autoplay=false;
    mahjongMusicAudio[28].appendChild(mahjongMusicSource[28]);
    mahjongMusicAudio[28].onended=mahjongMusicAudio[28].pause;

    mahjongMusicAudio[29]=document.createElement("audio");
    mahjongMusicSource[29]=document.createElement("source");
    mahjongMusicSource[29].src="music/9tong.mp3";
    mahjongMusicAudio[29].loop=false;
    mahjongMusicAudio[29].preload=true;
    mahjongMusicAudio[29].autoplay=false;
    mahjongMusicAudio[29].appendChild(mahjongMusicSource[29]);
    mahjongMusicAudio[29].onended=mahjongMusicAudio[29].pause;

    mjpmesh[31]= new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/mj/dong.png')});
    mjpmesh[33]= new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/mj/xi.png')});
    mjpmesh[35]= new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/mj/nan.png')});
    mjpmesh[37]= new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/mj/bei.png')});
    mjpmesh[41]= new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/mj/zhong.png')});
    mjpmesh[43]= new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/mj/fa.png')});
    mjpmesh[45]= new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/mj/bai.png')});

    mahjongMusicAudio[31]=document.createElement("audio");
    mahjongMusicSource[31]=document.createElement("source");
    mahjongMusicSource[31].src="music/dongfeng.mp3";
    mahjongMusicAudio[31].loop=false;
    mahjongMusicAudio[31].preload=true;
    mahjongMusicAudio[31].autoplay=false;
    mahjongMusicAudio[31].appendChild(mahjongMusicSource[31]);
    mahjongMusicAudio[31].onended=mahjongMusicAudio[31].pause;

    mahjongMusicAudio[33]=document.createElement("audio");
    mahjongMusicSource[33]=document.createElement("source");
    mahjongMusicSource[33].src="music/xifeng.mp3";
    mahjongMusicAudio[33].loop=false;
    mahjongMusicAudio[33].preload=true;
    mahjongMusicAudio[33].autoplay=false;
    mahjongMusicAudio[33].appendChild(mahjongMusicSource[33]);
    mahjongMusicAudio[33].onended=mahjongMusicAudio[33].pause;

    mahjongMusicAudio[35]=document.createElement("audio");
    mahjongMusicSource[35]=document.createElement("source");
    mahjongMusicSource[35].src="music/nanfeng.mp3";
    mahjongMusicAudio[35].loop=false;
    mahjongMusicAudio[35].preload=true;
    mahjongMusicAudio[35].autoplay=false;
    mahjongMusicAudio[35].appendChild(mahjongMusicSource[35]);
    mahjongMusicAudio[35].onended=mahjongMusicAudio[35].pause;

    mahjongMusicAudio[37]=document.createElement("audio");
    mahjongMusicSource[37]=document.createElement("source");
    mahjongMusicSource[37].src="music/beifeng.mp3";
    mahjongMusicAudio[37].loop=false;
    mahjongMusicAudio[37].preload=true;
    mahjongMusicAudio[37].autoplay=false;
    mahjongMusicAudio[37].appendChild(mahjongMusicSource[37]);
    mahjongMusicAudio[37].onended=mahjongMusicAudio[37].pause;

    mahjongMusicAudio[41]=document.createElement("audio");
    mahjongMusicSource[41]=document.createElement("source");
    mahjongMusicSource[41].src="music/hongzhong.mp3";
    mahjongMusicAudio[41].loop=false;
    mahjongMusicAudio[41].preload=true;
    mahjongMusicAudio[41].autoplay=false;
    mahjongMusicAudio[41].appendChild(mahjongMusicSource[41]);
    mahjongMusicAudio[41].onended=mahjongMusicAudio[41].pause;

    mahjongMusicAudio[43]=document.createElement("audio");
    mahjongMusicSource[43]=document.createElement("source");
    mahjongMusicSource[43].src="music/fa.mp3";
    mahjongMusicAudio[43].loop=false;
    mahjongMusicAudio[43].preload=true;
    mahjongMusicAudio[43].autoplay=false;
    mahjongMusicAudio[43].appendChild(mahjongMusicSource[43]);
    mahjongMusicAudio[43].onended=mahjongMusicAudio[43].pause;

    mahjongMusicAudio[45]=document.createElement("audio");
    mahjongMusicSource[45]=document.createElement("source");
    mahjongMusicSource[45].src="music/bai.mp3";
    mahjongMusicAudio[45].loop=false;
    mahjongMusicAudio[45].preload=true;
    mahjongMusicAudio[45].autoplay=false;
    mahjongMusicAudio[45].appendChild(mahjongMusicSource[45]);
    mahjongMusicAudio[45].onended=mahjongMusicAudio[45].pause;
}