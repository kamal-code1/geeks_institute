const delayedSuccess = new Promise((resolve) => {
  setTimeout(() => {
    resolve("✅ Succès après 4 secondes");
  }, 4000);
});

delayedSuccess.then(result => console.log(result));
