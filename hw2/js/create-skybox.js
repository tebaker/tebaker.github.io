/* 
    size = h, w, d
    textures = array of 6 sides of cube texture
*/
function createSkybox( size, textures, skyboxVS, skyboxFS ) {
    var cube = new THREE.BoxGeometry(size, size, size);
    var tex = new THREE.CubeTextureLoader().load(textures);

    var shaderInput = {
        skyBox: { type: "t", value: tex },
    }

    var material = new THREE.ShaderMaterial({
        uniforms: shaderInput,
        vertexShader: skyboxVS,
        fragmentShader: skyboxFS,
    });

    material.side = THREE.BackSide;

    var mesh = new THREE.Mesh(cube, material)

    return mesh;
}