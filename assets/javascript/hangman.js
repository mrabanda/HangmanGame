var wordBank = ["PARIS", "LONDON", "SYDNEY", "SAN FRANCISCO", "JOHANNESBURG", "XIANGHAI", "HIROSHIMA", "LAUSANNE", "DUSSELDORF", "ALEXANDRIA", "JERUSALEM", "ISTANBUL", "AMSTERDAM", "BUDAPEST", "SINGAPORE", "MONTREAL", "TRONTO", "MUMBAI", "SHANGHAI", "BANGKOK", "COPENHAGEN", "NAIROBI"];

//Stores random word
var theWord;

//Stores word in array
var theWordarr = [];

//Stores letters already guessed
var letterGuess = [];

//Stores user input from key event
var userInput;

//COUNTER VARIABLES//

//Counts # of times word is guessed
var winNumber = 0;
//Counts # of guesses remaining
var guessRemaining = 10;


// GLOBAL FUNCTIONS //

// Choses Word Randomly From wrdBank Then Pushes '_' To An Array Based On Length Of Word Selected
var randomWord = function() {
	theWord = wordBank[Math.floor(Math.random () * wordBank.length)];
	for(var i = 0; i < theWord.length; i++) {
		if(theWord[i] === " ") {
			theWordarr.push("&nbsp;");
		} else {
			theWordarr.push("_");
	};
		document.getElementById("current-word").innerHTML = theWordarr.join("");
	};
	return theWord
};

//Resets variables to default and calls on randomWord function to choose new word
var reset = function() {
	theWordarr = [];
	letterGuess = [];
	guessRemaining = 10;
	document.getElementById("guess-remaining").innerHTML = guessRemaining;
	document.getElementById("letter-guess").innerHTML = letterGuess;
	randomWord();
};

randomWord();

document.onkeyup = function(event) {
	//checks if keypress is a letter
	if ((event.keyCode >= 65 && event.keyCode <= 90)) {
  	// Captures the key press, converts it to uppercase, and saves it to a variable.
  	userInput = event.key.toUpperCase();
	} else {
		return
	}

 	//Pushes user input to array for guessed letters only if it hasn't been guessed already

	if(letterGuess.indexOf(userInput) === -1) {
		letterGuess.push(userInput);
		document.getElementById("letter-guess").innerHTML = letterGuess.join(" ");
	} else {
		return
	}

	//Checks if user input exists in theWord and pushes input to the corresponding index in theWordarr

	if(theWord.indexOf(userInput) >= 0) {
		for(var j = 0; j < theWord.length; j++) {
			if(theWord[j] === userInput) {
				theWordarr[j] = userInput;
				document.getElementById("current-word").innerHTML = theWordarr.join(" ");
			};
		};

		// If input doesn't exist in theWord subtract 1 from guesses remaining

	} else {
		guessRemaining--;
		document.getElementById("guess-remaining").innerHTML = guessRemaining;
	};

	//Checks if "_" does not exist in theWordarr (meaning the user has guessed all leteers and wins the game). Add 1 to # of wins. Resets the game.

	if((theWordarr.indexOf("_") === -1)) {
		winNumber++;
		document.getElementById("wins").innerHTML = winNumber;
		document.getElementById("last-word").innerHTML = theWord;
		reset();
	};

	//Checks if there are no guesses remaining and resets the game

	if(guessRemaining === 0) {
		reset();
	};

	//Prints variables to document

  return userInput;
  return guessRemaining;
  return winNumber;
  return letterGuess;
};