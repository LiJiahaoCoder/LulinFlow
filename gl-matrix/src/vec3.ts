import { ARRAY } from './common';

export default class Vec3 {
  public readonly elements: ArrayType;

  constructor ( param: Vec3Constructor = { x: 0.0, y: 0.0, z: 0.0 }) {
    this.elements = new ARRAY( 3 );
    this.elements[ 0 ] = param.x;
    this.elements[ 1 ] = param.y;
    this.elements[ 2 ] = param.z;
  }

  /**
   * Get x of vec3
   *
   * @readonly
   * @type {number}
   */
  get x (): number {
    return this.elements[ 0 ];
  }

  /**
   * Get y of vec3
   *
   * @readonly
   * @type {number}
   */
  get y (): number {
    return this.elements[ 1 ];
  }

  /**
   * Get z of vec3
   *
   * @readonly
   * @type {number}
   */
  get z (): number {
    return this.elements[ 2 ];
  }
}
