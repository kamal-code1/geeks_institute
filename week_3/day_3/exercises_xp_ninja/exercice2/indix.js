function capitalize(str) {
  let evenCaps = '';
  let oddCaps = '';

  for (let i = 0; i < str.length; i++) {
    evenCaps += i % 2 === 0 ? str[i].toUpperCase() : str[i];
    oddCaps += i % 2 !== 0 ? str[i].toUpperCase() : str[i];
  }

  return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef")); 
