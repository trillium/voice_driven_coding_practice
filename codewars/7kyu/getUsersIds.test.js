import { test, expect } from 'vitest'
import { getUsersIds } from './getUsersIds'

test('basic tests', () => {
  expect(getUsersIds('uid12345')).toStrictEqual(['12345'])
  expect(getUsersIds('   uidabc  ')).toStrictEqual(['abc'])
  expect(getUsersIds('#uidswagger')).toStrictEqual(['swagger'])
  expect(getUsersIds('uidone, uidtwo')).toStrictEqual(['one', 'two'])
  expect(getUsersIds('uidCAPSLOCK')).toStrictEqual(['capslock'])
})

test('adv tests', () => {
  expect(getUsersIds('uid##doublehashtag')).toStrictEqual(['doublehashtag'])
  expect(getUsersIds('  uidin name whitespace')).toStrictEqual([
    'in name whitespace',
  ])
  expect(getUsersIds('uidMultipleuid')).toStrictEqual(['multipleuid'])
  expect(getUsersIds('uid12 ab, uid#, uidMiXeDcHaRs')).toStrictEqual([
    '12 ab',
    '',
    'mixedchars',
  ])
  expect(getUsersIds(' uidT#e#S#t# ')).toStrictEqual(['test'])
})
