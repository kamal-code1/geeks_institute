
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} est inférieur ou égal à 10`);
    } else {
      reject(`${num} est supérieur à 10`);
    }
  });
}

// Tests
compareToTen(15)
  .then(result => console.log("✅ Résultat :", result))
  .catch(error => console.log("❌ Erreur :", error));

compareToTen(8)
  .then(result => console.log("✅ Résultat :", result))
  .catch(error => console.log("❌ Erreur :", error));
