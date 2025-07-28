function abbrevName(name) {
  const parts = name.split(' ');
  return parts[0] + ' ' + parts[1][0] + '.';
}

console.log(abbrevName("Robin Singh"));  
