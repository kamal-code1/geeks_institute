function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all elements are strings.");
    }
  });
}


function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sorted = words.sort();
      resolve(sorted);
    } else {
      reject("Error: Array length is not greater than 4.");
    }
  });
}



makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Test 1 Résultat :", result))
  .catch(error => console.log("Test 1 Erreur :", error));


makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Test 2 Résultat :", result))
  .catch(error => console.log("Test 2 Erreur :", error));


makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Test 3 Résultat :", result))
  .catch(error => console.log("Test 3 Erreur :", error));
