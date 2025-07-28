const quotes = [
  { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
  { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
  { id: 2, author: "Yoda", quote: "Do or do not. There is no try.", likes: 0 },
];

let lastIndex = -1;
let currentIndex = -1;
let filteredQuotes = [];
let filteredIndex = 0;

const quoteDisplay = document.getElementById("quoteDisplay");
const generateBtn = document.getElementById("generateBtn");
const likeCount = document.getElementById("likeCount");

const addQuoteForm = document.getElementById("addQuoteForm");
const newQuoteInput = document.getElementById("newQuote");
const newAuthorInput = document.getElementById("newAuthor");

const countWithSpacesBtn = document.getElementById("countWithSpaces");
const countWithoutSpacesBtn = document.getElementById("countWithoutSpaces");
const countWordsBtn = document.getElementById("countWords");
const likeBtn = document.getElementById("likeBtn");

const filterForm = document.getElementById("filterForm");
const filterAuthorInput = document.getElementById("filterAuthor");
const filterResults = document.getElementById("filterResults");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

generateBtn.addEventListener("click", () => {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex && quotes.length > 1);
  lastIndex = index;
  currentIndex = index;
  displayQuote(quotes[index]);
  updateLikeDisplay();
});

function displayQuote(quoteObj) {
  quoteDisplay.innerHTML = `<p>"${quoteObj.quote}"</p><p>- ${quoteObj.author}</p>`;
}

addQuoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newQuote = newQuoteInput.value.trim();
  const newAuthor = newAuthorInput.value.trim();
  if (newQuote && newAuthor) {
    const newId = quotes.length;
    quotes.push({ id: newId, author: newAuthor, quote: newQuote, likes: 0 });
    addQuoteForm.reset();
    alert("Quote added!");
  }
});

countWithSpacesBtn.addEventListener("click", () => {
  if (currentIndex !== -1) {
    alert(`Characters (with spaces): ${quotes[currentIndex].quote.length}`);
  }
});

countWithoutSpacesBtn.addEventListener("click", () => {
  if (currentIndex !== -1) {
    const count = quotes[currentIndex].quote.replace(/\s/g, "").length;
    alert(`Characters (no spaces): ${count}`);
  }
});

countWordsBtn.addEventListener("click", () => {
  if (currentIndex !== -1) {
    const count = quotes[currentIndex].quote.trim().split(/\s+/).length;
    alert(`Words: ${count}`);
  }
});

likeBtn.addEventListener("click", () => {
  if (currentIndex !== -1) {
    quotes[currentIndex].likes++;
    updateLikeDisplay();
  }
});

function updateLikeDisplay() {
  if (currentIndex !== -1) {
    likeCount.textContent = `Likes: ${quotes[currentIndex].likes}`;
  }
}

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const authorFilter = filterAuthorInput.value.trim().toLowerCase();
  filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(authorFilter));
  filteredIndex = 0;
  displayFilteredQuote();
});

function displayFilteredQuote() {
  if (filteredQuotes.length === 0) {
    filterResults.innerHTML = "<p>No quotes found.</p>";
    return;
  }
  const q = filteredQuotes[filteredIndex];
  filterResults.innerHTML = `<p>"${q.quote}"</p><p>- ${q.author}</p>`;
}

prevBtn.addEventListener("click", () => {
  if (filteredQuotes.length) {
    filteredIndex = (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayFilteredQuote();
  }
});

nextBtn.addEventListener("click", () => {
  if (filteredQuotes.length) {
    filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
    displayFilteredQuote();
  }
});
