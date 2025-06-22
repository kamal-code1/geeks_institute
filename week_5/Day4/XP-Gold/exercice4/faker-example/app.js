const prompt = require('prompt-sync')();
const users = [];

function addRealUser() {
  const name = prompt("Nom complet : ");
  const street = prompt("Adresse : ");
  const country = prompt("Pays : ");
  users.push({ name, address: street, country });
  console.log("Utilisateur ajouté :", users);
}

module.exports = { addRealUser };
