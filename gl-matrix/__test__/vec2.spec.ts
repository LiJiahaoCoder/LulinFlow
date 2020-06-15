import { equal } from '../src/common';
import Vec2 from '../src/vec2';

it('should get a vec2 with initial value', () => {
  const vec2 = new Vec2();

  expect( vec2.x ).toBe( 0.0 );
  expect( vec2.y ).toBe( 0.0 );
});

it('should get correct x and y value', () => {
  const vec2 = new Vec2();

  expect( vec2.x ).toBe( 0.0 );
  expect( vec2.y ).toBe( 0.0 );
});

it('should get initialized values of x and y', () => {
  const vec2 = new Vec2({ x: 2.0, y: 9.0 });

  expect( vec2.x ).toBe( 2.0 );
  expect( vec2.y ).toBe( 9.0 );
});

it('should get correct length of a vec2', () => {
  const vec2 = new Vec2();
  vec2.set( 3.0, 4.0 );

  expect( vec2.length ).toBe( 5.0 );
});

it('should get [10.0, 0.0] when call setX method given a new vec2', () => {
  const vec2 = new Vec2();
  vec2.setX( 10.0 );

  expect( vec2.x ).toBe( 10.0 );
  expect( vec2.y ).toBe( 0.0 );
});

it('should get [0.0, 6.0] when call setY method given a new vec2', () => {
  const vec2 = new Vec2();
  vec2.setY( 6.0 );

  expect( vec2.x ).toBe( 0.0 );
  expect( vec2.y ).toBe( 6.0 );
});

it('should get [1.0, 2.0] when call set method given a new vec2', () => {
  const vec2 = new Vec2();
  vec2.set( 1.0, 2.0 );

  expect( vec2.x ).toBe( 1.0 );
  expect( vec2.y ).toBe( 2.0 );
});

it('should get a same vec2 when call clone method given a specified vec2', () => {
  const target = new Vec2();
  target.set( 2.0, 5.0 );
  const cloned = Vec2.clone( target );

  expect( cloned.x ).toBe( target.x );
  expect( cloned.y ).toBe( target.y );
});

it('should get [2.0, 8.0] when call fromValues given x is 2.0 and y is 8.0', () => {
  const x = 2.0;
  const y = 8.0;
  const vec2 = Vec2.fromValues( x, y );

  expect( vec2.x ).toBe( x );
  expect( vec2.y ).toBe( y );
});

it('should get 2 vec2s with same value when call copy method given target vec2 and source vec2', () => {
  const target = new Vec2();
  const source = new Vec2();
  source.set( 9.0, 7.0 );

  Vec2.copy( target, source);

  expect( target.x ).toBe( source.x);
  expect( target.y ).toBe( source.y);
});

it('should get result of adding two vec2s when call add method given 2 vec2s', () => {
  const target = new Vec2();
  target.set( 2.0, 3.0 );
  const vec2 = new Vec2();
  vec2.set( -1.0, 1.0 );

  vec2.add( target );

  expect( vec2.x ).toBe( 1.0 );
  expect( vec2.y ).toBe( 4.0 );
});

it('should get result of adding two vec2s when call static add method given 2 vec2s', () => {
  const vec2 = new Vec2();
  vec2.set( 2.0, 3.0 );
  const anotherVec2 = new Vec2();
  anotherVec2.set( -1.0, 1.0 );

  const result = Vec2.add( vec2, anotherVec2 );

  expect( result.x ).toBe( 1.0 );
  expect( result.y ).toBe( 4.0 );
});

it('should get result of subtracting two vec2s when call subtract method given 2 vec2s', () => {
  const subtracted = new Vec2();
  subtracted.set( 2.0, 3.0 );
  const vec2 = new Vec2();
  vec2.subtract( subtracted );

  expect( vec2.x ).toBe( -2.0 );
  expect( vec2.y ).toBe( -3.0 );
});

it('should get result of subtracting two vec2s when call static subtract method given 2 vec2s', () => {
  const vec2 = new Vec2();
  vec2.set( 3.0, -1.0 );
  const subtracted = new Vec2();
  subtracted.set( 2.0, 3.0 );

  const res = Vec2.subtract( vec2, subtracted );

  expect( res.x ).toBe( 1.0 );
  expect( res.y ).toBe( -4.0 );
});

it('should get result of multiplying two vec2s when call multiply method given 2 vec2s', () => {
  const multiplied = new Vec2();
  multiplied.set( 2.0, 3.0 );
  const vec2 = new Vec2();
  vec2.set( 9.0, 2.0 );
  vec2.multiply( multiplied );

  expect( vec2.x ).toBe( 18.0 );
  expect( vec2.y ).toBe( 6.0 );
});

it('should get result of multiplying two vec2s when call static multiply method given 2 vec2s', () => {
  const vec2 = new Vec2();
  vec2.set( 3.0, -1.0 );
  const multiplied = new Vec2();
  multiplied.set( 2.0, 3.0 );

  const res = Vec2.multiply( vec2, multiplied );

  expect( res.x ).toBe( 6.0 );
  expect( res.y ).toBe( -3.0 );
});

it('should get result of dividing two vec2s when call divide method given 2 vec2s', () => {
  const devided = new Vec2();
  devided.set( 2.0, 3.0 );
  const vec2 = new Vec2();
  vec2.set( 2.0, 1.5 );
  vec2.divide( devided );

  expect( vec2.x ).toBe( 1.0 );
  expect( vec2.y ).toBe( 0.5 );
});

