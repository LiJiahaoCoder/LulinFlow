import { equal, ARRAY } from './common';

export default class Vec2 {
  public readonly elements: ARRAY_TYPE;

  constructor () {
    this.elements = new ARRAY( 2 );
    this.elements[ 0 ] = 0.0;
    this.elements[ 1 ] = 0.0;
  }

  /**
   * Get x of vec2
   *
   * @readonly
   * @type {number}
   */
  get x (): number {
    return this.elements[ 0 ];
  }

  /**
   * Get y of vec2
   *
   * @readonly
   * @type {number}
   */
  get y (): number {
    return this.elements[ 1 ];
  }

  /**
   * Create a new vec2 initialized with values from source vec2
   *
   * @param {Vec2} source
   * @returns {Vec2} New vec2
   */
  static clone ( source: Vec2 ): Vec2 {
    const cloned = new Vec2();
    cloned.set( source.elements[0], source.elements[1] );

    return cloned;
  }

  /**
   * Create a new vec2 initialized with given values
   *
   * @param {number} x X value
   * @param {number} y Y value
   * @returns {Vec2}
   */
  static fromValues ( x: number, y: number ): Vec2 {
    const vec2 = new Vec2();
    vec2.set( x, y );

    return vec2;
  }

  /**
   * Copy value2 from source vec2 to target vec2
   *
   * @param {Vec2} target Target vec2
   * @param {Vec2} source Source vec2
   * @returns {Vec2} Target vec2
   */
  static copy ( target: Vec2, source: Vec2 ): Vec2 {
    return target.set( source.x, source.y );
  }

  /**
   * Adds two vec2s
   *
   * @param {Vec2} v1 Vec2 to be added
   * @param {Vec2} v2 Another vec2 to be added
   * @returns {Vec2} Result of adding two vec2s
   */
  static add ( v1: Vec2, v2: Vec2 ): Vec2 {
    const res = new Vec2();

    return res.set(
      v1.x + v2.x,
      v1.y + v2.y,
    );
  }

  /**
   * Subtracts vec2 from another vec2
   *
   * @param {Vec2} v1 Vec2 to subtract
   * @param {Vec2} v2 Vec2 to be subtracted
   * @returns {Vec2} Result of subtracting two vec2s
   */
  static subtract ( v1: Vec2, v2: Vec2 ): Vec2 {
    const res = new Vec2();

    return res.set(
      v1.x - v2.x,
      v1.y - v2.y,
    );
  }

  /**
   * Multiply vec2 with another vec2
   *
   * @param {Vec2} v1 Vec2 to multiply
   * @param {Vec2} v2 Vec2 to be multiplied
   * @returns {Vec2} Result of multiplying two vec2s
   */
  static multiply ( v1: Vec2, v2: Vec2 ): Vec2 {
    const res = new Vec2();

    return res.set(
      v1.x * v2.x,
      v1.y * v2.y,
    );
  }

  /**
   * Divide vec2 with another vec2
   *
   * @param {Vec2} v1 Vec2 to divide
   * @param {Vec2} v2 Vec2 to be divided
   * @returns {Vec2} Result of dividing two vec2s
   */
  static divide ( v1: Vec2, v2: Vec2 ): Vec2 {
    const res = new Vec2();

    return res.set(
      v1.x / v2.x,
      v1.y / v2.y,
    );
  }

  /**
   * Scales a vec2 by a scalar number
   *
   * @static
   * @param {Vec2} vec2 Vec2 to be scaled
   * @param {number} scale Amount to scale the vector by
   * @returns {Vec2} New vec2
   */
  static scale ( vec2: Vec2, scale: number ): Vec2 {
    const res = new Vec2();
    res.set(
      vec2.x * scale,
      vec2.y * scale,
    );

    return res;
  }

  /**
   * Set new value of vector
   *
   * @param {number} x New x value
   * @param {number} y New y value
   * @returns {Vec2} Vec2
   */
  public set ( x: number, y: number ): Vec2 {
    return this.setX( x ).setY( y );
  }

  /**
   * Set new x value of vec2
   *
   * @param {number} x New x value
   * @returns {Vec2} Vec2
   */
  public setX ( x: number ): Vec2 {
    this.elements[ 0 ] = x;

    return this;
  }

  /**
   * Set new y value of vec2
   *
   * @param {number} y New y value
   * @returns {Vec2} Vec2
   */
  public setY ( y: number ): Vec2 {
    this.elements[ 1 ] = y;

    return this;
  }

  /**
   * Add a vec2
   *
   * @param {Vec2} vec2 Received vec2 to add
   * @returns {Vec2} Vec2
   */
  public add ( vec2: Vec2 ): Vec2 {
    return this.set(
      this.elements[ 0 ] + vec2.x,
      this.elements[ 1 ] + vec2.y,
    );
  }

  /**
   * Subtracts curren vec2 from another vec2
   *
   * @param {Vec2} vec2 Received vec2 to be subtracted
   * @returns {Vec2} Vec2
   */
  public subtract ( vec2: Vec2 ): Vec2 {
    return this.set(
      this.elements[ 0 ] - vec2.x,
      this.elements[ 1 ] - vec2.y,
    );
  }

  /**
   * Multiply curren vec2 from another vec2
   *
   * @param {Vec2} vec2 Received vec2 to be multiplied
   * @returns {Vec2} Vec2
   */
  public multiply ( vec2: Vec2 ): Vec2 {
    return this.set(
      this.elements[ 0 ] * vec2.x,
      this.elements[ 1 ] * vec2.y,
    );
  }

  /**
   * Divide curren vec2 from another vec2
   *
   * @param {Vec2} vec2 Received vec2 to be divided
   * @returns {Vec2} Vec2
   */
  public divide ( vec2: Vec2 ): Vec2 {
    return this.set(
      this.elements[ 0 ] / vec2.x,
      this.elements[ 1 ] / vec2.y,
    );
  }

  /**
   * Scales a vec2 by a scalar number
   *
   * @param {number} scale Amount to scale the vector by
   * @returns {Vec2} Vec2
   */
  public scale ( scale: number ): Vec2 {
    this.elements[ 0 ] = this.elements[ 0 ] * scale;
    this.elements[ 1 ] = this.elements[ 1 ] * scale;

    return this;
  }
}
