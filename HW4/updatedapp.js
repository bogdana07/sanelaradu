//database
var questionsDB = [
    { question: 'question 1', choices: ['suzy', 'edna', 'margaret'], answer: 'edna' },
    { question: 'question 1', choices: ['suzy', 'edna', 'margaret'], answer: 'edna' }];
var questionsDiv = document.getElementById('questions');
var choicesDiv = document.getElementById('choices');
var QuestionIndex = 0;
var wins = 0;
var highscores = [];

//incomplete
function renderQuestion() {

};

//check choice value against database index
function checkAnswer() {
    let answer = questionsDB[questionIndex].answer;
    if (this.value === answer) {
        ++wins;
    }
    console.log(this.value);

    //check if last question
    if (questionsDB.length - 1 === questionIndex) {
        renderFinalScore();
    }
    else {
        renderQuestion(++questionIndex);
    }
};

//save score
function saveScore(initials) {
    //check local storage for initials-find a key by value in an array of objects
    // let scoreObj = highscores.find(score => score.initials == initials) || {};
    // newScore.score = wins;
    // newScore.initials = initials;


    //save score or update score
    let newScore = {
        score: wins,
        initials: initials,
    }
    highscores.push(newScore);
    //save highscores array to local storage
    window.localStorage.setItem('highscores', JSON.stringify(highscores));
};


//show high scores--missing removal of class list???
function showScores() {
    let scoresPanel = document.getElementById('scoresPanel');
    highscores.forEach(score => {
        let score = document.createElement('div');
        score.innerHTML = `score: ${sc.intiials}: ${sc.score}`;
        scoresPanel.appendChild(score);
    });
}

//*************EVENTS************

//show high scores

//submit score
document.getElementById('submitscore')



//start quiz
document.getElementById('startQuiz').addEventListener('click', function () {
    //populate questions div with question
    questionsDiv.innerHTML = questionsDB[0].question;

    //loop through each choice and creat a button
    let choices = questionsDB[0].choices;
    choices.forEach(choice => {
        let choiceBtn = document.createElement('button');
        choiceBtn.textContent = choice;
        choiceBtn.setAttribute('value', choice);
        choiceBtn.setAttribute('class', 'js-choice');
        choicesDiv.appendChild(choiceBtn);


    });


    //append choice button to choices div

});

document.getElementsByClassName('js-choice').addEventListener('click', function () {
    alert('you clicked a choice');
});
//init