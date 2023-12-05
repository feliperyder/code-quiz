// scores.js

// DOM Elements
const clearButton = document.getElementById('clear');

// Event Listeners
clearButton.addEventListener('click', clearHighScores);

function saveHighScore(initials, score) {
    // Check that initials are not empty
    if (initials.trim() !== '') {
      // Retrieve high scores from localStorage
      const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
      // Add the current score and initials to high scores
      highScores.push({ initials, score });
      // Save updated high scores to localStorage
      localStorage.setItem('highScores', JSON.stringify(highScores));
    }
  }
  
  function loadHighScores() {
    // Retrieve high scores from localStorage or initialize an empty array
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    // Sort high scores in descending order
    highScores.sort((a, b) => b.score - a.score);
    // Display high scores on the highscores.html page
    const highscoresList = document.getElementById('highscores');
    highscoresList.innerHTML = '';
    highScores.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${entry.initials}: ${entry.score}`;
      highscoresList.appendChild(listItem);
    });
  }

  function clearHighScores() {
    console.log('Clearing high scores...');
    localStorage.removeItem('highScores');
    console.log('High scores cleared.');
    // Reload the page
    location.reload();
  }  

  loadHighScores();