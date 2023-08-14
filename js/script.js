var right = 0
var wrong = 0
var timmer = 0
var questions = document.querySelector(".quiz-questions")
var temptext = document.querySelector(".temp-text")
var quiz = document.querySelector(".quiz-container")
var quizBtn = document.querySelectorAll(".questions")


// need to create several functions that house a question, with 4 answers. Those 4 answers are clickable and should give a response back of right or wrong
// want to make it random pick if possible from the host of question functions

quiz.addEventListener("click", function(event) {
    // targets that element that is clicked and does the event. 
    // var target = event.target;
    
    
    // able to replace the header and clear out the text area. Need to add new buttons that will gererate
    questions.textContent = "Question 1: How do you spell door?";
    temptext.textContent = "";
    quizBtn.setAttribute(
        "display",
        "none"
        )
        
        return;
    })
    
quizBtns()

// // got the .start-game button to work with the addEventListener
// quizBtn.addEventListener("click", question1)





// going to review this code later to see why the setAttribute wasn't working
// function quizBtns() {
//     quizBtn.setAttribute("style", "display: none;")
// }
