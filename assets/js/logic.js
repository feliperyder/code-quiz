// logic.js
// Variables
let timer;
let timeRemaining;
let currentQuestionIndex;
let score;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionsContainer = document.getElementById('questions');
const choicesContainer = document.getElementById('choices');
const finalScoreElement = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const timeElement = document.getElementById('time');
const startButton = document.getElementById('start');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');

// Event Listeners
startButton.addEventListener('click', startQuiz);
choicesContainer.addEventListener('click', handleChoice);
submitButton.addEventListener('click', saveHighScore);
clearButton.addEventListener('click', clearHighScores);

// Functions
function startQuiz() {
  // Hide start screen, show questions
  startScreen.classList.add('hide');
  questionsContainer.classList.remove('hide');
  // Initialize variables
  currentQuestionIndex = 0;
  score = 0;
  timeRemaining = 60; // Time limit
  // Display the first question
  displayQuestion();
  // Start the timer
  startTimer();
}

function startTimer() {
  // Set interval to decrement timeRemaining
  timer = setInterval(() => {
    timeRemaining--;
    timeElement.textContent = timeRemaining;
    // Check if time has run out, call endQuiz if so
    if (timeRemaining <= 0) {
      endQuiz();
    }
  }, 1000);
}

function displayQuestion() {
  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];
  // Display question title
  document.getElementById('question-title').textContent = currentQuestion.question;
  choicesContainer.innerHTML = '';
  // Create buttons for each choice
  currentQuestion.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.setAttribute('data-index', index);
    choicesContainer.appendChild(button);
  });
}

function handleChoice(event) {
  // Check if the clicked element is button
  if (event.target.matches('button')) {
    // Get the selected answer
    const selectedAnswerIndex = parseInt(event.target.getAttribute('data-index'));
    const currentQuestion = questions[currentQuestionIndex];
    // Check if the answer is correct
    if (selectedAnswerIndex === currentQuestion.correctIndex) {
      score += 10;
    // If incorrect
    } else {
      timeRemaining -= 10;
      if (timeRemaining < 0) {
        timeRemaining = 0;
      }
    }
    // Move to the next question or end quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
}

function endQuiz() {
  // Stop timer
  clearInterval(timer);
  // Display final score
  finalScoreElement.textContent = score;
  // Hide questions container
  questionsContainer.classList.add('hide');
  // Show end screen
  document.getElementById('end-screen').classList.remove('hide');
}

function saveHighScore() {
  // Get initials from the input
  const initials = initialsInput.value.trim();
  // Check if initials are not empty
  if (initials !== '') {
    // Retrieve high scores from localStorage or initialize an empty array
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    // Add the current score and initials to high scores
    highScores.push({ initials, score });
    // Save updated high scores to localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    // Redirect to highscores.html if needed
    window.location.href = 'highscores.html';
  }
}

function loadHighScores() {
  // Load and display high scores
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  // Update your DOM to display the high scores
}

function retakeQuiz() {
  // Reload the page to retake the quiz
  location.reload();
}