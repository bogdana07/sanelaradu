//database
var questionsDB = [{
    question: 'Which of these choices correctly starts a FOR loop?',
    choices: ['for (i=0, i<10, i++)', 'for (i=0 && i<10; i++)', 'for (i=0; i<10; i++)', 'for (i=10, i<10, i++)'],
    answer: 'for (i=0; i<10; i++)'
},
{
    question: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
},
{
    question: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses'
},
{
    question: 'Which event occurs when the user clicks on an HTML element?',
    choices: ['onmouseclick', 'onleftmouse', 'onclick', 'onmouse'],
    answer: 'onclick'
},
{
    question: 'In the HTML document, what tag establishes the link to your JavaScript file?',
    choices: ['<js>', '<script>', '<javascript>', '<app>'],
    answer: '<script>'
},
];
var questionsDiv = document.getElementById('questions');
var choicesDiv = document.getElementById('choices');
var questionIndex = 0;
var wins = 0;
var highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];
var secondsLeft = 75;
var timeEl = document.getElementById('time');
var mainEl = document.getElementById("main");
var headerEl = document.getElementById("mainText");
var pEl = document.getElementById("instructions");

//events

//start timer
function setTime() {
    var timerInterval = setInterval(
        function () {
            if (secondsLeft > 0) {
                secondsLeft--;
                timeEl.textContent = "Time Remaining: " + secondsLeft + " Sec";
            }
            else {
                clearInterval(timerInterval);
            }
            if (questionsDB.length - 1 == questionIndex) {
                clearInterval(timerInterval);
            }
        }, 1000);
};

//stop timer
function stopTime() {
    var timerInterval = clearInterval();
};


//render question and choices
function renderQuestion(index) {
    //populate questions div with question
    choicesDiv.innerHTML = '';
    questionsDiv.innerHTML = questionsDB[index].question;
    questionsDiv.style.border = '2px solid maroon';

    //loop through each choice and creat a button
    let choices = questionsDB[index].choices;
    choices.forEach(choice => {
        let choiceBtn = document.createElement('button');
        //setting text of button
        choiceBtn.textContent = choice;
        //setting value-need to check answer
        choiceBtn.setAttribute('value', choice);
        //event to check choice vs answer
        choiceBtn.onclick = checkAnswer;
        //append choice button to choices div
        choicesDiv.appendChild(choiceBtn);
    });

    //start timer
    setTime();
    let introDiv = document.getElementById('main');
    introDiv.classList.add('hide');
};

//render final score
function renderFinalScore() {
    //show final panel
    let finalPanel = document.getElementById('finalPanel');
    finalPanel.classList.remove('d-n');

    //show final score
    let finalScoreSpan = document.getElementById('finalScore');
    finalScoreSpan.style.fontSize = '36px';
    finalScoreSpan.innerHTML = wins;
};

//check choice value against question index location
function checkAnswer() {
    let answer = questionsDB[questionIndex].answer;
    if (this.value === answer) {
        ++wins;
    }
    //check if last question
    if (questionsDB.length - 1 === questionIndex) {
        renderFinalScore();
        setTime();
    }
    else {
        renderQuestion(++questionIndex);
    }
};

//save score
function saveScore(initials) {
    //check local storage for initials

    //save score or update score
    let newScore = {
        score: wins,
        initials: initials,
    }

    highScores.push(newScore);
    //save high scores array to local storage
    window.localStorage.setItem('highScores', JSON.stringify(highScores));
};


//show high scores
function showScores() {
    let scoresPanel = document.getElementById('scoresPanel');
    scoresPanel.classList.remove('d-n');
    highScores.forEach(sc => {
        let score = document.createElement('div');
        score.innerHTML = `score: ${sc.initials}: ${sc.score}`;
        score.style.fontSize = '30px';
        scoresPanel.appendChild(score);
    });
};

//scroll down to scores panel
$("#viewScores").click(function () {
    $("html,body").animate(
        {
            scrollTop: $("#finalPanel").offset().top
        },
        "slow"
    );
});


//show score
document.getElementById('viewScores').addEventListener('click', function () {
    showScores();
});


//submit score
document.getElementById('submitScore').addEventListener('click', function () {
    let initials = document.getElementById('initials').value;
    saveScore(initials);
});

//start quiz
document.getElementById('startQuiz').addEventListener('click', function () {
    renderQuestion(questionIndex);
});

