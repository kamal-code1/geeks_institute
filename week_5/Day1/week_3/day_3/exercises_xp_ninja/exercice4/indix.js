function biggestNumberInArray(arrayNumber) {
  const numbers = arrayNumber.filter(item => typeof item === 'number');
  if (numbers.length === 0) return 0;
  return Math.max(...numbers);
}

console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2])); // 4
console.log(biggestNumberInArray([])); // 0
