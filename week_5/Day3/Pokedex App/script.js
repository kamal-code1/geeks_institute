const nameEl = document.getElementById("pokemon-name");
const idEl = document.getElementById("pokemon-id");
const heightEl = document.getElementById("pokemon-height");
const weightEl = document.getElementById("pokemon-weight");
const typeEl = document.getElementById("pokemon-type");
const imageEl = document.getElementById("pokemon-image");

let currentId = 1;

async function fetchPokemon(id) {
  try {
    nameEl.textContent = "Loading...";
    imageEl.src = "";

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error("Not found");
    const data = await res.json();

    nameEl.textContent = data.name.toUpperCase();
    idEl.textContent = data.id;
    heightEl.textContent = data.height;
    weightEl.textContent = data.weight;
    typeEl.textContent = data.types.map(t => t.type.name).join(", ");
    imageEl.src = data.sprites.front_default;
    currentId = data.id;
  } catch (err) {
    nameEl.textContent = "Oh no! That Pokémon isn’t available…";
    idEl.textContent = heightEl.textContent = weightEl.textContent = typeEl.textContent = "";
    imageEl.src = "";
  }
}

document.getElementById("random").addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  fetchPokemon(randomId);
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentId > 1) fetchPokemon(currentId - 1);
});

document.getElementById("next").addEventListener("click", () => {
  fetchPokemon(currentId + 1);
});

window.onload = () => fetchPokemon(currentId);
