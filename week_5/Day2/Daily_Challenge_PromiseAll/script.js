const form = document.getElementById("sunriseForm");
const resultsDiv = document.getElementById("results");


async function fetchSunrise(lat, lng) {
  const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`API error for coords: ${lat},${lng}`);
  const data = await response.json();
  if (data.status !== "OK") throw new Error(`API returned error for coords: ${lat},${lng}`);
  return data.results.sunrise; 
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  resultsDiv.textContent = "Loading...";

  const lat1 = form.lat1.value.trim();
  const lng1 = form.lng1.value.trim();
  const lat2 = form.lat2.value.trim();
  const lng2 = form.lng2.value.trim();

  try {
    const [sunrise1, sunrise2] = await Promise.all([
      fetchSunrise(lat1, lng1),
      fetchSunrise(lat2, lng2),
    ]);

     
    const formatTime = (isoStr) => {
      const date = new Date(isoStr);
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    };

    resultsDiv.innerHTML = `
      <p><strong>City 1 Sunrise (UTC):</strong> ${formatTime(sunrise1)}</p>
      <p><strong>City 2 Sunrise (UTC):</strong> ${formatTime(sunrise2)}</p>
    `;
  } catch (error) {
    resultsDiv.textContent = `Error: ${error.message}`;
  }
});
