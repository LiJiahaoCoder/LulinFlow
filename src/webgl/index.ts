import {
  getCanvas,
  getContext,
  initShaders,
} from './utils';
import vshader from './shaders/vertex.glsl';
import fshader from './shaders/fragment.glsl';

export const createWebGL = (query: string) => (
  initShaders(
    getContext(getCanvas(query)),
    vshader,
    fshader,
  )
);
