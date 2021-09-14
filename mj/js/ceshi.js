/**
 * Created by Administrator on 2017/7/22.
 */
function ceshi(camera,renderer) {
	 var controls;
	 controls = new THREE.TrackballControls( camera );

	 controls.rotateSpeed = 3.0;
	 controls.zoomSpeed = 1.2;
	 controls.panSpeed = 2;

	 controls.noZoom = false;
	 controls.noPan = false;

	 controls.staticMoving = true;
	 controls.dynamicDampingFactor = 0.3;

	 controls.keys = [ 65, 83, 68 ];





	 function animate() {

			requestAnimationFrame( animate );
			controls.update();

	 }



	 return controls;
//窗口及鼠标结束
}
