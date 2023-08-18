var right = 0;
var wrong = 0;
var counter = 0;
var timer = 100;
var timerEl = document.querySelector(".timer")
var timeInterval;
var rightEl = document.querySelector("#right");
var wrongEl = document.querySelector("#wrong");
var header = document.querySelector("#header")
var questions = document.querySelector(".quiz-questions");
var introText = document.querySelector(".intro-text");
var quiz = document.querySelector(".quiz-container");
var quizBtns = document.querySelectorAll(".questions");
var quizBtn = document.querySelector(".questions");
var btn1El = document.querySelector(".question-1");
var btn2El = document.querySelector(".question-2");
var btn3El = document.querySelector(".question-3");
var btn4El = document.querySelector(".question-4");
var startG = document.querySelector(".start-game");
var btnQuestion = document.querySelectorAll(".btn-question");
var gameSave = document.querySelector("#gameSave")
var returnBtn = document.querySelector(".return")
var form = document.getElementById("initial-submit");
var clearBtn = document.querySelector(".clear");
var userScoreLink = document.querySelector(".userScoreLink")
var timerInterval;


// timer function. It will count down once the "take quiz" button is selected. 
// Once it reaches 0 it will then display game over and give a option to return to the begining. 
function setTime() {
    timerInterval = setInterval(function(){
        timer --;
        timerEl.textContent = "Time: " + timer

        if(timer == 0) {
            clearInterval(timerInterval)

            questions.textContent = "Time ran out, game over"
            introText.textContent = "Please try again"
           
            var tryAgain =  document.querySelector(".return");
            tryAgain.setAttribute("style", "display: block");
            tryAgain.textContent = "Try again";
            
            btnQuestion.forEach(btn => {
                btn.setAttribute("style", "display: none;");
                btn.setAttribute("data-state", "hidden");
            })

            tryAgain.addEventListener("click", function() {
                startReturn()
            })
        }
        
    }, 1000)
}


// clearing timer interval
function stopTimer() {
    clearInterval(timerInterval)
}

// event link on User Score text to go to the score screen
userScoreLink.addEventListener("click", function() {
    scores()
})

// moved the individual queston arrays into one object that has the multiple arrays with answers.
var questionAll = {
    questions: ["Question 1: What is the correct way to declare a variable in JavaScrip?", "Question 2: What is the result of the following code snippet? console.log(2 + '2')", "Question 3: What will be the output of the following code snippet? console.log(3 === '3')", "Question 4: Inside which HTML element do we put the JavaScript?", "Question 5: How do you write 'Hello World' in an alert box?"],
    answers: [["var myVariable;", "let myVariable;", "const myVariable;", "All of the above"],["4", "22", '"22"', "NaN"],["true", "false", "NaN", "SyntaxError"],["<javascrip>", "<js>", "<scripting>", "<script>"],["alert('Hello World')", "alertBox('Hello World')", "msg('Hello World')", "msgBox('Hello World')"]],
    correct: ["var myVariable;", '"22"',"false", "<script>", "alert('Hello World')"]
}

// updates the right and wrong text in the html
function rightCounter() {
    rightEl.textContent = right;
}
function wrongCounter() {
    wrongEl.textContent = wrong;
}

// these update the text element for the question buttons
function btn1Question() {
    btn1El.setAttribute("style", "display: block");
    btn1El.textContent = question1
}
function btn2Question() {
    btn2El.setAttribute("style", "display: block");
    btn2El.textContent = question2
}
function btn3Question() {
    btn3El.setAttribute("style", "display: block");
    btn3El.textContent = question3
}
function btn4Question() {
    btn4El.setAttribute("style", "display: block");
    btn4El.textContent = question4
}



// first event listener to start-game button. When "take quiz" is clicked it will hide the intro text and start button. Then unhide the question buttons. 
startG.addEventListener("click", function() {

    // hides the introText and start-game button
    introText.textContent = "";
    var startGameButton =  document.querySelector(".start-game");
    var hidStart = startGameButton.getAttribute("data-state");
    
    if (hidStart == "visible") {
        startGameButton.setAttribute("style", "display: none;");
        startGameButton.setAttribute("data-state", "hidden");
    }

    var startGameButton =  document.querySelector(".start-game");
    startGameButton.setAttribute("style", "display: none;");
    startGameButton.setAttribute("data-state", "hidden");

    // changes the h1 text
    questions.textContent = questionAll.questions[counter]
    
    // updates the question button text
    question1 = questionAll.answers[counter][0];
    btn1Question()

    question2 = questionAll.answers[counter][1];
    btn2Question()

    question3 = questionAll.answers[counter][2];
    btn3Question()

    question4 = questionAll.answers[counter][3];
    btn4Question()
    
    setTime()
})

