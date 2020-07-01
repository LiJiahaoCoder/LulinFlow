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

  it('should get correct distance between two vec3s', () => {
    const v1 = new Vec3();
    const v2 = new Vec3({ x: 1.0, y: 2.0, z: -2.0 });

    const distance = Vec3.distance( v1, v2 );

    expect( equal( distance, 3.0 ) ).toBeTruthy();
  });

  it('should get inversed vec3 when call inverse method', () => {
    const vec3 = new Vec3({ x: 1.0, y: 3.0, z: 4.0 });

    vec3.inverse();

    expect( equal( vec3.x, 1.0 ) ).toBeTruthy();
    expect( equal( vec3.y, 1.0 / 3.0 ) ).toBeTruthy();
    expect( equal( vec3.z, 0.25 ) ).toBeTruthy();
  });

  it('should get normalized vec3 when call normalize method', () => {
    const vec3 = new Vec3({ x: 1.0, y: 2.0, z: 2.0 });

    vec3.normalize();

    expect( equal( vec3.x, 1.0 / 3.0 ) ).toBeTruthy();
    expect( equal( vec3.y, 2.0 / 3.0 ) ).toBeTruthy();
    expect( equal( vec3.z, 2.0 / 3.0 ) ).toBeTruthy();
  });

  it('should get origin vec3 when call normalize method and vec3 is 0', () => {
    const vec3 = new Vec3({ x: 0.0, y: 0.0, z: 0.0 });

    vec3.normalize();

    expect( equal( vec3.x, 0.0 ) ).toBeTruthy();
    expect( equal( vec3.y, 0.0 ) ).toBeTruthy();
    expect( equal( vec3.z, 0.0 ) ).toBeTruthy();
  });

  it('should get dotted result when call dot method', () => {
    const v1 = new Vec3({ x: 1.0, y: 2.0, z: 2.0 });
    const v2 = new Vec3({ x: 0.8, y: -6.0, z: 1.0 });

    const res = Vec3.dot( v1, v2 );

    expect( equal( res, -9.2 ) ).toBeTruthy();
  });

  it('should get cross dot result when call cross method', () => {
    const v1 = new Vec3({ x: 1.0, y: 2.0, z: 3.0 });
    const v2 = new Vec3({ x: -1.1, y: 0.9, z: 2.0 });

    const res = Vec3.cross( v1, v2 );

    expect( equal( res.x, 1.3 ) ).toBeTruthy();
    expect( equal( res.y, -5.3 ) ).toBeTruthy();
    expect( equal( res.z, 3.1 ) ).toBeTruthy();
  });

  it('should get correct lerpped vec3 when call lerp method', () => {
    const v1 = new Vec3();
    const v2 = new Vec3({ x: 1.0, y: 5.0, z: 2.0 });

    const res = Vec3.lerp( v1, v2, 0.5 );

    expect( equal( res.x, 0.5 ) ).toBeTruthy();
    expect( equal( res.y, 2.5 ) ).toBeTruthy();
    expect( equal( res.z, 1.0 ) ).toBeTruthy();
  });

  it('should get a random vec3 with scale length when call random method', () => {
    const vec3 = Vec3.random( 2.0 );

    expect( equal( vec3.length, 2.0 ) ).toBeTruthy();
  });

  it('should get a random vec3 when call static random method', () => {
    const vec3 = Vec3.random( 2.0 );

    expect( vec3.x <= 2.0 && vec3.x >= -2.0 ).toBeTruthy();
    expect( vec3.y <= 2.0 && vec3.y >= -2.0 ).toBeTruthy();
    expect( vec3.z <= 2.0 && vec3.z >= -2.0 ).toBeTruthy();
  });

  it('should get a random vec3 without param length when call random method', () => {
    const vec3 = Vec3.random();

    expect( equal( vec3.length, 1.0 ) ).toBeTruthy();
  });

  it('should get a random vec3 when call static random method', () => {
    const vec3 = Vec3.random();

    expect( vec3.x <= 1.0 && vec3.x >= -1.0 ).toBeTruthy();
    expect( vec3.y <= 1.0 && vec3.y >= -1.0 ).toBeTruthy();
    expect( vec3.z <= 1.0 && vec3.z >= -1.0 ).toBeTruthy();
  });

  it('should get first point when t is 0', () => {
    const v1 = new Vec3({ x: 1.0, y: 1.0, z: 1.0 });
    const v2 = new Vec3({ x: 4.0, y: 4.0, z: 4.0 });
    const v3 = new Vec3({ x: 6.0, y: 6.0, z: 6.0 });
    const v4 = new Vec3({ x: 10.0, y: 10.0, z: 10.0 });

    const res = Vec3.bezier( v1, v2, v3, v4, 0.0 );

    expect( res.x ).toBe( v1.x );
    expect( res.y ).toBe( v1.y );
    expect( res.z ).toBe( v1.z );
  });

  it('should get last point when t is 1', () => {
    const v1 = new Vec3({ x: 1.0, y: 1.0, z: 1.0 });
    const v2 = new Vec3({ x: 4.0, y: 4.0, z: 4.0 });
    const v3 = new Vec3({ x: 6.0, y: 6.0, z: 6.0 });
    const v4 = new Vec3({ x: 10.0, y: 10.0, z: 10.0 });

    const res = Vec3.bezier( v1, v2, v3, v4, 1.0 );

    expect( res.x ).toBe( v4.x );
    expect( res.y ).toBe( v4.y );
    expect( res.z ).toBe( v4.z );
  });

  it('should get correct point when t is 0.5', () => {
    const v1 = new Vec3({ x: 1.0, y: 1.0, z: 1.0 });
    const v2 = new Vec3({ x: 4.0, y: 4.0, z: 4.0 });
    const v3 = new Vec3({ x: 6.0, y: 6.0, z: 6.0 });
    const v4 = new Vec3({ x: 10.0, y: 10.0, z: 10.0 });

    const res = Vec3.bezier( v1, v2, v3, v4, 0.5 );

    expect( equal( res.x, 5.125 ) ).toBeTruthy();
    expect( equal( res.y, 5.125 ) ).toBeTruthy();
    expect( equal( res.z, 5.125 ) ).toBeTruthy();
  });

  it('should get correct vec3 when call rotateX method', () => {
    const vec3 = new Vec3({ x: 0.0, y: 0.0, z: 2.0 });
    const origin = new Vec3();

    vec3.rotateX( origin, 45 );

    expect( equal( vec3.x, 0 ) ).toBeTruthy();
    expect( equal( vec3.y, -Math.sqrt( 2 ) ) ).toBeTruthy();
    expect( equal( vec3.z, Math.sqrt( 2 ) ) ).toBeTruthy();
  });

  it('should get correct vec3 when call rotateY method', () => {
    const vec3 = new Vec3({ x: 0.0, y: 0.0, z: 2.0 });
    const origin = new Vec3();

    vec3.rotateY( origin, 45 );

    expect( equal( vec3.x, Math.sqrt( 2 ) ) ).toBeTruthy();
    expect( equal( vec3.y, 0 ) ).toBeTruthy();
    expect( equal( vec3.z, Math.sqrt( 2 ) ) ).toBeTruthy();
  });

  it('should get correct vec3 when call rotateZ method', () => {
    const vec3 = new Vec3({ x: 2.0, y: 0.0, z: 0.0 });
    const origin = new Vec3();

    vec3.rotateZ( origin, 45 );

    expect( equal( vec3.x, Math.sqrt( 2 ) ) ).toBeTruthy();
    expect( equal( vec3.y, Math.sqrt( 2 ) ) ).toBeTruthy();
    expect( equal( vec3.z, 0 ) ).toBeTruthy();
  });

  it('should get 0 when call angle static method given cosine is greater than 1.0', () => {
    const v1 = new Vec3();
    const v2 = new Vec3();

    const spy = jest.spyOn( Vec3, 'dot' );
    spy.mockReturnValueOnce( 2.0 );

    const angle = Vec3.angle( v1, v2 );

    expect( angle ).toBe( 0.0 );
  });

  it('should get 180 when call angle static method given cosine is less than -1.0', () => {
    const v1 = new Vec3();
    const v2 = new Vec3();

    const spy = jest.spyOn( Vec3, 'dot' );
    spy.mockReturnValueOnce( -2.0 );

    const angle = Vec3.angle( v1, v2 );

    expect( equal( angle, 180.0 ) ).toBeTruthy();
  });

  it('should get 45 when call angle static method given 2 specified vec3s', () => {
    const v1 = new Vec3({ x: 1.0, y: 0.0, z: 0.0 });
    const v2 = new Vec3({ x: 2.0, y: 2.0, z: 0.0 });

    const angle = Vec3.angle( v1, v2 );

    expect( equal( angle, 45.0 ) ).toBeTruthy();
  });

  it('should get true when two vec3s is exactly equal', () => {
    const v1 = new Vec3();
    const v2 = new Vec3();

    const result = Vec3.exactEquals( v1, v2 );

    expect( result ).toBeTruthy();
  });

  it('should get false when two vec3 is not equal', () => {
    const v1 = new Vec3();
    const v2 = new Vec3({ x: 0.0001, y: 0.0, z: 0.0 });

    const result = Vec3.exactEquals( v1, v2 );

    expect( result ).toBeFalsy();
  });
});
