// scores.js
// Record high scores
function saveHighScore(initials, score) {
    // Check that initials are not empty
    if (initials !== '') {
      // Retrieve high scores from localStorage
      const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
      // Add the current score and initials to high scores
      highScores.push({ initials, score });
      // Save updated high scores to localStorage
      localStorage.setItem('highScores', JSON.stringify(highScores));
    }
  }
  
  // Load high scores from highscores.html
  function loadHighScores() {
    // Retrieve high scores from localStorage or initialize an empty array
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    // Sort high scores in descending order
    highScores.sort((a, b) => b.score - a.score);
    // Display high scores on the highscores.html page
    highscoresList.innerHTML = '';
    const highscoresList = document.getElementById('highscores');
    highScores.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${entry.initials}: ${entry.score}`;
      highscoresList.appendChild(listItem);
    });
  }
  