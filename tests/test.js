/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const { test, expect } = require('@jest/globals');
const Emittery = require('emittery');
const { H } = require('jest-haste-map');
const bsl = require('../src/index');

const HELLOWORLD = 'Hello World';
const FOOBAR = 'foo bar';
const EMPTY = '';

test('addSmiley', () => {
  expect(bsl.addSmiley(HELLOWORLD)).toBe('H:)e:)l:)l:)o:) :)W:)o:)r:)l:)d:)');
  expect(bsl.addSmiley(FOOBAR)).toBe('f:)o:)o:) :)b:)a:)r:)');
  expect(bsl.addSmiley(EMPTY)).toBe('');
});

test('deleteEvenChars', () => {
  expect(bsl.deleteEvenChars(HELLOWORLD)).toBe('HloWrd');
  expect(bsl.deleteEvenChars(FOOBAR)).toBe('fobr');
  expect(bsl.deleteEvenChars(EMPTY)).toBe('');
  expect(bsl.deleteEvenChars('A')).toBe('A');
});

test('capitalizeSecondChar', () => {
  expect(bsl.capitalizeSecondChar(HELLOWORLD)).toBe('HEllo World');
  expect(bsl.capitalizeSecondChar(FOOBAR)).toBe('fOo bar');
  expect(bsl.capitalizeSecondChar(EMPTY)).toBe('');
  expect(bsl.capitalizeSecondChar('A')).toBe('A');
});

test('deleteLastTwoChar', () => {
  expect(bsl.deleteLastTwoChar(HELLOWORLD)).toBe('Hello Wor');
  expect(bsl.deleteLastTwoChar(FOOBAR)).toBe('foo b');
  expect(bsl.deleteLastTwoChar(EMPTY)).toBe('');
  expect(bsl.deleteLastTwoChar('A')).toBe('A');
});

test('sayAmongUs', () => {
  expect(bsl.sayAmongUs()).toBe('Among Us');
});
