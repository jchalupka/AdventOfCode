function cycle(input) {
  const map = input.split(' ').map(x => parseInt(x, 10));
  const numBlocks = map.length;
  let largestVal = map[0];
  let largestIndex = 0;

  for (let i = 0; i < numBlocks; i += 1) {
    if (map[i] > largestVal) {
      largestVal = map[i];
      largestIndex = i;
    }
  }

  const newMap = map;
  // set the largest position to zero
  newMap[largestIndex] = 0;

  let resources = largestVal;
  let curIndex = (largestIndex === numBlocks - 1) ? 0 : largestIndex + 1;
  while (resources > 0) {
    newMap[curIndex] += 1;
    resources -= 1;
    curIndex = ((curIndex === numBlocks - 1) ? 0 : curIndex + 1);
  }

  return newMap.join(' ');
}

function mapIsUnique(seenPatterns, curPattern) {
  const curPatternString = JSON.stringify(curPattern);
  const uniqueMap = seenPatterns.map((seenPattern, index) => {
    const seenPatternString = JSON.stringify(seenPattern);
    if (seenPatternString === curPatternString) {
      console.log(`Repeat found!  Last seen at index: ${index}`);
      return false;
    }
  });

  return !uniqueMap.includes(false);
}

function numCycles(input) {
  let map = input;

  const seenPatterns = [];
  let numIterations;
  for (numIterations = 0; mapIsUnique(seenPatterns, map); numIterations += 1) {
    seenPatterns.push(map);
    map = cycle(map);
  }

  return numIterations;
}

const result = numCycles('4 1 15 12 0 9 9 5 5 8 7 3 14 5 12 3');
console.log(`Result ${result}`);


module.exports = cycle;
