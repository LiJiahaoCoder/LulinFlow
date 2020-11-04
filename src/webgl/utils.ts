import { WebGLContext, VertexBufferOptions } from '@/types/webgl';
import { VertexShaderVariables } from '@/constants/shader';

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
    throw new Error(`Failed to compile: ${gl.getShaderInfoLog(shader) ?? ''}!`);
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
    throw new Error(`Failed to link shader program: ${gl.getProgramInfoLog(program) ?? ''}`);
  }

  return program;
};

export const initShaders = (
  gl: WebGL2RenderingContext,
  vshader: string,
  fshader: string,
): WebGLContext => {
  const program = createProgram(gl, vshader, fshader);

  gl.useProgram(program);
  Object.defineProperty(gl, 'program', { value: program, writable: false });

  return gl as WebGLContext;
};

export const getAttribute = (gl: WebGL2RenderingContext, program: WebGLProgram, attribute: string) => {
  const a_Attribute = gl.getAttribLocation(program, attribute);
  if (a_Attribute < 0) {
    throw new Error(`Failed to get attribute: ${attribute}`);
  }

  return a_Attribute;
};

export const initVertexBuffer = (
  gl: WebGLContext,
  options: VertexBufferOptions,
) => {
  const { vertices, colors, vertexSize, colorSize, indices } = options;
  const buffer = gl.createBuffer();
  if (!buffer) {
    throw new Error('Failed to initialize vertex buffer');
  }

  initArrayBuffer(gl, vertices, vertexSize, gl.FLOAT, VertexShaderVariables.a_Position);
  initArrayBuffer(gl, colors, colorSize, gl.FLOAT, VertexShaderVariables.a_Color);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
};

export const initArrayBuffer = (
  gl: WebGLContext,
  data: Float32Array,
  size: number,
  type: number,
  attribute: string,
) => {
  const buffer = gl.createBuffer();
  if (!buffer) {
    throw new Error('Failed to initialize array buffer');
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  const a_Attribute = getAttribute(gl, gl.program, attribute);

  gl.vertexAttribPointer(a_Attribute, size, type, false, 0, 0);
  gl.enableVertexAttribArray(a_Attribute);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
};
