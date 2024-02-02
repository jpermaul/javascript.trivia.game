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
var timerElement = document.querySelector("#timeRemaining")
var timerCount = 60
var score = 0
var timer = 0
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
    {
question:"Which HTML tag is used to define a hyperlink?", 
option1: "<link>", 
option2: "<href>", 
option3: "<a>", 
option4: "<url>",
correct: "<a>"
    },
    {
question:"Which CSS property is used to change the text color of an element?", 
option1: "text-style", 
option2: "color", 
option3: "font-color", 
option4: "text-color",
correct: "color"
    },
//     {
// question:"Which of the following is NOT a valid HTML tag?", 
// option1: "<div>", 
// option2: "<section>", 
// option3: "<span>", 
// option4: "<paragraph>",
// correct: "<paragraph>"
//     },
//     {
// question:"What JavaScript keyword is used to declare a variable?", 
// option1: "define", 
// option2: "var", 
// option3: "container", 
// option4: "set",
// correct: "var"
//     },
//     {
// question:"Which HTML element is used to create an unordered list?", 
// option1: "<list>", 
// option2: "<ol>", 
// option3: "<ul>", 
// option4: "<li>",
// correct: "<ul>"
//     },
//     {
// question:"What is the purpose of JavaScript's querySelector method?", 
// option1: "To select and modify HTML elements", 
// option2: "To define a new variable", 
// option3: "To create a function", 
// option4: "To link external JavaScript files",
// correct: "To select and modify HTML elements"
//     },
//     {
// question:"What does the DOCTYPE declaration in HTML do?", 
// option1: "It defines the document type", 
// option2: "It specifies the document's title", 
// option3: "It sets the background color", 
// option4: "It creates a hyperlink",
// correct: "It defines the document type"
//     },
//     {
// question:"Which JavaScript operator is used for strict equality comparison (both value and type)", 
// option1: "==", 
// option2: "===", 
// option3: "=", 
// option4: "!==",
// correct: "==="
//     },
//     {
// question:"Which CSS property is used to add space inside an element's border?", 
// option1: "padding", 
// option2: "margin", 
// option3: "border-spacing", 
// option4: "spacing",
// correct: "padding"
//     },
//     {
// question:"How can you comment out multiple lines of code in JavaScript?", 
// option1: "//This is a comment", 
// option2: "<!-- This is a comment -->", 
// option3: "/ This is a comment /", 
// option4: "-This is a comment-",
// correct: "//This is a comment"
//     },
//     {
// question:"In JavaScript, what is the purpose of the if statement?", 
// option1: "To define a function", 
// option2: "To create a loop", 
// option3: "To conditionally execute code", 
// option4: "To declare a variable",
// correct: "To conditionally execute code"
//     },
//     {
// question:"What is the default value for the display property in CSS?", 
// option1: "inline", 
// option2: "block", 
// option3: "inline-block", 
// option4: "none",
// correct: "block"
//     },
//     {
// question:"Which JavaScript method is used to add a new element to the end of an array?", 
// option1: "append", 
// option2: "push", 
// option3: "concat", 
// option4: "javascript",
// correct: "push"*/
//     },

]

//defines function to set click event to start timer countdown, if timer hits zero game ends.
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount < 1) {
            quizSection.style = "display: none";
            scoreSection.style = "display: block"
            clearInterval(timer);
            timerElement.textContent = 0
            endQuiz()
            restartBtn.addEventListener("click", function(){
                location.reload()
            })
        }
    
    }, 1000)  

}
//when start button is clicked start timer function is called and game starts. Click event added to answer choices to run nextQuestion function when clicked.
startScreenbtn.addEventListener("click", function() {
    startTimer();
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
//defines function to determine whether selected answer is correct. If incorrect, 15 seconds is subtracted from timer. Regardless of correct or incorrect, a new question will be displayed. Game will end if there are no more questions.
function nextQuestion(){
    selection = this.textContent
   
    if ( selection !== questions[questionIndex].correct){
        timerCount=timerCount-15
        timerElement.textContent = timerCount;
    }

    questionIndex++ ;
    if (questionIndex == questions.length) {
        quizSection.style = "display:none";
        scoreSection.style = "display: block"; 
        score = timerCount
        timerElement.textContent = score
        endQuiz()
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

// defines function to end game. When game end is triggered a prompt box is displayed for the user to enter their name. The score equals the time remaining. Score and name is displayed and saved in locale storage.
function endQuiz() {
    var record = prompt("Enter name");
    localStorage.setItem("score",record +": "+ score);
    var li=document.createElement("li")
    li.textContent = localStorage.getItem("score");
    Highscores.appendChild(li);
    clearInterval(timer)

}