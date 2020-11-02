export const getCanvas = (selector: string) => {
  const canvas = document.querySelector(selector);
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error(`Can't find a canvas with selector: ${selector}`);
  }

  return canvas;
};

export const getContext = (canvas: HTMLCanvasElement) => {
  const gl = canvas.getContext('webgl2');
  if (!gl) {
    throw new Error('Your browser doesn\'t support WebGL2!');
  }

  return gl;
};

export const createShader = (
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
) => {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error('Failed to create shader!');
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    gl.deleteShader(shader);
    throw new Error(`Failed to compile: ${gl.getShaderInfoLog(shader)}!`);
  }

  return shader;
};

export const createProgram = (
  gl: WebGL2RenderingContext,
  vshader: string,
  fshader: string,
) => {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vshader);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fshader);
  if (!vertexShader || !fragmentShader) {
    throw new Error('Failed to create shader!');
  }

  const program = gl.createProgram();
  if (!program) {
    throw new Error('Failed to create program!');
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    throw new Error(`Failed to link shader program: ${gl.getProgramInfoLog(program)}`);
  }

  return program;
};
