const fs = require("fs");
const lineQuestion = fs
  .readFileSync("question.csv")
  .toString()
  .split("\n")
  .filter(s => !!s);

const questions = lineQuestion.map(line => {
  let lineArray = line.split(",");
  return {
    question: lineArray[0],
    answer: lineArray[1]
  };
});

const readline = require("readline");

const inputReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkRightAnswer(quest, answer) {
    return answer.trim() === quest.answer.trim();
}

var point = 0;

function askPlayer() {
  let quest = questions[Math.floor(Math.random() * questions.length)];
  inputReader.question("Kata acak: " + quest.question + "\nJawaban: ", answer => {
    let playerAnswer = answer.trim();
    if (!playerAnswer) {
      console.info("ANDA BELUM MEMASUKKAN JAWABAN!");
    } else if (checkRightAnswer(quest, playerAnswer)) {
        console.log('\x1b[42m%s\x1b[0m', `JAWABAN ANDA BENAR, POINT ANDA = ${++point}`);
    } else {
        console.log('\x1b[41m%s\x1b[0m', "JAWABAN ANDA SALAH!");
    }
    console.log('\n');
    askPlayer();
  });
}

askPlayer();

module.exports = checkRightAnswer;