let nutritionFactsUL = document.getElementById("nutritionFactsUL");
const nutritionQuizUL = document.getElementById("nutritionQuizUL");

// Display nutrition facts on page load.
function displayNutrition() {
  let nutrition =
    nutritionFacts[Math.floor(Math.random() * nutritionFacts.length)];
  const nutritionItem = `
                                <li id="nutritionItems">
                                <img src="${nutrition.image}" class="nutritionImg" width="200px" height="200px" /><br><br>
                                <b>Fact:</b>  <i>${nutrition.fact}</i><br><br>
                                </li>
                                `;
  nutritionFactsUL.innerHTML = nutritionItem;
}

displayNutrition();

function displayQuestion() {
  //   let quiz = nutritionQuiz[0];

  let quiz = nutritionQuiz[Math.floor(Math.random() * nutritionQuiz.length)];
  const quizItem = `
                    <div id="questionItems">
                    <b>${quiz.question}</b>
                    <button onclick="displayAnswer('${quiz.id}')" class="getAnswerBtn">Get Answer</button>
                        `;
  nutritionQuizUL.innerHTML = quizItem;
}

displayQuestion();

function displayAnswer(quizId) {
  nutritionQuizUL.innerHTML = "";
  quizId = parseInt(quizId);
  let quiz = nutritionQuiz.find((quiz) => quiz.id == quizId);

  const quizAnswerItem = `
                    <p>${quiz.question}</p>
                    <b>${quiz.answer}</b>
                    <button onclick="newQuiz()" class="getQuestionBtn">New Question</button>
  
  `;

  nutritionQuizUL.innerHTML = quizAnswerItem;
}

function newQuiz() {
  nutritionQuizUL.innerHTML = "";
  displayQuestion();
}
