import { test, expect } from 'vitest'
import { performance } from 'perf_hooks';
import { moveZeros, moveZerosOOfN } from './moveZeros.js'


test('some examples', () => {
  expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([
    1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
  ])
  expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toStrictEqual([
    false,
    1,
    1,
    2,
    1,
    3,
    'a',
    0,
    0,
  ])
  moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])
  // returns[false,1,1,2,1,3,"a",0,0]
})

test('some examples', () => {
  expect(moveZerosOOfN([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([
    1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
  ])
  expect(moveZerosOOfN([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toStrictEqual([
    false,
    1,
    1,
    2,
    1,
    3,
    'a',
    0,
    0,
  ])
  moveZerosOOfN([false, 1, 0, 1, 2, 0, 1, 3, 'a'])
  // returns[false,1,1,2,1,3,"a",0,0]
})

test('test moveZerosOOfN is faster', () => {
  const arr = Array(200).fill().map(() => Math.floor(Math.random() * 10));
    // Measure execution time of moveZeros
    let t0a = performance.now();
    moveZeros(arr);
    let t1a = performance.now();
    let tza = t1a - t0a
    console.log(`Time taken by moveZeros: ${tza} milliseconds`);

    // Measure execution time of moveZerosOOfN
    let t0b = performance.now();
    moveZerosOOfN(arr);
    let t1b = performance.now();
    let tzb = t1b - t0b
    console.log(`Time taken by moveZerosOOfN: ${tzb} milliseconds`);
    expect()
})
