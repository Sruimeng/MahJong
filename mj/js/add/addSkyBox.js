function addSkyBox() {
    // prepare ShaderMaterial
    var uniforms = {
        texture: { type: 't', value: THREE.ImageUtils.loadTexture('img/backIcon/back2.jpg') }
    };
    var skyMaterial = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById('sky-vertex').textContent, fragmentShader: document.getElementById('sky-fragment').textContent
    });

    // create Mesh with sphere geometry and add to the scene
    var skyBox = new THREE.Mesh(new THREE.SphereGeometry(200, 50, 50), skyMaterial);
    skyBox.scale.set(-2.2,  2.2, 2.2);
    //skyBox.eulerOrder = 'XZY';
    skyBox.renderDepth = 1500.0;
    skyBox.position.set(mjzx,mjzy+8.5,mjzz)

    this.scene.add(skyBox);
}