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

//4. Create a function that will generate the buttons keyboard. Create a variable buttonsHTML and assign it to string of alphabet, use  .split to split into individual strings and return as array. The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. Assign buttonHTML to 'keyboard' id  using document.getElementById
// use .join to join all the elements of an array into a string, set it to empty quotes to remove separator. 

var createButtons = () => {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
    `
    <button
    class = "btn btn-lg btn-primary m-2"
    id = '` + letter + `
    onCLick = "handleGuess('` + letter + `')"
    >
    `+ letter + `
    </button>
    `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
createButtons();