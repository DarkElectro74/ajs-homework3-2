import getHealthStatus from '../src/js/app';

test('healthStatus = healthy', () => {
  const data = { name: 'Маг', health: 90 };
  expect(getHealthStatus(data)).toBe('healthy');
});

test('healthStatus = wounded', () => {
  const data = { name: 'Маг', health: 40 };
  expect(getHealthStatus(data)).toBe('wounded');
});

test('healthStatus = critical', () => {
  const data = { name: 'Маг', health: 0 };
  expect(getHealthStatus(data)).toBe('critical');
});

test('health < 0', () => {
  const data = { name: 'Маг', health: -30 };
  expect(getHealthStatus(data)).toBe(null);
});

test('health: string', () => {
  const data = { name: 'Маг', health: 'healthy' };
  expect(getHealthStatus(data)).toBe(null);
});

test('health = undefined', () => {
  const data = { name: 'Маг' };
  expect(getHealthStatus(data)).toBe(null);
});

test('name = undefined', () => {
  const data = { health: 90 };
  expect(getHealthStatus(data)).toBe(null);
});
