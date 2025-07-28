Promise.resolve(3)
  .then(value => console.log("✅ Résolu avec :", value));


Promise.reject("Boo!")
  .catch(error => console.log("❌ Rejeté avec :", error));
