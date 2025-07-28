const curriedSum = (a) => (b) => a + b;

const add5 = curriedSum(5);

const result = add5(12);

console.log(result); 
