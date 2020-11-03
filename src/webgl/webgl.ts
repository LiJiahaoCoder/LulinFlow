import {
  getCanvas,
  getContext,
  initShaders,
} from './utils';
import vshader from './shaders/vertex.glsl';
import fshader from './shaders/fragment.glsl';

export const create = (query: string) => {
  const gl = initShaders(
    getContext(getCanvas(query)),
    vshader,
    fshader,
  );
};

export default {
  create,
};
