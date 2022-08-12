//Global Attributes
//Global Variables
var main = document.querySelector("#main");
var scoreScreen = document.querySelector("#finalScore");
var startButton = document.querySelector("#start");
var h1 = document.querySelector("#h1");
var optionElement = document.querySelector("#choices");
var questions = [
  {
    title: "How many bones are there on a Jolly Roger flag?",
    correctAnswer: "Three",
    choices: ["One", "Two", "Three"],
  },
  {
    title: "In nautical terms, what is the opposite of port?",
    correctAnswer: "Starboard",
    choices: ["Moonboard", "Starboard", "Seaboard"],
  },
  {
    title: "Which sea creature has three hearts?",
    correctAnswer: "Octopus",
    choices: ["Minnow", "Shark", "Octopus"],
  },
  {
    title: "Where would you put a baggy wrinkle on your yacht?",
    correctAnswer: "Shroud",
    choices: ["Shroud", "Shaull", "Skirt"],
  },
  {
    title: "On a sailboat, what is a sheet?",
    correctAnswer: "Lines",
    choices: ["Map", "Lines", "Bedding"],
  },
];

var currentIndex = 0;
var timeLeft;

//Function populating first question and answer buttons
function startQuiz() {
  var currentQuestion = questions[currentIndex];
  var titleEl = document.getElementById("questionTitle");
  titleEl.textContent = currentQuestion.title;
  //remove previous question buttons
  optionElement.innerHTML = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var option = currentQuestion.choices[i];
    var optionButton = document.createElement("button");
    optionButton.setAttribute("value", option);
    optionButton.textContent = option;
    optionElement.appendChild(optionButton);
    //inner function populating next question and answer buttons
    optionButton.addEventListener("click", function () {
      if (
        this.value == currentQuestion.correctAnswer &&
        currentIndex != questions.length - 1
      ) {
        currentScore += 10;
        console.log(currentScore);
        currentIndex++;
        startQuiz();
      } else if (
        this.value != currentQuestion.correctAnswer &&
        currentIndex != questions.length - 1
      ) {
        timerCount -= 10;
        currentIndex++;
        startQuiz();
      } else {
        displayScore(currentScore);
      }
    });
  }
}
function displayScore() {
  main.setAttribute("style", "display: none");
  optionElement.setAttribute("style", "display: none");
  scoreScreen.setAttribute("style", "display: unset");
  console.log(currentScore);
}
//start function
startButton.addEventListener("click", function () {
  console.log("Start");
  //clear start button and <h1>
  startButton.setAttribute("style", "display: none");
  h1.setAttribute("style", "display: none");

  timerCount = 90;
  currentScore = 0;
  // startTimer();
  startQuiz();
});
function initialize() {
  scoreScreen.setAttribute("style", "display: none");
}
initialize();

// var timer = setInterval(countdown, 1000);
// function countdown() {
//   if (timeLeft === 0) {
//     alert("Time is up.");
//     clearInterval(timerId);
//     return;
//   } else {
//     timeLeft--;
//   }
//   console.log(timeLeft);
//   Element.textContent = timeLeft + " seconds remaining.";
