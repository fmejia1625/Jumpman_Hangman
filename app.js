// 1. Create a variable words with 3 strings to test
var words = [
  "Jordan Brand",
  "Finals Trophy",
  "Slam Dunk"
]
// 2. Start defining things that will be used in the game, i.e., define answer, maxWrong, wrongGUesses, etc. 
let answer = '';
let maxWrong = 5;
let wrongGuesses  = 0;
let guessed = [];

// 3. Create a function that will pick a random word from the var words array. The Math.floor() function returns the largest integer less than or equal to a given number. Math.random() used with Math.floor() can be used to return random integers.
var randomWord = () => {
  answer = words[Math.floor(Math.random() * words.length)];

  alert(answer);
}

randomWord();