const questions = [
  {
    question: 'which is the correct spelling?',
    a: "hippopotamus", 
    b: "hipoppotamus",
    correct: 'HIPPOPOTAMUS',
},
{
    question: "which word is the opposite of comfortless?",
    a: "ciliary", 
    b: "cozy",
    correct: 'COZY',

},
{
    question: "Which Word Is The Opposite Of Astute?",
    a: 'gullible', 
    b: "careful",
    correct: 'GULLIBLE',
},
{
    question: "Which word is the opposite of detain?",
    a: "release", 
    b: "silence",
    correct: 'RELEASE',
},
{
  question: 'which word is similar to smite?',
  a: "flee", 
  b: "strike",
  correct: 'STRIKE',
},
{
  question: "which word is opposite of sapient?",
  a: "simple", 
  b: "hunched",
  correct: 'SIMPLE',

},
{
  question: "Which word is the opposite of assure?",
  a: 'quiet', 
  b: "alarm",
  correct: 'ALARM',
},
{
  question: "which word is similar to hinder?",
  a: "loose", 
  b: "check",
  correct: 'CHECK',
},
{
  question: 'which word is similar to miserable?',
  a: "unhappy", 
  b: "wrong",
  correct: 'UNHAPPY',
},
{
  question: "which word is similar to banish?",
  a: "exile", 
  b: "hate",
  correct: 'EXILE',

},
{
  question: "Which Word is the opposite of brazen?",
  a: 'NOISY', 
  b: "BASHFUL",
  correct: 'BASHFUL',
},
{
  question: "Which word is similar to fetter?",
  a: "persist", 
  b: "hamper",
  correct: 'HAMPER',
},
{
question: 'which word is similar to corner?',
a: "trap", 
b: "paint",
correct: 'TRAP',
},
{
question: "which word is opposite of maladrous?",
a: "delicious", 
b: "fragrant",
correct: 'FRAGRANT',

},
{
question: "Which word is similar to abject?",
a: 'despondent', 
b: "desire",
correct: 'DESPONDENT',
},
{
question: "which word is similar to imply?",
a: "stab", 
b: "suggest",
correct: 'SUGGEST',
},
{
  question: 'which word is the opposite of germane?',
  a: "irrelevant", 
  b: "indifferent",
  correct: 'IRRELEVANT',
},
{
  question: "which word is the opposite of zenith?",
  a: "nadir", 
  b: "apex",
  correct: 'NADIR',

},
{
  question: "Which Word is similar to cheat?",
  a: 'stingy', 
  b: "defraud",
  correct: 'DEFRAUD',
},
{
  question: "Which word is similar to tart?",
  a: "acid", 
  b: "law",
  correct: 'ACID',
},
];


const quiz = document.getElementById('quiz');
let quizContainer = document.querySelector('.quiz-container')
const questionEl = document.getElementById('questions');
const scoresContainer = document.querySelector('.score-container');
const scoreBox = document.querySelector('.score');
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
scoresContainer.classList.remove('hide')
// scoreBox.classList.add('hide')
questionContainer.classList.add('hide');
answerContainer.classList.add('hide');

startBtn.addEventListener('click', startQuiz);

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

let unusedQuestions = [...questions];

    let randomQuizData = function () {
      if (unusedQuestions.length === 0) {
        unusedQuestions = [...questions];
      }
    let randomIndex = Math.floor(Math.random() * unusedQuestions.length)
    let question = unusedQuestions[randomIndex];
    unusedQuestions.splice(randomIndex,1)
    return question;
    }

    let question = randomQuizData()
        scores.innerText = score;
        questionEl.innerText = question.question;
         a.innerText = question.a;
         b.innerText = question.b;
         answer = question.correct;
         return answer
  }
  
  
  for (let i = 0; i < answerEl.length; i++) {
    answerEl[i].addEventListener('click', (e) => {
      let correctAnswer = answer ;
      let clickedBtn = e.target;
      if (answer) {
        if (correctAnswer === clickedBtn.innerText) {
        score++
          }
            currentQuiz++
  if(currentQuiz < 10) {
    loadQuiz()
} else {
    quiz.innerHTML = 
    `
    <h2>You answered ${score} out of ${10} questions correctly</h2>
    <button onclick="location.reload()">Play Again</button>
    `
}
}
})
}




 