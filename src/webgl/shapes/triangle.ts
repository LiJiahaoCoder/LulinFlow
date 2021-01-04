import { mat4 } from 'gl-matrix';
import { BasicShapeOptions, WebGLContext } from '@/types/webgl';
import { initVertexBuffer } from '../utils';
import BasicShape from './basic';

class Triangle extends BasicShape {
  gl: WebGLContext;

  constructor (gl: WebGLContext, options: BasicShapeOptions) {
    super(options);
    this.gl = gl;
    this.create();
  }

  rotate (rotateMat: mat4) {
    return this;
  }

  scale (scaleMat: mat4) {
    return this;
  }

  translation (translationMat: mat4) {
    return this;
  }

  private create () {
    initVertexBuffer(
      this.gl,
      {
        vertices: this.vertices,
        colors: this.colors,
        indices: this.indices,
        vertexSize: 3,
        colorSize: 3,
      },
    );
    this.gl.drawElements(
      this.gl.TRIANGLES,
      this.indices.length,
      this.gl.UNSIGNED_BYTE,
      0,
    );

    return this;
  }
}

export default Triangle;
