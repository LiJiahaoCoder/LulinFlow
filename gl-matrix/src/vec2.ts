import numeral from 'numeral';
import { toDegree, toRadian, ARRAY } from './common';

export default class Vec2 {
  public readonly elements: ArrayType;

  constructor ( pram: Vec2Constructor = { x: 0.0, y: 0.0 } ) {
    this.elements = new ARRAY( 2 );
    this.elements[ 0 ] = pram.x;
    this.elements[ 1 ] = pram.y;
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
   * Calculates the length of a vec2
   *
   * @readonly
   * @type {number}
   */
  get length (): number {
    return Math.sqrt( this.x * this.x + this.y * this.y );
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
      numeral( v1.x ).add( v2.x ).value(),
      numeral( v1.y ).add( v2.y ).value(),
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
      numeral( v1.x ).subtract( v2.x ).value(),
      numeral( v1.y ).subtract( v2.y ).value(),
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
      numeral( v1.x ).multiply( v2.x ).value(),
      numeral( v1.y ).multiply( v2.y ).value(),
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
      numeral( v1.x ).divide( v2.x ).value(),
      numeral( v1.y ).divide( v2.y ).value(),
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
      numeral( vec2.x ).multiply( scale ).value(),
      numeral( vec2.y ).multiply( scale ).value(),
    );

    return res;
  }

  /**
   * Calculates the euclidian distance between two vec2s
   *
   * @param {Vec2} v1 First vec2
   * @param {Vec2} v2 Second vec2
   * @returns {number} Distance of two vec2s
   */
  static distance ( v1: Vec2, v2: Vec2 ): number {
    const x = numeral( v1.x ).subtract( v2.x ).value();
    const y = numeral( v1.y ).subtract( v2.y ).value();

    return Math.sqrt( x * x + y * y );
  }

  /**
   * Calculates the dot result of two vec2s
   *
   * @param {Vec2} v1 First Vec2
   * @param {Vec2} v2 Second vec2
   * @returns {number} Result of dotting v1 and v2
   */
  static dot ( v1: Vec2, v2: Vec2 ): number {
    return numeral( v1.x )
      .multiply( v2.x )
      .add(
        numeral( v1.y ).multiply( v2.y ).value(),
      ).value();
  }

  /**
   * Performs a linear interpolation between two vec2s
   *
   * @param {Vec2} v1 First vec2
   * @param {Vec2} v2 Second vec2
   * @param {number} delta Interpolation amount, in the range [0-1]
   * @returns {Vec2} Vec2
   */
  static lerp ( v1: Vec2, v2: Vec2, delta: number): Vec2 {
    return new Vec2({
      x: numeral( v1.x ).add(
        delta * numeral( v2.x ).subtract( v1.x ).value(),
      ).value(),
      y: numeral( v1.y ).add(
        delta * numeral( v2.y ).subtract( v1.y ).value(),
      ).value(),
    });
  }

  /**
   * Generates a random vector with the given scale
   *
   * @param {number} scale Length of the resulting vector. If ommitted, a unit vector will be returned
   * @returns {Vec2} Vec2
   */
  static random ( scale: number = 1.0 ): Vec2 {
    const r = Math.random() * 2.0 * Math.PI;

    return new Vec2({
      x: Math.cos(r) * scale,
      y: Math.sin(r) * scale,
    });
  }

  /**
   * Get the angle between two 2D vectors
   *
   * @param {Vec2} v1 First vec2
   * @param {Vec2} v2 Second vec2
   * @returns {number} Angle in degrees
   */
  static angle ( v1: Vec2, v2: Vec2 ): number {
    let len1 = 0;
    let len2 = 0;
    if ( v1.length > 0 ) {
      len1 = 1 / v1.length;
    }
    if ( v2.length > 0 ) {
      len2 = 1 / v2.length;
    }

    const cos = numeral( v1.x * v2.x )
      .add( v1.y * v2.y )
      .multiply( len1 )
      .multiply( len2 )
      .value();

    if ( cos > 1.0 || len1 === 0 ) {
      return toDegree( 0 );
    } else if ( cos < -1.0 || len2 === 0 ) {
      return toDegree( Math.PI );
    } else {
      return toDegree( Math.acos( cos ) );
    }
  }

  /**
   * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
   *
   * @static
   * @param {Vec2} v1 First vec2
   * @param {Vec2} v2 Second vec2
   * @returns {boolean} True if the vectors are equal, false otherwise
   */
  static exactEquals ( v1: Vec2, v2: Vec2 ): boolean {
    return v1.x === v2.x && v1.y === v2.y;
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
      numeral( this.x ).add( vec2.x ).value(),
      numeral( this.y ).add( vec2.y ).value(),
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
      numeral( this.x ).subtract( vec2.x ).value(),
      numeral( this.y ).subtract( vec2.y ).value(),
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
      numeral( this.x ).multiply( vec2.x ).value(),
      numeral( this.y ).multiply( vec2.y ).value(),
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
      numeral( this.x ).divide( vec2.x ).value(),
      numeral( this.y ).divide( vec2.y ).value(),
    );
  }

  /**
   * Scales a vec2 by a scalar number
   *
   * @param {number} scale Amount to scale the vector by
   * @returns {Vec2} Vec2
   */
  public scale ( scale: number ): Vec2 {
    this.elements[ 0 ] = numeral( this.x ).multiply( scale ).value();
    this.elements[ 1 ] = numeral( this.y ).multiply( scale ).value();

    return this;
  }

  /**
   * Negates the values of a vec2
   *
   * @returns {Vec2} Vec2
   */
  public negate (): Vec2 {
    this.elements[ 0 ] = -this.x;
    this.elements[ 1 ] = -this.y;

    return this;
  }

  /**
   * Returns the inverse of the values of a vec2
   *
   * @returns {Vec2} Vec2
   */
  public inverse (): Vec2 {
    return this.set(
      numeral( 1.0 ).divide( this.x ).value(),
      numeral( 1.0 ).divide( this.y ).value(),
    );
  }

  /**
   * Normalize a vec2
   *
   * @returns {Vec2} Vec2
   */
  public normalize (): Vec2 {
    if ( this.length > 0 ) {
      this.set(
        this.x / this.length,
        numeral( this.y ).divide( this.length ).value(),
      );
    }

    return this;
  }

  /**
   * Rotate a 2D vector
   *
   * @param {number} angle The angle of rotation with degree
   * @param {Vec2} [origin=new Vec2()] The origin of the rotation
   * @returns {Vec2} Vec2
   */
  public rotate ( angle: number, origin: Vec2 = new Vec2() ): Vec2 {
    const sin = Math.sin( toRadian( angle ) );
    const cos = Math.cos( toRadian( angle ) );
    const deltaX = this.x - origin.x;
    const deltaY = this.y - origin.y;

    this.set(
      numeral( deltaX * cos ).subtract( deltaY * sin ).add( origin.x ).value(),
      numeral( deltaX * sin ).add( deltaY * cos ).add( origin.y ).value(),
    );

    return this;
  }
}
