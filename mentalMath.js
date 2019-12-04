const questionList = require("./questions.json");
const { stdin, stdout, exit, on } = process;

const displayQuestion = function(questionList, qNo) {
  console.log(questionList[qNo].question);
};

const isCorrect = function(answer, questionList, qNo) {
  return answer == +questionList[qNo].answer;
};

const main = function(questionList) {
  let qNo = 0;
  let scores = 0;
  displayQuestion(questionList, qNo);
  stdin.on("data", answer => {
    let message = `Incorrect Answer\t -------> scores:${scores}`;
    if (isCorrect(answer, questionList, qNo)) {
      scores++;
      message = `Correct Answer\t ------> scores:${scores}`;
    }
    console.log(message);
    displayQuestion(questionList, ++qNo);
    if (questionList.length - 1 == qNo) {
      console.log("Quiz Over");
      exit();
    }
  });
};

main(questionList);
