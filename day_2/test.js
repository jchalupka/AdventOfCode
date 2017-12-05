const checkSumSolverPart1 = require('./checkSumSolverPart1');
const checkSumSolverPart2 = require('./checkSumSolverPart2');
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
  { result: 8, input: '5 1 9 5' },
  { result: 4, input: '7 5 3' },
  { result: 6, input: '2 4 6 8' },
  { result: 18, input: `5 1 9 5
7 5 3
2 4 6 8` },
];

const part2Examples = [
  { result: 4, input: '5 9 2 8' },
  { result: 3, input: '9 4 7 3' },
  { result: 2, input: '3 8 6 5' },
  { result: 9, input: `5 9 2 8
9 4 7 3
3 8 6 5` },
];

describe('Advent of Code 2017 day 2', () => {
  describe('Part 1', () => {
    runTests(part1Examples, checkSumSolverPart1);
  });

  describe('Part 2', () => {
    runTests(part2Examples, checkSumSolverPart2);
  });
});
