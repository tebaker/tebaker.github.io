var fs_waterHeightMap = `
  precision mediump float;

  varying float noiseVal;
  varying float noiseVal2;

  uniform samplerCube envMap;

  varying vec3 vI;
  varying vec3 vWorldNormal;

  void main()  {

  // vec3 color = vec3( 1.0 * ( 1.0 - (3.0 * noiseVal) ), 0.0, 0.0 );
  // vec3 color2 = vec3( 0.0, 1.0 * ( 1.0 - (3.0 * noiseVal2) ), (noiseVal2*5.0) );

  // gl_FragColor = vec4( color2, 1.0 );

  vec3 reflection = reflect( vI, vWorldNormal );
  vec4 envColor = textureCube( envMap, vec3( -reflection.x, reflection.yz ) );
  gl_FragColor = vec4(envColor);

  }`;