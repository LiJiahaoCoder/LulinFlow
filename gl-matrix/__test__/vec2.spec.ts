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
