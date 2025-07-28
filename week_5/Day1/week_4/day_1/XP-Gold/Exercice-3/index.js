
const curriedSum = (a) => (b) => a + b;


const result = curriedSum(30)(1);


console.log(result);  
