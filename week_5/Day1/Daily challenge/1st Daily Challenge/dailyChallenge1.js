function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("❌ Tous les éléments ne sont pas des chaînes de caractères");
    }
  });
}

function sortWords(upperWords) {
  return new Promise((resolve, reject) => {
    if (upperWords.length > 4) {
      resolve(upperWords.sort());
    } else {
      reject("❌ Le tableau ne contient pas plus de 4 mots");
    }
  });
}

// TESTS :
makeAllCaps([1, "pear", "banana"])
  .then(sortWords)
  .then(result => console.log("Résultat :", result))
  .catch(error => console.log("Erreur :", error));

makeAllCaps(["apple", "pear", "banana"])
  .then(sortWords)
  .then(result => console.log("Résultat :", result))
  .catch(error => console.log("Erreur :", error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(sortWords)
  .then(result => console.log("Résultat :", result)) // ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch(error => console.log("Erreur :", error));
