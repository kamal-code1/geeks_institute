(function(username) {
  const container = document.getElementById('user-container');


  const welcomeDiv = document.createElement('div');
  welcomeDiv.className = 'welcome-user';


  const welcomeText = document.createElement('span');
  welcomeText.textContent = `Welcome, ${username}!`;


  const profileImg = document.createElement('img');
  profileImg.src = 'https://i.pravatar.cc/40'; 
  profileImg.alt = `${username}'s profile picture`;


  welcomeDiv.appendChild(profileImg);
  welcomeDiv.appendChild(welcomeText);


  container.appendChild(welcomeDiv);

})('John'); 
