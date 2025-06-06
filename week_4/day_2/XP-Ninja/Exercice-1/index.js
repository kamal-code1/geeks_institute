const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

let sumDogYears = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'dog') {
    sumDogYears += data[i].age * 7;
  }
}
console.log(sumDogYears);

const sumDogYearsReduce = data.reduce((acc, curr) => {
  return curr.type === 'dog' ? acc + curr.age * 7 : acc;
}, 0);
console.log(sumDogYearsReduce);
