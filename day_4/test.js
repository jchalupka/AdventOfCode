const part1 = require('./part1');
const part2 = require('./part2');
const { assert } = require('chai');

function runTests(examples, fn) {
  examples.forEach((example) => {
    const {
      result,
      input,
    } = example;

    it(`Should get result of ${result} from ${input}`, () => {
      assert.equal(fn(input), result);
    });
  });
}

const part1Examples = [
  { result: true, input: 'aa bb cc dd ee' },
  { result: false, input: 'aa bb cc dd aa' },
  { result: true, input: 'aa bb cc dd aaa' },
];

const part2Examples = [
  { result: true, input: 'abcde fghij' },
  { result: false, input: 'abcde xyz ecdab' },
  { result: true, input: 'a ab abc abd abf abj' },
  { result: true, input: 'iiii oiii ooii oooi oooo' },
  { result: false, input: 'oiii ioii iioi iiio' },
];

describe('Advent of Code 2017 day 4', () => {
  describe('Part 1', () => {
    runTests(part1Examples, part1);
  });

  describe('Part 2', () => {
    runTests(part2Examples, part2);
  });
});
