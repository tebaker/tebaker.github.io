var fs_waterHeightMap = `
    precision mediump float;

    uniform samplerCube envMap;

    varying vec3 vI;
    varying vec3 vWorldNormal;

    void main() {
      vec3 reflection = reflect( vI, vWorldNormal );
      vec4 envColor = textureCube( envMap, vec3( -reflection.x, reflection.yz ) );
      gl_FragColor = vec4(envColor);
    }`;
