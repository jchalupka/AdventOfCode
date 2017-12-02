function captchaSolver(sequence) {
  const addIfSame = (sum, a, b) => {
    if (a === b) {
      return sum + a;
    }

    return sum;
  };

  // convert the input into array of numbers
  const sequenceArr = Array.from(sequence).map(c => parseInt(c, 10));

  const result = sequenceArr.reduce((sum, cur, index, array) => {
    let prev;
    if (index === 0) {
      prev = array[array.length - 1]; // due to the array being circular
    } else {
      prev = array[index - 1];
    }

    return addIfSame(sum, cur, prev);
  }, 0);

  return result;
}

module.exports = captchaSolver;

