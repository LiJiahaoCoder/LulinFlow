import { equal } from '../src/common';
import Vec3 from '../src/vec3';

describe('Tests of vec3', () => {
  it('should get initial vec3', () => {
    const vec3 = new Vec3();

    expect( vec3.x ).toBe( 0.0 );
    expect( vec3.y ).toBe( 0.0 );
    expect( vec3.z ).toBe( 0.0 );
  });

  it('should get initial vec3 with specified value', () => {
    const vec3 = new Vec3({ x: 1.0, y: 2.0, z: 3.0 });

    expect( vec3.x ).toBe( 1.0 );
    expect( vec3.y ).toBe( 2.0 );
    expect( vec3.z ).toBe( 3.0 );
  });

  it('should get the same vec3 when call clone static method', () => {
    const source = new Vec3({ x: 1.0, y: 1.0, z: 1.5 });
    const cloned = Vec3.clone( source );

    expect( source.x ).toBe( cloned.x );
    expect( source.y ).toBe( cloned.y );
    expect( source.z ).toBe( cloned.z );
  });

  it('should get correct value when set new value', () => {
    const vec3 = new Vec3();
    vec3.set( 1.0, 2.0, 3.0);

    expect( vec3.x ).toBe( 1.0 );
    expect( vec3.y ).toBe( 2.0 );
    expect( vec3.z ).toBe( 3.0 );
  });

  it('should get correct value of x when setX', () => {
    const vec3 = new Vec3();
    vec3.setX( 5.0 );

    expect( vec3.x ).toBe( 5.0 );
  });

  it('should get correct value of y when setY', () => {
    const vec3 = new Vec3();
    vec3.setY( 1.0 );

    expect( vec3.y ).toBe( 1.0 );
  });

  it('should get correct value of z when setZ', () => {
    const vec3 = new Vec3();
    vec3.setZ( 6.0 );

    expect( vec3.z ).toBe( 6.0 );
  });

  it('should get copied vec3 when call copy static method', () => {
    const source = new Vec3({ x: 2.2, y: 2.8, z: 7.1 });
    const target = new Vec3();

    Vec3.copy( target, source );

    expect( target.x ).toBe( source.x );
    expect( target.y ).toBe( source.y );
    expect( target.z ).toBe( source.z );
  });

  it('should get added vec3 when call add method', () => {
    const v1 = new Vec3();
    const v2 = new Vec3({ x: 1.0, y: 4.0, z: 3.0 });

    v1.add( v2 );

    expect( v1.x ).toBe( 1.0 );
    expect( v1.y ).toBe( 4.0 );
    expect( v1.z ).toBe( 3.0 );
  });

  it('should get a new added vec3 when call add static method', () => {
    const v1 = new Vec3();
    const v2 = new Vec3({ x: 1.0, y: 4.0, z: 3.0 });

    const res = Vec3.add( v1, v2 );

    expect( res.x ).toBe( 1.0 );
    expect( res.y ).toBe( 4.0 );
    expect( res.z ).toBe( 3.0 );
  });

  it('should get subtracted vec3 when call subtract method', () => {
    const v1 = new Vec3();
    const v2 = new Vec3({ x: 1.0, y: 4.0, z: 3.0 });

    v1.subtract( v2 );

    expect( v1.x ).toBe( -1.0 );
    expect( v1.y ).toBe( -4.0 );
    expect( v1.z ).toBe( -3.0 );
  });

  it('should get a new subtracted vec3 when call subtract static method', () => {
    const v1 = new Vec3();
    const v2 = new Vec3({ x: 1.0, y: 4.0, z: 3.0 });

    const res = Vec3.subtract( v1, v2 );

    expect( res.x ).toBe( -1.0 );
    expect( res.y ).toBe( -4.0 );
    expect( res.z ).toBe( -3.0 );
  });

  it('should get multiplied vec3 when call multiply method', () => {
    const v1 = new Vec3({ x: 2.0, y: 0.2, z: -1.0 });
    const v2 = new Vec3({ x: 1.0, y: 4.0, z: 3.0 });

    v1.multiply( v2 );

    expect( equal( v1.x, 2.0) ).toBeTruthy();
    expect( equal( v1.y, 0.8) ).toBeTruthy();
    expect( equal( v1.z, -3.0) ).toBeTruthy();
  });

  it('should get a new multiplied vec3 when call multiply static method', () => {
    const v1 = new Vec3({ x: 2.0, y: 0.2, z: -1.0 });
    const v2 = new Vec3({ x: 1.0, y: 4.0, z: 3.0 });

    const res = Vec3.multiply( v1, v2 );

    expect( equal( res.x, 2.0) ).toBeTruthy();
    expect( equal( res.y, 0.8) ).toBeTruthy();
    expect( equal( res.z, -3.0) ).toBeTruthy();
  });

  it('should get divided vec3 when call divide method', () => {
    const v1 = new Vec3({ x: 2.0, y: 0.2, z: -1.0 });
    const v2 = new Vec3({ x: 1.0, y: 0.1, z: -1.0 });

    v1.divide( v2 );

    expect( equal( v1.x, 2.0) ).toBeTruthy();
    expect( equal( v1.y, 2.0) ).toBeTruthy();
    expect( equal( v1.z, 1.0) ).toBeTruthy();
  });

  it('should get a new divided vec3 when call divide static method', () => {
    const v1 = new Vec3({ x: 2.0, y: 0.2, z: -1.0 });
    const v2 = new Vec3({ x: 1.0, y: 0.1, z: -1.0 });

    const res = Vec3.divide( v1, v2 );

    expect( equal( res.x, 2.0) ).toBeTruthy();
    expect( equal( res.y, 2.0) ).toBeTruthy();
    expect( equal( res.z, 1.0) ).toBeTruthy();
  });

  it('should get correct length of a vec3', () => {
    const vec3 = new Vec3({ x: 1.0, y: 2.0, z: 2.0 });

    expect( equal( vec3.length, 3.0 ) ).toBeTruthy();
  });

  it('should get scaled vec3 when call scale method', () => {
    const v1 = new Vec3({ x: 2.0, y: 0.2, z: -1.0 });

    v1.scale( 2.0 );

    expect( equal( v1.x, 4.0) ).toBeTruthy();
    expect( equal( v1.y, 0.4) ).toBeTruthy();
    expect( equal( v1.z, -2.0) ).toBeTruthy();
  });

  it('should get a new scaled vec3 when call scale static method', () => {
    const v1 = new Vec3({ x: 2.0, y: 0.2, z: -1.0 });

    const res = Vec3.scale( v1, 2.0 );

    expect( equal( res.x, 4.0) ).toBeTruthy();
    expect( equal( res.y, 0.4) ).toBeTruthy();
    expect( equal( res.z, -2.0) ).toBeTruthy();
  });
});
