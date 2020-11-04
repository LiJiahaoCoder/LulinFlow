export interface WebGLContext extends WebGL2RenderingContext {
  program: WebGLProgram;
}

export interface BasicShapeOptions {
  vertices: Float32Array;
  colors: Float32Array;
  indices: Uint8Array;
}

export interface VertexBufferOptions extends BasicShapeOptions {
  vertexSize: number;
  colorSize: number;
}
