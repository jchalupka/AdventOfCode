const steps = (n) => {
  // edge case
  if (n === 1) return 0;

  const root = Math.ceil(Math.sqrt(n));
  const curR = root % 2 !== 0 ? root : root + 1;
  const numR = (curR - 1) / 2;
  const cycle = n - ((curR - 2) ** 2);
  const innerOffset = cycle % (curR - 1);

  return numR + Math.abs(innerOffset - numR);
};

module.exports = steps;
