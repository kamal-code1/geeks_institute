const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const input = document.getElementById("categoryInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

async function fetchRandomGif(category) {
    try {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(category)}&rating=g`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        if (!data.data || !data.data.images) throw new Error("No GIF found");

        return data.data.images.original.url; 
    } catch (error) {
        console.error("Error fetching gif:", error);
        alert("Could not fetch gif. Try another category.");
        return null;
    }
}

function createGifElement(gifUrl) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("gif-wrapper");

    const img = document.createElement("img");
    img.src = gifUrl;
    img.alt = "Random GIF";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        wrapper.remove();
    });

    wrapper.appendChild(img);
    wrapper.appendChild(deleteBtn);

    return wrapper;
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const category = input.value.trim();
    if (!category) return;

    const gifUrl = await fetchRandomGif(category);
    if (gifUrl) {
        const gifElement = createGifElement(gifUrl);
        gifContainer.appendChild(gifElement);
        input.value = "";
    }
});

deleteAllBtn.addEventListener("click", () => {
    gifContainer.innerHTML = ""; 
});
