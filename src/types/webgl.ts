export interface WebGLContext extends WebGL2RenderingContext {
  program: WebGLProgram;
}

export interface TriangleOptions {
  vertices: Float32Array;
  colors: Float32Array;
  indices: Uint8Array;
}

export interface VertexBufferOptions extends TriangleOptions {
  vertexSize: number;
  colorSize: number;
}
