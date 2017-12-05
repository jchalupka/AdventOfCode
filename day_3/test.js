const part1 = require('./part1');
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
  { result: 0, input: 1 },
  { result: 1, input: 2 },
  { result: 2, input: 3 },
  { result: 1, input: 4 },
  { result: 2, input: 5 },
  { result: 1, input: 6 },
  { result: 2, input: 7 },
  { result: 1, input: 8 },
  { result: 2, input: 9 },
  { result: 3, input: 10 },
  { result: 2, input: 11 },
  { result: 3, input: 12 },
  { result: 4, input: 13 },
  { result: 3, input: 14 },
  { result: 2, input: 15 },
  { result: 3, input: 16 },
  { result: 4, input: 17 },
  { result: 3, input: 18 },
  { result: 2, input: 19 },
  { result: 3, input: 20 },
  { result: 4, input: 21 },
  { result: 3, input: 22 },
  { result: 2, input: 23 },
  { result: 3, input: 24 },
  { result: 0, input: 1 },
  { result: 3, input: 12 },
  { result: 2, input: 23 },
  { result: 31, input: 1024 },
];

describe('Advent of Code 2017 day 3', () => {
  describe('Part 1', () => {
    runTests(part1Examples, part1);
  });
});
