const API_KEY = 'YOUR_GIPHY_API_KEY';  
const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`;

async function fetchRandomGif() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
 
    const gifs = data.data;
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const gifUrl = gifs[randomIndex].images.original.url;

   
    const img = document.createElement('img');
    img.src = gifUrl;
    document.body.appendChild(img);

  } catch (error) {
    console.error('Error fetching the GIF:', error);
  }
}

fetchRandomGif();
