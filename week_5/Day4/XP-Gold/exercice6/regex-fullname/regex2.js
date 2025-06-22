function isValidName(name) {
  const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  return regex.test(name);
}

console.log(isValidName("John Doe")); 
console.log(isValidName("john doe")); 
