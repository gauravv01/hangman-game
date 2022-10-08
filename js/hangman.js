var Dummy_data = {
  Programming_language: [
    "python",
    "javascript",
    "mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "kotlin",
    "php",
    "sql",
    "ruby",
  ],
  Color: [
    "White",
    "Yellow",
    "Blue",
    "Red",
    "Green",
    "Black",
    "Brown",
    "Azure",
    "Ivory",
    "Teal",
    "Silver",
    "  Purple",
    "  Gray",
    "Orange",
    "Maroon",
    " Charcoal",
    "Aquamarine",
    "Coral",
  ],Animal:['Dog',	'Cow',	'Cat',	'Horse',
    'Donkey',	'Tiger',	'Lion','	Panther',
    'Leopard',	'Cheetah',	'Bear',	'Elephant',
    	'Turtle',	'Tortoise',	'Crocodile',
    'Rabbit',	'Porcupine',	'Hare',	'Hen']
};
function generateType() {
  let TypeHTML = Object.keys(Dummy_data)
    .map(
      (key) =>
        `
      <button
        class="btn btn-info mb-4"
        id='` +
        key +
        `'
        onClick="handleType('` +
        key +
        `')"
      >
        ` +
        key +
        `
      </button>
    `
    )
    .join("");
  document.getElementById("keyboard").innerHTML = TypeHTML;
    }

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord(type) {
  answer =
   type[
      Math.floor(Math.random() * type.length)
    ];
}

function generateButtons() {
  document.getElementById("keyboard").innerHTML = '';
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` +
        letter +
        `'
        onClick="handleGuess('` +
        letter +
        `')"
      >
        ` +
        letter +
        `
      </button>
    `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById("hangmanPic").src = "./images/" + mistakes + ".jpg";
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You Won!!!";
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "The answer was: " + answer;
    document.getElementById("keyboard").innerHTML = "You Lost!!!";
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "./images/0.jpg";
  document.getElementById('type').innerText='Select the type Below:';
  updateMistakes();
  generateType();
}

document.getElementById("maxWrong").innerHTML = maxWrong;
function handleType(choosentype){
  let Quiztype;
for(const key in Dummy_data){
  if(key==choosentype){
    Quiztype=Dummy_data[key]
  }
}
document.getElementById('type').innerText=`Guess the ${choosentype} Name`
randomWord(Quiztype);
generateButtons();
guessedWord();
}
generateType();
