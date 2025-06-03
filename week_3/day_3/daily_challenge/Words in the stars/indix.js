function printInFrame() {
  const input = prompt("Entrez plusieurs mots séparés par des virgules :");

  if (!input || input.trim() === "") {
    console.log("Aucun mot saisi.");
    return;
  }

  const words = input.split(",").map(word => word.trim());
  const maxLength = Math.max(...words.map(word => word.length));
  const border = "*".repeat(maxLength + 4);

  console.log(border);
  for (let word of words) {
    const spaces = " ".repeat(maxLength - word.length);
    console.log(`* ${word}${spaces} *`);
  }
  console.log(border);
}

printInFrame();
