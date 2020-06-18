import numeral from 'numeral';
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

  /**
   * Calculates the length of a vec3
   *
   * @readonly
   * @type {number}
   */
  get length (): number {
    const { x, y, z } = this;

    return Math.sqrt( x * x + y * y + z * z );
  }

  /**
   * Create a new vec3 initialized with values from source vec3
   *
   * @static
   * @param {Vec3} source
   * @returns {Vec3} New vec3
   */
  static clone ( source: Vec3 ): Vec3 {
    return new Vec3({
      x: source.x,
      y: source.y,
      z: source.z,
    });
  }

  /**
   * Copy values from source vec3 to target vec3
   *
   * @param {Vec3} target Target vec3
   * @param {Vec3} source Source vec3
   * @returns {Vec3} Target vec3
   */
  static copy ( target: Vec3, source: Vec3 ): Vec3 {
    return target.set( source.x, source.y, source.z );
  }

  /**
   * Adds two vec3s
   *
   * @param {Vec3} v1 Vec3 to be added
   * @param {Vec3} v2 Another vec3 to be added
   * @returns {Vec3} New vec3
   */
  static add ( v1: Vec3, v2: Vec3 ): Vec3 {
    return new Vec3({
      x: numeral( v1.x ).add( v2.x ).value(),
      y: numeral( v1.y ).add( v2.y ).value(),
      z: numeral( v1.z ).add( v2.z ).value(),
    });
  }

  /**
   * Subtracts vec3 from another vec3
   *
   * @param {Vec3} v1 Vec3 to subtract
   * @param {Vec3} v2 Vec3 to be subtracted
   * @returns {Vec3} Result of subtracting two vec3s
   */
  static subtract ( v1: Vec3, v2: Vec3 ): Vec3 {
    const res = new Vec3();

    return res.set(
      numeral( v1.x ).subtract( v2.x ).value(),
      numeral( v1.y ).subtract( v2.y ).value(),
      numeral( v1.z ).subtract( v2.z ).value(),
    );
  }

  /**
   * Multiply vec3 with another vec3
   *
   * @param {Vec3} v1 Vec3 to multiply
   * @param {Vec3} v2 Vec3 to be multiplied
   * @returns {Vec3} Result of multiplying two vec3s
   */
  static multiply ( v1: Vec3, v2: Vec3 ): Vec3 {
    const res = new Vec3();

    return res.set(
      numeral( v1.x ).multiply( v2.x ).value(),
      numeral( v1.y ).multiply( v2.y ).value(),
      numeral( v1.z ).multiply( v2.z ).value(),
    );
  }

  /**
   * Divide vec3 with another vec3
   *
   * @param {Vec3} v1 Vec3 to divide
   * @param {Vec3} v2 Vec3 to be divided
   * @returns {Vec3} Result of dividing two vec3s
   */
  static divide ( v1: Vec3, v2: Vec3 ): Vec3 {
    const res = new Vec3();

    return res.set(
      numeral( v1.x ).divide( v2.x ).value(),
      numeral( v1.y ).divide( v2.y ).value(),
      numeral( v1.z ).divide( v2.z ).value(),
    );
  }

  /**
   * Scales a vec3 by a scalar number
   *
   * @static
   * @param {Vec3} vec3 Vec3 to be scaled
   * @param {number} scale Amount to scale the vector by
   * @returns {Vec3} New vec3
   */
  static scale ( vec3: Vec3, scale: number ): Vec3 {
    const res = new Vec3();
    res.set(
      numeral( vec3.x ).multiply( scale ).value(),
      numeral( vec3.y ).multiply( scale ).value(),
      numeral( vec3.z ).multiply( scale ).value(),
    );

    return res;
  }

  /**
   * Set new value of vector
   *
   * @param {number} x New x value
   * @param {number} y New y value
   * @param {number} z New z value
   * @returns {Vec3} Vec3
   */
  public set ( x: number, y: number, z: number ): Vec3 {
    return this.setX( x ).setY( y ).setZ( z );
  }

  /**
   * Set new x value of vec3
   *
   * @param {number} x New x value
   * @returns {Vec3} Vec3
   */
  public setX ( x: number ): Vec3 {
    this.elements[ 0 ] = x;

    return this;
  }

  /**
   * Set new y value of vec3
   *
   * @param {number} y New y value
   * @returns {Vec3} Vec3
   */
  public setY ( y: number ): Vec3 {
    this.elements[ 1 ] = y;

    return this;
  }

  /**
   * Set new z value of vec3
   *
   * @param {number} z New z value
   * @returns {Vec3} Vec3
   */
  public setZ ( z: number ): Vec3 {
    this.elements[ 2 ] = z;

    return this;
  }

  /**
   * Add a vec3
   *
   * @param {Vec3} vec3 Received vec3 to add
   * @returns {Vec3} Vec3
   */
  public add ( vec3: Vec3 ): Vec3 {
    return this.set(
      numeral( this.x ).add( vec3.x ).value(),
      numeral( this.y ).add( vec3.y ).value(),
      numeral( this.z ).add( vec3.z ).value(),
    );
  }

  /**
   * Subtracts curren vec3 from another vec3
   *
   * @param {Vec3} vec3 Received vec3 to be subtracted
   * @returns {Vec3} Vec3
   */
  public subtract ( vec3: Vec3 ): Vec3 {
    return this.set(
      numeral( this.x ).subtract( vec3.x ).value(),
      numeral( this.y ).subtract( vec3.y ).value(),
      numeral( this.z ).subtract( vec3.z ).value(),
    );
  }

  /**
   * Multiply curren vec3 from another vec3
   *
   * @param {Vec3} vec3 Received vec3 to be multiplied
   * @returns {Vec3} Vec3
   */
  public multiply ( vec3: Vec3 ): Vec3 {
    return this.set(
      numeral( this.x ).multiply( vec3.x ).value(),
      numeral( this.y ).multiply( vec3.y ).value(),
      numeral( this.z ).multiply( vec3.z ).value(),
    );
  }

  /**
   * Divide curren vec3 from another vec3
   *
   * @param {Vec3} vec3 Received vec3 to be divided
   * @returns {Vec3} Vec3
   */
  public divide ( vec3: Vec3 ): Vec3 {
    return this.set(
      numeral( this.x ).divide( vec3.x ).value(),
      numeral( this.y ).divide( vec3.y ).value(),
      numeral( this.z ).divide( vec3.z ).value(),
    );
  }

  /**
   * Scales a vec3 by a scalar number
   *
   * @param {number} scale Amount to scale the vector by
   * @returns {Vec3} Vec3
   */
  public scale ( scale: number ): Vec3 {
    this.set(
      numeral( this.x ).multiply( scale ).value(),
      numeral( this.y ).multiply( scale ).value(),
      numeral( this.z ).multiply( scale ).value(),
    );

    return this;
  }
}
