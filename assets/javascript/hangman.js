var wordBank = ["PARIS", "LONDON", "SYDNEY", "JOHANNESBURG", "XIANGHAI", "HIROSHIMA", "LAUSANNE", "DUSSELDORF", "ALEXANDRIA", "JERUSALEM", "ISTANBUL", "AMSTERDAM", "BUDAPEST", "SINGAPORE", "MONTREAL", "TRONTO", "MUMBAI", "SHANGHAI", "BANGKOK", "COPENHAGEN", "NAIROBI"];

//Stores random word
var thewrd;

//Stores word in array
var thewrdarr = [];

//Stores letters already guessed
var letges = [];

//Stores user input from key event
var usrinp;

//COUNTER VARIABLES//

//Counts # of times word is guessed
var winnum = 0;
//Counts # of guesses remaining
var gesrem = 10;


// GLOBAL FUNCTIONS //

// Choses Word Randomly From wrdBank Then Pushes '_' To An Array Based On Length Of Word Selected
var rndwrd = function() {
	thewrd = wordBank[Math.floor(Math.random () * wordBank.length)];
	for(var i = 0; i < thewrd.length; i++) {
		thewrdarr.push("_");
		document.getElementById("crntwrd").innerHTML = thewrdarr.join(" ");
	};
	return thewrd
};

//Resets variables to default and calls on rndwrd function to choose new word
var reset = function() {
	thewrdarr = [];
	letges = [];
	gesrem = 10;
	document.getElementById("gesrem").innerHTML = gesrem;
	document.getElementById("letges").innerHTML = letges;
	rndwrd();
};

//

rndwrd();

document.onkeyup = function(event) {

  // Captures the key press, converts it to uppercase, and saves it to a variable.
  usrinp = event.key.toUpperCase();

 	//Pushes user input to array for guessed letters only if it hasn't been guessed already

	if(letges.indexOf(usrinp) === -1) {
		letges.push(usrinp);
		document.getElementById("letges").innerHTML = letges.join(" ");
	};

	//Checks if user input exists in thewrd and pushes input to the corresponding index in thewrdarr

	if(thewrd.indexOf(usrinp) >= 0) {
		for(var j = 0; j < thewrd.length; j++) {
			if(thewrd[j] === usrinp) {
				thewrdarr[j] = usrinp;
				document.getElementById("crntwrd").innerHTML = thewrdarr.join(" ");
			};
		};

		// If input doesn't exist in thewrd subtract 1 from guesses remaining

	} else {
		gesrem--;
		document.getElementById("gesrem").innerHTML = gesrem;
	};

	//Checks if "_" does not exist in thewrdarr (meaning the user has guessed all leteers and wins the game). Add 1 to # of wins. Resets the game.

	if((thewrdarr.indexOf("_") === -1)) {
		winnum++;
		document.getElementById("wins").innerHTML = winnum;
		document.getElementById("lstwrd").innerHTML = thewrd;
		reset();
	};

	//Checks if there are no guesses remaining and resets the game

	if(gesrem === 0) {
		reset();
	};

	//Prints variables to document

	
	
	

  return usrinp;
  return gesrem;
  return winnum;
  return letges;


};
// };