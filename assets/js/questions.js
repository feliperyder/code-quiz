// questions.js
// Array of objects
const questions = [
  {
    questionTitle: "Variables",
    question: "What keyword is used to declare a variable in JavaScript?",
    choices: ["var", "car", "gif", "va va voom"],
    correctIndex: 0,
  },
  {
    questionTitle: "Data Types",
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    choices: ["String", "Boolean", "Roaring Kitty", "Symbol"],
    correctIndex: 2,
  },
  {
    questionTitle: "Operators",
    question: "What does the '++' operator do in JavaScript?",
    choices: ["Adds 1 to the variable", "Concatenates strings", "Creates a smiley face", "Summons a magical unicorn"],
    correctIndex: 0,
  },
  {
    questionTitle: "Arrays",
    question: "How do you add an element to the end of an array in JavaScript?",
    choices: ["array.addToEnd('element')", "array.push('element')", "array.giveMeCake", "array.attach('element')"],
    correctIndex: 1,
  },
  {
    questionTitle: "Functions",
    question: "What do you call a named function expression in JavaScript?",
    choices: ["Bob", "Anonymous Function", "Bob Shawadiwadi = name", "Named Bob"],
    correctIndex: 3,
  },
  {
    questionTitle: "Loops",
    question: "Which loop in JavaScript runs at least once, even if the condition is false?",
    choices: ["for", "while", "do-while", "magicLoop"],
    correctIndex: 2,
  },
  {
    questionTitle: "DOM Manipulation",
    question: "How do you select all elements with the class 'example' in JavaScript?",
    choices: ["select('.example')", "document.querySelectorAll('.example')", "document.getElementsByClass('example')", "querySelectorAll.example"],
    correctIndex: 1,
  },
  {
    questionTitle: "Event Handling",
    question: "What event is triggered when a user clicks on an HTML element?",
    choices: ["mouseClick", "clickEvent", "Puts the kettle on", "End of the world as we know it"],
    correctIndex: 1,
  },
  {
    questionTitle: "Promises",
    question: "What is a Promise in JavaScript?",
    choices: ["A guarantee from JavaScript", "A commitment to attend a party", "An assurance that a function will complete", "A note from JavaScript's boss"],
    correctIndex: 2,
  },
  {
    questionTitle: "Closures",
    question: "What is a closure in JavaScript?",
    choices: ["A door that's hard to open", "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).", "A secret JavaScript handshake", "A box of cookies"],
    correctIndex: 1,
  },
  {
    questionTitle: "ES6 Features",
    question: "What does the 'let' keyword do in JavaScript?",
    choices: ["Declares a constant", "Declares a variable with block scope", "Let's the program run faster", "Makes JavaScript polite"],
    correctIndex: 1,
  },
  {
    questionTitle: "Async/Await",
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    choices: ["Allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread.", "To confuse developers", "To declare an asynchronous variable", "To release the Batman"],
    correctIndex: 0,
  },
  {
    questionTitle: "Local Storage",
    question: "Which method is used to retrieve data from the local storage of a browser?",
    choices: ["localStorage.getItem()", "getLocalStorageData()", "retrieveDataFromStorage", "localData.get()"],
    correctIndex: 0,
  },
  {
    questionTitle: "Regular Expressions",
    question: "What does the 'i' flag stand for in a regular expression?",
    choices: ["Intelligent", "Irritating", "Ignore casing", "Ice Ice Baby"],
    correctIndex: 2,
  },
  {
    questionTitle: "TypeScript",
    question: "What is TypeScript?",
    choices: ["A special JavaScript type", "A scripting language for types", "A type of sushi", "A clever way to type faster"],
    correctIndex: 0,
  },
  {
    questionTitle: "AJAX",
    question: "What does AJAX stand for?",
    choices: ["Amazing JavaScript and XML", "Asynchronous JavaScript and XML", "Accelerated JavaScript and XML", "All JavaScript and XML"],
    correctIndex: 1,
  }
];

// Randomize order of questions
function randomizeQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}