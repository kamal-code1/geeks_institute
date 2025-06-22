const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'example.txt');

function displayFileInfo() {
  const exists = fs.existsSync(filePath);
  console.log(`Le fichier existe : ${exists}`);

  if (exists) {
    const stats = fs.statSync(filePath);
    console.log(`Taille : ${stats.size} octets`);
    console.log(`Créé le : ${stats.birthtime}`);
  }
}

module.exports = displayFileInfo;
