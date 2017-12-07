const part1 = require('./part1');
// const part2 = require('./part2');
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
  { result: '2 4 1 2', input: '0 2 7 0' },
  { result: '3 1 2 3', input: '2 4 1 2' },
  { result: '0 2 3 4', input: '3 1 2 3' },
  { result: '1 3 4 1', input: '0 2 3 4' },
  { result: '2 4 1 2', input: '1 3 4 1' },
];

// const part2Examples = [
//   {
//     result: 10, input: `0
// 3
// 0
// 1
// -3`,
//   },
// ];

describe('Advent of Code 2017 day 5', () => {
  describe('Part 1', () => {
    runTests(part1Examples, part1);
  });

  // describe('Part 2', () => {
  //   runTests(part2Examples, part2);
  // });
});
