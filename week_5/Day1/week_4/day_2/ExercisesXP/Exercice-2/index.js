const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
  const i = index + 1;
  const suffix = (i <= 3) ? ordinal[i] : ordinal[0];
  console.log(`${i}${suffix} choice is ${color}.`);
});
