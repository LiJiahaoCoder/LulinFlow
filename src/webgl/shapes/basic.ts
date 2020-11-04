import { mat4 } from 'gl-matrix';
import { BasicShapeOptions } from '@/types/webgl';

abstract class BasicShape {
  vertices: Float32Array;
  colors: Float32Array;
  indices: Uint8Array;

  constructor (options: BasicShapeOptions) {
    this.vertices = options.vertices;
    this.colors = options.colors;
    this.indices = options.indices;
  }

  abstract rotate (rotateMatrix: mat4): this;

  abstract scale (scaleMatrix: mat4): this;

  abstract translation (translationMat: mat4): this;
}

export default BasicShape;
