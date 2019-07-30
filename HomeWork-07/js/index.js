import quizData from "./quiz-data.js";

const form = document.querySelector(".form");

function testJavaScript({ title, questions }) {
  const fragment = document.createDocumentFragment();
  const mainTitle = document.createElement("h2");
  mainTitle.classList.add("title");
  mainTitle.textContent = title;

  questions.forEach((questionBlock, numberChoise) => {
    const section = document.createElement("section");
    section.classList.add("section");

    const testQuestion = document.createElement("h3");
    testQuestion.classList.add("title-question");
    testQuestion.textContent = questionBlock.question;
    const testList = document.createElement("ol");
    testList.classList.add("list");

    questionBlock.choices.forEach((choice, id) => {
      const testItem = document.createElement("li");
      testItem.classList.add("item");
      const testLabel = document.createElement("label");
      testLabel.textContent = `${choice}`;
      const testInput = document.createElement("input");
      testInput.classList.add("inputs");
      testInput.setAttribute("type", "radio");
      testInput.setAttribute("name", `answer_${numberChoise + 1}`);
      testInput.setAttribute("value", id);
      testInput.setAttribute("required", true); // окно которое выводит "вы выбрали не все обьекты "

      testLabel.prepend(testInput);
      testItem.append(testLabel);
      testList.append(testItem);
      testQuestion.append(testList);
    });
    section.append(testQuestion, testList);
    mainTitle.append(section);
  });
  form.prepend(mainTitle);
}
testJavaScript(quizData);

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const userAnswers = [...document.querySelectorAll("input:checked")].map(el =>
    Number(el.value)
  );
  const textAlert = document.createElement("p");
  textAlert.classList.add("userAlertUnswer");
  const rihghtAnswer = quizData.questions.map(el => el.answer);
  let counter = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (rihghtAnswer[i] === userAnswers[i]) {   
      counter = counter + 1;
      // return p(`Вы ответили правильно на ${counter}`);
    }
  }
  console.log(counter);
  
  form.append(textAlert);
  textAlert.textContent = `Вы дали ${counter} правельных ответов.`;

});

