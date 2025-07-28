const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

resolvedPromise.then(value => console.log(value));
rejectedPromise.catch(error => console.log(error));
