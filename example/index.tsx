import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createWebGL } from '@/webgl';
import { WebGLContext } from '@/types/webgl';
import Triangle from '@/webgl/shapes/triangle';

const vertices = new Float32Array([
  0.5, -0.5, 1,  0, 0.5, 1,  -0.5, -0.5, 1,
]);
const colors = new Float32Array([
  0.4, 0.4, 1.0,
  0.4, 1.0, 0.4,
  1.0, 0.4, 0.4,
]);
const indices = new Uint8Array([
   0, 1, 2,
]);

const App: React.FC = () => {
  const [gl, setGL] = useState<WebGLContext>();
  const [, setShape] = useState<Triangle>();

  useEffect(() => {
    const _gl = createWebGL('#webgl');
    setGL(_gl);
  }, []);

  useEffect(() => {
    if (gl) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      setShape(new Triangle(gl, { vertices, colors, indices }));
    }
  }, [gl]);

  return (
    <canvas id='webgl' width='1200' height='800' />
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
);
