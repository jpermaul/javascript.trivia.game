var header = document.querySelector("#header")
var startScreen = document.querySelector("#startScreen")
var startScreenbtn = document.querySelector("#startScreenbtn")
var quizSection = document.querySelector("#quizSection")
var question = document.querySelector("#question")
var option1 = document.querySelector("#option1")
var option2 = document.querySelector("#option2")
var option3 = document.querySelector("#option3")
var option4 = document.querySelector("#option4")
var scoreSection = document.querySelector("#scoreSection")
var Highscores = document.querySelector("#Highscores")
var restartBtn = document.querySelector("#restartBtn")
var questionIndex = 0
var questions = [
    {
question:"what does html stand for", 
option1: "hitmonlee", 
option2: "hate my life", 
option3: "hotmail", 
option4: "hypertext markup language",
correct: "hypertext markup language"
    },
    {
question:"what does css stand for", 
option1: "hitmonlee", 
option2: "hate my life", 
option3: "hotmail", 
option4: "cascading style sheets",
correct: "cascading style sheets"
    },
    {
question:"what does js stand for", 
option1: "hitmonlee", 
option2: "hate my life", 
option3: "hotmail", 
option4: "javascript",
correct: "javascript"
    },
]

startScreenbtn.addEventListener("click", function() {
    startScreen.style = "display:none";
    quizSection.style = "display: block";
    question.textContent = questions [questionIndex].question
    option1.textContent = questions [questionIndex].option1
    option2.textContent = questions [questionIndex].option2
    option3.textContent = questions [questionIndex].option3
    option4.textContent = questions [questionIndex].option4
option1.addEventListener("click", nextQuestion);
option2.addEventListener("click", nextQuestion);
option3.addEventListener("click", nextQuestion);
option4.addEventListener("click", nextQuestion);
} )
function nextQuestion(){
    questionIndex++ ;
    if (questionIndex == questions.length) {
        quizSection.style = "display:none";
        scoreSection.style = "display: block"; 
        restartBtn.addEventListener("click", function(){
            location.reload()
        })
    }
    else{
    question.textContent = questions [questionIndex].question
    option1.textContent = questions [questionIndex].option1
    option2.textContent = questions [questionIndex].option2
    option3.textContent = questions [questionIndex].option3
    option4.textContent = questions [questionIndex].option4
    }   

}
