let questions = [
  {
      question: 'what is my name',
      a: "musiliu", 
      b: "morzook",
      correct: 'morzook',
  },
  {
      question: "Where is your home",
      a: "abeokuta", 
      b: "lagos",
      correct: 'abeokuta',

  },
  {
      question: "What is your age",
      a: '33', 
      b: "35",
      correct: '35',
  },
  {
      question: "What is 2 + 2",
      a: "4", 
      b: "88",
      correct: '4',
  },
  {
    question: 'who is nigeria press',
    a: "bubu", 
    b: "jona",
    correct: 'bubu',
},
{
    question: "where is olumo",
    a: "itoku", 
    b: "ikija",
    correct: 'ikija',

},
{
    question: "What is your logo",
    a: 'ram', 
    b: "chicken",
    correct: 'ram',
},
{
    question: "your person",
    a: "calm", 
    b: "rage",
    correct: 'calm',
},
];


const quiz = document.getElementById('quiz');
let quizContainer = document.querySelector('.quiz-container')
const questionEl = document.getElementById('questions');
const scoresContainer = document.querySelector('.score-container');
const scores = document.getElementById('score-h3');
const answerEl = document.querySelectorAll('.answers');
const questionContainer= document.querySelector('.question-container');
const answerContainer = document.getElementById('answer-container');
const a = document.getElementById('a-option');
const b = document.getElementById('b-option');
const startBtn = document.getElementById('start-button')
const startContainer = document.getElementById('start-text')

currentQuiz = 0
let score = 0


startQuiz()
loadQuiz()

startContainer.classList.remove('hide')
startBtn.classList.remove('hide');
 startBtn.addEventListener('click', startQuiz);
scoresContainer.classList.add('hide')
 questionContainer.classList.add('hide');
 answerContainer.classList.add('hide');


   function startQuiz() {
     if (true) {
       startContainer.classList.add('hide')
       questionContainer.classList.remove('hide')
       answerContainer.classList.remove('hide')
       startBtn.classList.add('hide')
     }    
    }

function loadQuiz() {
scoresContainer.classList.remove('hide')
answerContainer.classList.remove('hide')

    let randomQuizData = function () {
      return questions [Math.floor(Math.random()*questions.length )]
    }
        let y = randomQuizData()
        scores.innerText = score;
        questionEl.innerText = y.question;
         a.innerText = y.a;
         b.innerText = y.b;
         answer = y.correct;
         return answer
  }

let correctAnswer = answer;

answerContainer.addEventListener('click', (e) => {
  let correctAnswer = answer ;
console.log(correctAnswer);
  let clickedBtn = e.target;
  if (answer) {
    if (correctAnswer === clickedBtn.innerText) {
      score++
  }
  currentQuiz++

  if(currentQuiz < questions.length) {
    loadQuiz()
} else {
    quiz.innerHTML = 
    `
    <h2>You answered ${score} out of ${questions.length} questions correctly</h2>

    <button onclick="location.reload()">Play Again</button>
    `
}
}
})



 


 






