var right = 0;
var wrong = 0;
var rightEl = document.querySelector("#right");
var wrongEl = document.querySelector("#wrong");
var timmer = 0;
var questions = document.querySelector(".quiz-questions");
var temptext = document.querySelector(".temp-text");
var quiz = document.querySelector(".quiz-container");
var quizBtn = document.querySelectorAll(".questions");
var q1 = {
    q1Question: "Question 1: How do you spell door?",
    q1Answers: ["Floor", "Door", "dooooor", "Moore"],
}
var q2 = {
    q2Question: "Question 2: what is the number 1?",
    q2Answers: ["1", "2", "3", "4"],
}

// updates the right and wrong text in the html
function rightCounter() {
    rightEl.textContent = right;
}

function wrongCounter() {
    wrongEl.textContent = wrong;
}

quiz.addEventListener("click", function(event) {
    // changes H1 to the question, clears out the text of the start menu, hides the .start-game button.
    temptext.textContent = "";
    var startGameButton =  document.querySelector(".start-game");
    var hidStart = startGameButton.getAttribute("data-state");
    
    if (hidStart == "visible") {
        startGameButton.setAttribute("style", "display: none;");
        startGameButton.setAttribute("data-state", "hidden");
    }
    // selects all the question buttons and change their display back to on
    var questionButton = document.querySelectorAll(".questions");
    questionButton.forEach(function(questionButton){
        var questionStatus = questionButton.getAttribute("data-state");
    
        if (questionStatus == "hidden") {
            questionButton.setAttribute("style", "display: block")
        }
    })
})



// was having a issue with having the questions starting one afteranother. Asked ChatGPT and it came up with "promises and chaining"
function question1(event) {
    // event.preventDefault
    // return new Promise((resolve) => {
        questions.textContent = q1.q1Question;
        // iterate throught the q array and inserts the question text in the button elements
        for (var index = 0; index < questionButton.length; index++) {
            questionButton[index].textContent = q1.q1Answers[index]
        }

        // selecting just the question buttons
        var qbg = document.querySelector(".question-btn-group");

        // event click to the question buttons to decied on the answer. 
        function handler(event) {
            const answerCheck = event.target.textContent;
        
            if (answerCheck == "Door") {
                right++;
                rightCounter()
            } else {
                wrong++;
                wrongCounter()
            }

            qbg.removeEventListener("click", handler);
            resolve();
        };

        qbg.addEventListener("click", handler);
};


function question2() {
    return new Promise((resolve) => {
        questions.textContent = q2.q2Question;
        // iterate throught the q array and inserts the question text in the button elements
        for (var index = 0; index < questionButton.length; index++) {
            questionButton[index].textContent = q2.q2Answers[index]
        }

        // selecting just the question buttons
        var qbg = document.querySelector(".question-btn-group");

        // event click to the question buttons to decied on the answer. 
        function handler(event) {
            const answerCheck = event.target.textContent;
        
            if (answerCheck == "1") {
                right++;
                rightCounter()
            } else {
                wrong++;
                wrongCounter()
            }

            qbg.removeEventListener("click", handler);

            resolve();
        };

        qbg.addEventListener("click", handler);
    });
}

question1()
    .then(question2)



    // may or may not need this
    // first question button 3
    // var qb1 = document.body.children[1].children[3];
    // var qb2 = document.body.children[1].children[4];
    // var qb3 = document.body.children[1].children[5];
    // var qb4 = document.body.children[1].children[6];

    
// quizBtns()

// // got the .start-game button to work with the addEventListener
// quizBtn.addEventListener("click", question1)





// going to review this code later to see why the setAttribute wasn't working
// function quizBtns() {
//     quizBtn.setAttribute("style", "display: none;")
// }
