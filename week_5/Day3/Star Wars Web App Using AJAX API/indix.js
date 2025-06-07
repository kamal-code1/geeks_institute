const findBtn = document.getElementById('findBtn');
const info = document.getElementById('info');
const message = document.getElementById('message');

async function getCharacter() {
  const randomId = Math.floor(Math.random() * 83) + 1;
  const url = `https://www.swapi.tech/api/people/${randomId}`;

  showLoading();

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Not found');

    const data = await res.json();
    const character = data.result.properties;

    const homeWorldRes = await fetch(character.homeworld);
    const homeWorldData = await homeWorldRes.json();

    displayCharacter({
      name: character.name,
      height: character.height,
      gender: character.gender,
      birth_year: character.birth_year,
      homeworld: homeWorldData.result.properties.name
    });
  } catch (err) {
    showError();
  }
}

function displayCharacter({ name, height, gender, birth_year, homeworld }) {
  info.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Height:</strong> ${height} cm</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Birth Year:</strong> ${birth_year}</p>
    <p><strong>Home World:</strong> ${homeworld}</p>
  `;
}

function showLoading() {
  info.innerHTML = `<p><i class="fas fa-spinner fa-spin"></i> Loading...</p>`;
}

function showError() {
  info.innerHTML = `<h2>Oh No! That person isn't available.</h2>`;
}

findBtn.addEventListener('click', getCharacter);
