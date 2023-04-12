import { test, expect } from 'vitest'

test('handles simple tests', () => {
  expect(firstNonRepeatingLetter('a')).toBe('a');
  expect(firstNonRepeatingLetter('')).toBe('');
});

test('handles basic words', () => {
  expect(firstNonRepeatingLetter('stress')).toBe('t');
  expect(firstNonRepeatingLetter('moonmen')).toBe('e');
});

test('handles basic repetition', () => {
  expect(firstNonRepeatingLetter('abba')).toBe('');
  expect(firstNonRepeatingLetter('aa')).toBe('');
});

test('handles basic repetition with trailing ', () => {
  expect(firstNonRepeatingLetter('abbaz')).toBe('z');
  expect(firstNonRepeatingLetter('aaz')).toBe('z');
});

test('handles long random strings', () => {
  expect(firstNonRepeatingLetter('pmfrapmfray1')).toBe('y');
  expect(firstNonRepeatingLetter('pmfrapmfray1ycry1ycrz797z797uxhwuxhw03v9l03v9l7wl87wl8vg2bvg2bbhy2wbhy2w5lf2h5lf2h3erq3erqd18vd18v0fy8c0fy8ci')).toBe('i');
});