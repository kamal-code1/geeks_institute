const letters = ['x', 'y', 'z', 'z'];

const countLettersFor = {};
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (countLettersFor[letter]) {
    countLettersFor[letter]++;
  } else {
    countLettersFor[letter] = 1;
  }
}
console.log(countLettersFor);

const countLettersReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(countLettersReduce);
