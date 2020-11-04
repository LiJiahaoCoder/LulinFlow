import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createWebGL } from '@/webgl';
import { WebGLContext } from '@/types/webgl';
import Triangle from '@/webgl/shapes/triangle';

const vertices = new Float32Array([
  1, 1, 1,  -1, 1, 1,  -1,-1, 1,
  1,-1, 1,
  1, 1, 1,   1,-1, 1,   1,-1,-1,   1, 1,-1,
  1, 1, 1,   1, 1,-1,  -1, 1,-1,  -1, 1, 1,
  -1, 1, 1,  -1, 1,-1,  -1,-1,-1,  -1,-1, 1,
  -1,-1,-1,   1,-1,-1,   1,-1, 1,  -1,-1, 1,
  1,-1,-1,  -1,-1,-1,  -1, 1,-1,   1, 1,-1,
]);
const colors = new Float32Array([
  0.4, 0.4, 1.0,  0.4, 0.4, 1.0,  0.4, 0.4, 1.0,
  0.4, 0.4, 1.0,
  0.4, 1.0, 0.4,  0.4, 1.0, 0.4,  0.4, 1.0, 0.4,  0.4, 1.0, 0.4,
  1.0, 0.4, 0.4,  1.0, 0.4, 0.4,  1.0, 0.4, 0.4,  1.0, 0.4, 0.4,
  1.0, 1.0, 0.4,  1.0, 1.0, 0.4,  1.0, 1.0, 0.4,  1.0, 1.0, 0.4,
  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,
  0.4, 1.0, 1.0,  0.4, 1.0, 1.0,  0.4, 1.0, 1.0,  0.4, 1.0, 1.0,
]);
const indices = new Uint8Array([
   0, 1, 2,
   0, 2, 3,
   4, 5, 6,   4, 6, 7,
   8, 9,10,   8,10,11,
  12,13,14,  12,14,15,
  16,17,18,  16,18,19,
  20,21,22,  20,22,23,
]);

const App: React.FC = () => {
  const [gl, setGL] = useState<WebGLContext>();
  const [shape, setShape] = useState<Triangle>();

  useEffect(() => {
    const _gl = createWebGL('#webgl');
    setGL(_gl);
  }, []);

  useEffect(() => {
    if (gl) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.clear(gl.COLOR_BUFFER_BIT || gl.DEPTH_BUFFER_BIT);
      setShape(new Triangle(gl, { vertices, colors, indices }));
    }
  }, [gl]);

  useEffect(() => {
    if (shape) {
      shape.create();
    }
  }, [shape]);

  return (
    <canvas id='webgl' width='800' height='600' />
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
);
