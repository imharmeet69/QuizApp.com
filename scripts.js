const questions = [
  {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
  },
  {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1
  },
  {
      question: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: 1
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 2
},
{
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: 1
},
{
    question: "What is the square root of 64?",
    options: ["6", "8", "10", "12"],
    answer: 1
},
{
  question: "Which element has the chemical symbol 'O'?",
  options: ["Oxygen", "Gold", "Silver", "Iron"],
  answer: 0
},
{
  question: "What is the capital of Japan?",
  options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
  answer: 1
},
{
  question: "Who painted the Mona Lisa?",
  options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
  answer: 1
},
{
  question: "What is the smallest prime number?",
  options: ["0", "1", "2", "3"],
  answer: 2
}
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(questions);

let currentQuestion = 0;
let score = 0;
let remainingScore = 0;


function loadQuestions() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  
  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.textContent = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkQuestion(index);
    optionsElement.appendChild(button);

  });
  
}



function checkQuestion(selected) {

  if (selected === questions[currentQuestion].answer) {
    score++;
  } else  if (selected !== questions[currentQuestion].answer) {
    remainingScore++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestions();
  } else {
    showScore();
  }
}


function showScore() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('score').style.display = 'block';
  document.getElementById('scoreValue').textContent = score;
    document.getElementById('scoreValue').textContent = `Correct Answer: ${score}`;
  document.getElementById('scoreValue').style.display = 'block';
  document.getElementById("remainValue").textContent = `Uncorrect Answer: ${remainingScore}`;

}

loadQuestions();
