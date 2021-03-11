let nutritionFactsUL = document.getElementById("nutritionFactsUL");
const nutritionQuizUL = document.getElementById("nutritionQuizUL");

// Display nutrition facts on page load.
function displayNutritionFacts() {
  let nutrition =
    nutritionFacts[Math.floor(Math.random() * nutritionFacts.length)];
  const nutritionItem = `
                                <li id="nutritionItems">
                                <b>Nutrition Fact of the Day:</b>  <i>${nutrition.fact}</i><br><br>
                                <img src="${nutrition.image}" class="nutritionImg" width="200px" height="200px" /><br><br>
                                </li>
                                `;
  nutritionFactsUL.innerHTML = nutritionItem;
}

displayNutritionFacts();

function displayQuestion() {
  //   let quiz = nutritionQuiz[0];

  let quiz = nutritionQuiz[Math.floor(Math.random() * nutritionQuiz.length)];
  const quizItem = `
                    <div id="nuritionQuestionItems">
                    <h2>Test Your Nutrition Knowledge!</h2>
                    <h3><b>Question: ${quiz.question}</b></h3>
                    <a href="#btnGetAnswer" onclick="displayAnswer('${quiz.id}')" id ="btnGetAnswer" class="button">Get Answer</a>
                    `;
  nutritionQuizUL.innerHTML = quizItem;
}

displayQuestion();

function displayAnswer(quizId) {
  nutritionQuizUL.innerHTML = "";
  quizId = parseInt(quizId);
  let quiz = nutritionQuiz.find((quiz) => quiz.id == quizId);

  const quizAnswerItem = `
                          <h2>Question: ${quiz.question}</h2>
                          <h4><b>Answer: ${quiz.answer}</b></h4>
                          <a href="#btnNewQuestion" onclick="newQuiz()" id ="btnNewQuestion" class="button">Get New Question</a>
                         `;

  nutritionQuizUL.innerHTML = quizAnswerItem;
}

function newQuiz() {
  nutritionQuizUL.innerHTML = "";
  displayQuestion();
}
