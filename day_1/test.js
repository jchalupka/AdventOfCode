const captchaSolverPart1 = require('./captchaSolverPart1');
const captchaSolverPart2 = require('./captchaSolverPart2');
const { assert } = require('chai');

function runTests(examples, fn) {
  examples.forEach((example) => {
    const {
      correctSum,
      input,
    } = example;

    it(`Should get sum of ${correctSum} from ${input}`, () => {
      assert.equal(fn(input), correctSum);
    });
  });
}

const part1Examples = [
  { correctSum: 3, input: '1122' },
  { correctSum: 4, input: '1111' },
  { correctSum: 0, input: '1234' },
  { correctSum: 9, input: '91212129' },
  { correctSum: 10, input: '912121129' },
];

const part2Examples = [
  { correctSum: 6, input: '1212' },
  { correctSum: 0, input: '1221' },
  { correctSum: 4, input: '123425' },
  { correctSum: 12, input: '123123' },
  { correctSum: 4, input: '12131415' },
];

describe('Advent of Code 2017 day 1', () => {
  describe('Part 1', () => {
    runTests(part1Examples, captchaSolverPart1);
  });

  describe('Part 2', () => {
    runTests(part2Examples, captchaSolverPart2);
  });
});
