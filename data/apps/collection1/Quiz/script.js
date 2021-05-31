let questions = [
  {
    question: "Animals that eat both plants and meat are called:",
    "1": "Herbivores",
    "2": "Carnivores",
    "3": "Omnivores",
    "4": "Bothivores",
    answer: 3
  },
  {
    question: "Name the capital of Florida.",
    "1": "Orlando",
    "2": "Tampa",
    "3": "Miami",
    "4": "Tallahassee",
    answer: 4
  },
  {
    question: "When is Pi Day celebrated?",
    "1": "May 14",
    "2": "March 14",
    "3": "May 4",
    "4": "March 4",
    answer: 2
  },
  {
    question: "Who was the first president?",
    "1": "Barack Obama",
    "2": "Abraham Lincoln",
    "3": "George Washington",
    "4": "Donald Trump",
    answer: 3
  },
  {
    question: `Aaron is staying at a hotel that charges $99.95 per night plus tax for a room. A tax of 8% is applied to the room rate, and an additional onetime untaxed fee of $5.00 is charged by the hotel. Which of the following represents Aaron’s total charge, in dollars, for staying x nights?`,
    "1": "(99.5 + 0.08x) + 5",
    "2": "1.08(99.95x) + 5",
    "3": "1.08(99.95x + 5)",
    "4": "1.08(99.95 + 5)x",
    answer: 2
  },
  {
    question: `A company’s manager estimated that the cost C, in dollars, of producing n items is (C = 7n + 350). The company sells each item for $12. The company makes a profit when total income from selling a quantity of items is greater than the total cost of producing that quantity of items. Which of the following inequalities gives all possible values of n for which the manager estimates that the company will make a profit?`,
    "1": "n > 70",
    "2": "n < 84",
    "3": "n > 76",
    "4": "n > 84",
    answer: 1
  }
];

let index;
let answers; 
let userAnswers;
let question;
let form;
let radioBtns;
let labels;
let time;
let timer;
const quizCard = document.querySelector(".quiz-card");

const updateQuizCard = () => {
  if (index == 0) question.classList.remove("flex");
  if (index < questions.length) {
    question.innerHTML = `<p>${questions[index]["question"]}</p>`;
    for (let i=0; i<radioBtns.length; i++) {
      labels[i].innerText = questions[index][`${i+1}`];
    }
  }
  else {
    clearInterval(timer);
    const correct = questions.reduce((accumulator, item) => {
      return item.answer == userAnswers.shift() ? accumulator + 1 : accumulator;
    }, 0);
    quizCard.innerHTML = `
    <div class="question flex">
      <p>You've got ${correct}/${questions.length} correct</p>
      <p>Your time was ${time.toFixed(2)} seconds</p>
    </div>
    <form>
      <input type="submit" value="Retry">
    </form> 
    `;
    init();
  }
}

const shuffleArray = array => {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

const init = () => {
  index = -1;
  userAnswers = [];
  shuffleArray(questions);
  question = document.querySelector(".question");
  form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (index == -1) {
      form.innerHTML = `
        <input type="radio" name="answer" value="1">
        <label for="1"></label><br>
        <input type="radio" name="answer" value="2">
        <label for="2"></label><br>
        <input type="radio" name="answer" value="3">
        <label for="3"></label><br>
        <input type="radio" name="answer" value="4">
        <label for="4"></label><br>
        <input type="submit" value="submit">
      `;
      radioBtns = document.getElementsByName("answer");
      labels = document.getElementsByTagName("label");
      time = 0;
      timer = setInterval(() => {
        time += 0.01;
      }, 10);
      updateQuizCard(index++, -1);
    }
    else {
      let answer;
      for (let btn of radioBtns) {
        if (btn.checked) answer = +btn.value;
      }
      if (!answer) return;
      userAnswers.push(answer--);
      radioBtns[answer].checked = false;
      index++;
      updateQuizCard();
    }
  });
}
init();