it('should get result of dividing two vec2s when call static divide method given 2 vec2s', () => {
  const vec2 = new Vec2();
  vec2.set( 3.0, -1.0 );
  const multiplied = new Vec2();
  multiplied.set( 2.0, 1.0 );

  const res = Vec2.divide( vec2, multiplied );

  expect( res.x ).toBe( 1.5 );
  expect( res.y ).toBe( -1.0 );
});

it('should get result of scaling a vec2 when call scale method given a vec2 and scalar', () => {
  const vec2 = new Vec2();
  vec2.set( 3.0, 4.0 );

  vec2.scale( 2.0 );

  expect( vec2.x ).toBe( 6.0 );
  expect( vec2.y ).toBe( 8.0 );
});

it('should get result of scaling a vec2 when call static scale method given a vec2 and scalar', () => {
  const vec2 = new Vec2();
  vec2.set( 3.0, 4.0 );
  const res = Vec2.scale( vec2, 2.0 );

  expect( res.x ).toBe( 6.0 );
  expect( res.y ).toBe( 8.0 );
});

it('should get distance of two vec2s when call distance method', () => {
  const v1 = new Vec2();
  const v2 = new Vec2();
  v2.set( 3.0, 4.0 );
  const distance = Vec2.distance( v1, v2 );

  expect( distance ).toBe( 5.0 );
});

it('should get negative vec2 when call negate method', () => {
  const vec2 = new Vec2({ x: -2.0, y: 3.0 });
  vec2.negate();

  expect( vec2.x ).toBe( 2.0 );
  expect( vec2.y ).toBe( -3.0 );
});

it('should get inversed vec2 when call inverse method', () => {
  const vec2 = new Vec2({ x: 2.0, y: -1.0 });
  vec2.inverse();

  expect( vec2.x ).toBe( 0.5 );
  expect( vec2.y ).toBe( -1.0 );
});

it('should get normalized vec2 when call normalize method', () => {
  const vec2 = new Vec2({ x: 3.0, y: -4.0 });
  vec2.normalize();

  expect( equal( vec2.x, 0.6 ) ).toBeTruthy();
  expect( equal( vec2.y, -0.8 ) ).toBeTruthy();
});

it('should get zero vec2 when call normalize method given a zero vec2', () => {
  const vec2 = new Vec2();
  vec2.normalize();

  expect( vec2.x ).toBe( 0.0 );
  expect( vec2.y ).toBe( 0.0 );
});

it('should get dot result when call dot method given 2 specified vec2', () => {
  const v1 = new Vec2({ x: 1.0, y: 2.0 });
  const v2 = new Vec2({ x: -9.0, y: 5.2 });

  const res = Vec2.dot( v1, v2 );

  expect( equal( res, 1.4 ) ).toBeTruthy();
});

it('should get lerped result when call lerp method given 2 specified vec2', () => {
  const v1 = new Vec2({ x: 1.0, y: 2.0 });
  const v2 = new Vec2({ x: -9.0, y: 10.0 });

  const res = Vec2.lerp( v1, v2, 0.1 );

  expect( res.x ).toBe( 0.0 );
  expect( equal( res.y, 2.8 ) ).toBeTruthy();
});

it('should get a vec2 with scale length when call random method', () => {
  const res = Vec2.random( 2.0 );

  expect( equal( res.length, 2.0 ) ).toBeTruthy();
});

it('should get rotated vec2 when call rotate method', () => {
  const vec2 = new Vec2({ x: 1.0, y: 1.0 });
  const angle = 45.0;

  vec2.rotate( angle );

  expect( vec2.x ).toBe( 0.0 );
  expect( vec2.y ).toBe( vec2.length );
});

it('should get a random vec2 when call random static method', () => {
  const vec2 = Vec2.random( 2.0 );

  expect( vec2.x >= -2.0 && vec2.x <= 2.0 ).toBeTruthy();
  expect( vec2.y >= -2.0 && vec2.y <= 2.0 ).toBeTruthy();
});

it('should get correct angle of 2 vec2s when call angle static method', () => {
  const v1 = new Vec2({ x: 1.0, y: 1.0 });
  const v2 = new Vec2({ x: 1.0, y: 0.0 });

  const angle = Vec2.angle( v1, v2 );

  expect( equal( angle, 45.0 ) ).toBeTruthy();
});

it('should get 0 when call angle static method given a vec2 with 0 length', () => {
  const v1 = new Vec2();
  const v2 = new Vec2({ x: 1.0, y: 0.0 });

  const angle = Vec2.angle( v1, v2 );

  expect( equal( angle, 0 ) ).toBeTruthy();
});

it('should get π when call angle static method given 2 vec2s', () => {
  const v1 = new Vec2({ x: 1.0, y: 0.0 });
  const v2 = new Vec2();

  const angle = Vec2.angle( v1, v2 );

  expect( equal( angle, 180.0 ) ).toBeTruthy();
});

it('should get π when call angle static method given 2 vec2s', () => {
  const v1 = new Vec2({ x: -1.0, y: 0.0 });
  const v2 = new Vec2({ x: 1.0, y: 0.0 });

  const angle = Vec2.angle( v1, v2 );

  expect( equal( angle, 180 ) ).toBeTruthy();
});

it('should get true when compare two exactly equal vec2s', () => {
  const v1 = new Vec2({ x: 1.0, y: 3.0 });
  const v2 = Vec2.clone( v1 );

  const res = Vec2.exactEquals( v1, v2 );

  expect( res ).toBeTruthy();
});

it('should get false when compare two different vec2s', () => {
  const v1 = new Vec2();
  const v2 = new Vec2({ x: 1.0, y: 0.0 });

  const res = Vec2.exactEquals( v1, v2 );

  expect( res ).toBeFalsy();
});
