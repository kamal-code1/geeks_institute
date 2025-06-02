const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject("Erreur: l'objet Morse est vide.");
      } else {
        resolve(morseObj);
      }
    } catch (error) {
      reject("Erreur lors de la conversion JSON.");
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Entrez un mot ou une phrase à traduire en morse :");
    if (!userInput) {
      reject("Aucune entrée.");
      return;
    }
    const lowerInput = userInput.toLowerCase();
    const morseTranslation = [];

    for (const char of lowerInput) {
      if (char === " ") {
        morseTranslation.push(" ");
      } else if (morseJS[char]) {
        morseTranslation.push(morseJS[char]);
      } else {
        reject(`Caractère non reconnu: "${char}"`);
        return;
      }
    }
    resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.style.color = "white";
    container.style.fontFamily = "monospace";
    container.style.whiteSpace = "pre-line";
    container.style.marginTop = "20px";

    container.textContent = morseTranslation.join("\n");
    document.body.appendChild(container);
    resolve("Traduction affichée !");
  });
}

toJs()
  .then(toMorse)
  .then(joinWords)
  .catch(error => alert(error));
