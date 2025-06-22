
const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(value => console.log(value)); // → 3


const rejectedPromise = Promise.reject("Boo!");
rejectedPromise.catch(error => console.log(error)); 
