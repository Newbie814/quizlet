const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitAnswers = document.getElementById('submit');

const quizData = [
  {
    question: 'What does RPE stand for?',
    a: 'Radically Proficient Expert',
    b: 'Really Powerful Exercise',
    c: 'Rate of Perceived Exertion',
    d: 'Reps Provide Energy',
    answer: 'c',
  },
  {
    question: 'What drives muscle adaptation?',
    a: 'Number of reps',
    b: 'The level of stress applied',
    c: 'How badass you feel',
    d: 'Getting your heart rate up',
    answer: 'b',
  },
  {
    question: 'Which is the most accurate way to categorize food?',
    a: 'Protein, Fat, Carbs',
    b: 'Vitamins, Minerals, Nutrients',
    c: 'Keto, Fasting, Low-fat',
    d: 'Plant, Animal, Crap',
    answer: 'd',
  },
];

let currentQuestion = 0;

let score = 0;

startQuiz();

function startQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// function getSelected() {
//   let answer;

//   answerEls.forEach((answerEl) => {
//     if (answerEl.checked) {
//       answer = answerEl.id;
//     }
//   });
//   return answer;
// }

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      realAnswer = answerEl.id;
    }
  });

  return realAnswer;
}

submitAnswers.addEventListener('click', () => {
  const realAnswer = getSelected();

  if (realAnswer) {
    if (realAnswer === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      startQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You got ${score}/${quizData.length} questions correct</h2>

      <button onclick="location.reload()">Restart</button>
      `;
    }
  }
});
