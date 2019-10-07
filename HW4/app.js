// counter
var count = 0;
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

incrementEl.addEventListener('click', function () {
    count++;
    countEl.textContent = count;
});

decrementEl.addEventListener('click', function () {
    if (count > 0) {
        count--;
        countEl.textContent = count;
    }
});
// end counter




// timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var headerEl = document.getElementById("mainText");
var pEl = document.getElementById("instructions");
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    ///etc.
];

var secondsLeft = 75;

function startQuiz() {
    setTime();
    mainEl.textContent = '';


};


function setTime() {
    var timerInterval = setInterval(
        function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds left";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
            }

        }, 1000);
};

function sendMessage() {
    timeEl.textContent = " ";
    headerEl.textContent = "Time is Up!";
    mainEl.appendChild(headerEl);

    pEl.textContent = "";
    mainEl.appendChild(pEl);


}

// function call by itself
// setTime();
// end timer

