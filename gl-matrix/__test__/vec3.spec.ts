import Vec3 from '../src/vec3';

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
