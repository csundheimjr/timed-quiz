//Global Attributes
//Global Variables
var startButton = document.querySelector("#start");
var h1 = document.querySelector("#h1");
var currentIndex = 0;
var timeLeft =
  //start function
  startButton.addEventListener("click", function () {
    console.log("Start");
    //clear start button and <h1>
    startButton.setAttribute("style", "display: none");
    h1.setAttribute("style", "display: none");
    //Create question and ul

    var timer = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft === 0) {
        alert("Time is up.");
        clearInterval(timerId);
        return;
      } else {
        timeLeft--;
      }
      console.log(timeLeft);
      Element.textContent = timeLeft + " seconds remaining.";
    }
    // const question1 = document.createElement("ul");
    // question1.innerHTML = "Question.....";
    // const btn = document.createElement("button");

    // a1.innerHTML = "answer";
  });

// // Selects element by class
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 120;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft;

//     if (secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }
//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);
// }

// setTime();
