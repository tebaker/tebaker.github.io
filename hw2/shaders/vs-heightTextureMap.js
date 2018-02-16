var vs_heightTextureMap = `
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform sampler2D tPic;

  attribute vec3 position;
  attribute vec2 uv;
  attribute vec3 normal;

  uniform float displaceAmt; //controls the amount of vertex displacement...

  varying float vDisplace; 
  varying vec2 vUv;

  precision mediump float;

  void main() {
    vUv = uv;

    vec4 clr = texture2D(tPic, uv);
    
    if( clr.r > 0.0 ) {
      vDisplace = clr.a;
    }
    else if( clr.b > 0.0 ) {
      vDisplace = -clr.a;
    }
    else {
      vDisplace = 0.0;
    }

    vec3 newPosition = (position.xyz + normal.xyz * vDisplace).xyz;

    gl_Position = projectionMatrix  * viewMatrix * modelMatrix  * vec4( newPosition, 1.0 );
  }`;