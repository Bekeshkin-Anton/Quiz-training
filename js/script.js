// Вопросы и ответы
const quizData = [
  {
    question: 'What does HTML stand for? ',
    a: 'Helicopters Terminal Motorboats Lamborginis',
    b: 'Hypertext Markup Language',
    c: 'Hyperloop Machine Language',
    correct: 'b',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Cascading Style Sheets',
    b: 'Cars SUVs Sailboats',
    c: 'Central Style Ssheets',
    correct: 'a',
  },
  {
    question: 'What year did JavaScript appear?',
    a: '1899',
    b: '2005',
    c: '1995',
    correct: 'c',
  },
  {
    question: 'Who is the author of the JavaScript language?',
    a: 'Bill Gates',
    b: 'Brendan Eich',
    c: 'Steve jobs',
    correct: 'b',
  },
  {
    question: 'What language is this project writen in?',
    a: 'JavaScript',
    b: 'Ruby',
    c: 'C++',
    correct: 'a',
  },
];
// Переменные
const quiz = document.getElementById('container');
const answerElements = document.querySelectorAll('.answer');
const questionElements = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// Загрузка квиза
loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElements.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}
//Обнуление input`ов
function deselectAnswers() {
  answerElements.forEach((answerEl) => (answerEl.checked = false));
}
// Проверка выбора input`а
function getSelected() {
  let answer;

  answerElements.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
//Переход к следующему вопросу
submit.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h1>You answered corectly at ${score}/${quizData.length} question</h1>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
