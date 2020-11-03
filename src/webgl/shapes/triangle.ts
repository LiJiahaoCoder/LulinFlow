import { WebGLContext, TriangleOptions } from '@/types/webgl';
import { initVertexBuffer } from '../utils';

export const createTriangle = (gl: WebGLContext, options: TriangleOptions) => {
  const { vertices, colors, indices } = options;
  initVertexBuffer(
    gl,
    {
      vertices,
      colors,
      indices,
      vertexSize: 3,
      colorSize: 3,
    },
  );
  gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_BYTE, 0);
};

export default {
  createTriangle,
};