// forEach loop to add the eventListener to each button, 
// then update the text of each button with the next question
btnQuestion.forEach(function(btn) {
    btn.addEventListener("click", function(event){ 

        counter++;

        answerCheck = event.target.textContent;
        
        // check the target text for the answer
        if (answerCheck == questionAll.correct[counter-1]) {
            right++;
            rightCounter()
        } else {
            wrong++;
            wrongCounter()
            // subtract time when answer is incorrect
            timer -= 5;
        }
        
        // exit the loop after a count of 5
        if (counter >= 5) {
            stopTimer()
            endGame();
            return;   
        }

        questions.textContent = questionAll.questions[counter];
        
        question1 = questionAll.answers[counter][0];
        btn1Question()
        
        question2 = questionAll.answers[counter][1];
        btn2Question()
        
        question3 = questionAll.answers[counter][2];
        btn3Question()
    
        question4 = questionAll.answers[counter][3];
        btn4Question()
    })
});

// endGame function that updates the page. Hides the question button, update the text in h1 and intro-text. 
// 
function endGame() {
    btnQuestion.forEach(btn => {
        btn.setAttribute("style", "display: none;");
        btn.setAttribute("data-state", "hidden");
    })

    gameSave.setAttribute("style", "display: block")
    header.setAttribute("style", "display: none")
    questions.textContent = "User Scores"
    introText.textContent = "your score:" + right;

    userScoreLink.setAttribute("style", "display: none")
    
}

form.addEventListener("click", function(event) {
    event.preventDefault();

    userScore = JSON.parse(localStorage.getItem("userScore"))
    if (!userScore) {
        var userScore = {
            initial: [],
            score: []
        }
    }

    var initial = document.getElementById("initial").value;
    
    userScore.initial.push(initial)
    userScore.score.push(right)
    
    // log information locally with initial. Use the initial as the key
    // and then score as the value
    localStorage.setItem("userScore", JSON.stringify(userScore))

    scores()
}) 

// create function to call localSaved data and then to create user score screen
// need to iterate throught the get item of the new object array for the scores.

function scores() {

    var startGameButton =  document.querySelector(".start-game");
    startGameButton.setAttribute("style", "display: none;");
    startGameButton.setAttribute("data-state", "hidden");
    introText.textContent = "";

    btnQuestion.forEach(btn => {
        btn.setAttribute("style", "display: none;");
        btn.setAttribute("data-state", "hidden");
    })

    stopTimer()
    header.setAttribute("style", "display: none")


    var userScoresObject = JSON.parse(localStorage.getItem("userScore"))
    if (!userScoresObject) {
        var userScoresObject = {
            initial: [],
            score: []
        }
    }
    
    questions.textContent = "User Scores"
    introText.setAttribute("style", "background-color: lightgoldenrodyellow")
    gameSave.setAttribute("style", "display: none")
    
    // iterates through the userScoresObject array and then organize the key "initial" with the value "score" in a seperate array.
    for (var i = 0; i < userScoresObject.initial.length; i++) {
        var li = document.createElement("li");
        li.textContent = "Ranking: " + userScoresObject.initial[i] + " " +  userScoresObject.score[i]
        introText.append(li);
    }
   
    returnBtn.setAttribute("style", "display: block")
    returnBtn.setAttribute("data-state", "visible")
    clearBtn.setAttribute("style", "display: block")
    clearBtn.setAttribute("data-state", "visible")

}

returnBtn.addEventListener("click", function() {
    startReturn()
})

//add event listener to clear user scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    introText.innerHTML = "";
})

// function to revert the screen back to the begining. 
function startReturn() {

    right = 0;
    wrong = 0;
    counter = 0;
    timer = 100;
    stopTimer()

    rightEl.textContent = 0;
    wrongEl.textContent = 0;

    questions.textContent = "Code Quiz Challange!"
    introText.textContent = "Intoduction text to the game and how to use it"
    introText.setAttribute("style", "background-color: none")

    var startGameButton =  document.querySelector(".start-game");
    startGameButton.setAttribute("style", "display: block;");
    startGameButton.setAttribute("data-state", "visible");
    header.setAttribute("style", "display: flex")
    startGameButton.textContent = "Take Quiz";

    userScoreLink.setAttribute("style", "display: block")

    btnQuestion.forEach(btn => {
        btn.setAttribute("style", "display: none;");
        btn.setAttribute("data-state", "hidden");
    })

    returnBtn.setAttribute("style", "display: none;")
    returnBtn.setAttribute("data-state", "hidden")
    clearBtn.setAttribute("style", "display: none;")
    clearBtn.setAttribute("data-state", "hidden")
}