import {
  getCanvas,
  getContext,
} from './utils';

export const create = (query: string) => {
  const gl = getContext(getCanvas(query));
};
