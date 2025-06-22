const axios = require('axios');

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    response.data.forEach(post => {
      console.log(post.title);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
  }
}

module.exports = fetchPosts;
