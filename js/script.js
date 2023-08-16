var right = 0;
var wrong = 0;
var counter = 0;
var rightEl = document.querySelector("#right");
var wrongEl = document.querySelector("#wrong");
var timmer = 0;
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

// moved the individual queston arrays into one object that has the multiple arrays with answers.
var questionAll = {
    questions: ["Question 1: How do you spell door?", "Question 2: what is the number 1?", "Question 3: Which is a fruit"],
    answers: [["Floor", "Door", "dooooor", "Moore"],["1", "2", "3", "4"],["Strawbery", "Coconut", "Tomatoe", "Dirt"],[],[]],
    correct: ["Door", "1","Tomatoe"]
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
})

// forEach loop to add the eventListener to each button, 
// then update the text of each button with the next question
btnQuestion.forEach(function(btn) {
    if (count > 5 ) {
        return;
    }
    btn.addEventListener("click", function(event){ 
        answerCheck = event.target.textContent;
        
        if (answerCheck == questionAll.correct[counter]) {
            right++;
            rightCounter()
        } else {
            wrong++;
            wrongCounter()
        }
    
        counter++;
        questions.textContent = questionAll.questions[counter];
    
        question1 = questionAll.answers[counter][0];
        console.log(q2.q2Answers)
        btn1Question()
    
        question2 = questionAll.answers[counter][1];
        btn2Question()
    
        question3 = questionAll.answers[counter][2];
        btn3Question()
    
        question4 = questionAll.answers[counter][3];
        btn4Question()
        
    })
    
});









// was having a issue with having the questions starting one afteranother. Asked ChatGPT and it came up with "promises and chaining"
// function question1(event) {
//     // event.preventDefault
//     // return new Promise((resolve) => {
//         // var questionButton = document.querySelectorAll(".questions");
//         // questions.textContent = q1.q1Question;
//         // // iterate throught the q array and inserts the question text in the button elements
//         // for (var index = 0; index < questionButton.length; index++) {
//         //     questionButton[index].textContent = q1.q1Answers[index]
//         // }

//         // selecting just the question buttons
//         var qbg = document.querySelector(".question-btn-group");

//         // event click to the question buttons to decied on the answer. 
//         function handler(event) {
//             const answerCheck = event.target.textContent;
        
//             if (answerCheck == "Door") {
//                 right++;
//                 rightCounter()
//             } else {
//                 wrong++;
//                 wrongCounter()
//             }

//             qbg.removeEventListener("click", handler);
//             resolve();
//         };

//         qbg.addEventListener("click", handler);
// };


// function question2() {
//     return new Promise((resolve) => {
//         questions.textContent = q2.q2Question;
//         // iterate throught the q array and inserts the question text in the button elements
//         for (var index = 0; index < questionButton.length; index++) {
//             questionButton[index].textContent = q2.q2Answers[index]
//         }

//         // selecting just the question buttons
//         var qbg = document.querySelector(".question-btn-group");

//         // event click to the question buttons to decied on the answer. 
//         function handler(event) {
//             const answerCheck = event.target.textContent;
        
//             if (answerCheck == "1") {
//                 right++;
//                 rightCounter()
//             } else {
//                 wrong++;
//                 wrongCounter()
//             }

//             qbg.removeEventListener("click", handler);

//             resolve();
//         };

//         qbg.addEventListener("click", handler);
//     });
// }

// question1()
//     .then(question2)



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
