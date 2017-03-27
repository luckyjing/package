import test from 'ava';
import { testPromise } from '../src/index';

test('index', async (t) => {
  const data = await testPromise();
  t.deepEqual(data, {
    name: 'sjx',
  });
});
