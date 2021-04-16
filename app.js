// 1. Create a variable words with 3 strings to test
var words = [
  "Jordan",
  "Rings",
  "crossover"
]
// 2. Start defining things that will be used in the game, i.e., define answer, maxWrong, wrongGuesses, etc. 
let answer = '';
let maxWrong = 5;
let wrongGuesses  = 0;
let guessed = [];
let wordStatus = null;

// 3. Create a function that will pick a random word from the var words array. The Math.floor() function returns the largest integer less than or equal to a given number. Math.random() used with Math.floor() can be used to return random integers.
var randomWord = () => {
  answer = words[Math.floor(Math.random() * words.length)];

  // alert(answer);
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

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

// 6. Create handleGuess function with parameter of chosenletter
// var handleGuess = (chosenletter) => {
//   guessed.indexOf(chosenletter) ===
// }


// 5. Create a function for the guessedWord. Using ? as a ternary operator in place of "If...Else" is as follows: 
//  Condition (to be tested) ? True(value if true) : False (value if false). Define wordStatus as null. Split string into substrings and return them as array. Use .map and then check if letter exists in the guessed array. If it exists, it will be greater than 0, else it will be -1. Letter will be displayed as underscores and use .join to remove commas. 
// Assign wordStatus to #wordSpotlight id. 
// Call the function
// Comes up with a different word to be guessed with each refresh. 

  var guessedWord = () => {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >=0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
  }

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
createButtons();
guessedWord();