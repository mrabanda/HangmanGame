class Game {
  constructor() {
    this.wordBank = ["PARIS", "LONDON", "SYDNEY", "SAN FRANCISCO", "JOHANNESBURG", "XIANGHAI", "HIROSHIMA", "LAUSANNE", "DUSSELDORF", "ALEXANDRIA", "JERUSALEM", "ISTANBUL", "AMSTERDAM", "BUDAPEST", "SINGAPORE", "MONTREAL", "TORONTO", "MUMBAI", "SHANGHAI", "BANGKOK", "COPENHAGEN", "NAIROBI"];
    this.randomWord = "";
    this.lastCorrectWord = "";
    this.randomWordArray = [];
    this.guessedLetters = new Set();
    this.numberOfWins = 0;
    this.guessesRemaining = 10;
    this.currentWordElement = document.getElementById("current-word");
    this.guessesRemainingElement = document.getElementById("guess-remaining");
    this.guessedLettersElement = document.getElementById("letter-guess");
    this.numberOfWinsElement = document.getElementById("wins");
    this.lastWordElement = document.getElementById("last-word");
		
    this.reset();
  }

  fetchRandomWord() {
    this.randomWord = this.wordBank[Math.floor(Math.random () * this.wordBank.length)];
    return this.randomWord;
  }

  createRandomWordArray() {
    this.randomWordArray = Array.from(this.randomWord, x => x === " " ? "&nbsp;" : "_");
    return this.randomWordArray;
  }

  updateRandomWordArray(letter) {
    for (const [i, char] of [...this.randomWord].entries()) {
      if (char === letter) this.randomWordArray[i] = letter;
    }
    this.setCurrentWordElement();
  }

  decrementGuessesRemaining() {
    this.guessesRemaining -= 1;
    this.setGuessesRemainingElement();
  }

  incrementnumberOfWins() {
    this.numberOfWins += 1;
  }
	
  checkLetterAleadyGuessed(letter) {
    if (this.guessedLetters.has(letter)) return true;
    return false;
  }

  addToGuessedLetters(letter) {
    this.guessedLetters.add(letter);
    this.setGuessedLettersElement();
  }
	
  checkLetterInWord(letter) {
    if ([...this.randomWord].includes(letter)) return true;
    return false;
  }

  // DOM METHODS
	
  setCurrentWordElement() {
    this.currentWordElement.innerHTML = this.randomWordArray.join("");
  }

  setGuessedLettersElement() {
    this.guessedLettersElement.innerHTML = [...this.guessedLetters].join(" ");
  }

  setGuessesRemainingElement() {
    this.guessesRemainingElement.innerHTML = this.guessesRemaining;
  }

  setnumberOfWinsElement() {
    this.numberOfWinsElement.innerHTML = this.numberOfWins;
  }

  setlastWordElement() {
    this.lastWordElement.innerHTML = this.lastCorrectWord;
  }

  reset() {
    this.randomWord = "";
    this.randomWordArray = [];
    this.guessedLetters = new Set();
    this.guessesRemaining = 10;
    this.fetchRandomWord();
    this.createRandomWordArray();
    this.setCurrentWordElement();
    this.setGuessesRemainingElement();
    this.setGuessedLettersElement();
    this.setnumberOfWinsElement();
    this.setlastWordElement();
  }

  // play game
  play(event) {
    // return if key is not a letter
    if (!(event.keyCode >= 65 && event.keyCode <= 90)) return null;
    const userInput = event.key.toUpperCase();

    // return if letter has been guessed already
    if (this.checkLetterAleadyGuessed(userInput)) return null;
    this.addToGuessedLetters(userInput);

    // if letter isn't in word decrement guesses
    if (!this.checkLetterInWord(userInput)) {
      this.decrementGuessesRemaining();
      // update the random word array	
    } else {
      this.updateRandomWordArray(userInput);
    }

    // reset game if out of guesses
    if (this.guessesRemaining === 0) this.reset();

    if (!this.randomWordArray.includes("_")) {
      this.lastCorrectWord = this.randomWord;
      this.incrementnumberOfWins();
      this.reset();
    }
  }
}

const newGame = new Game();
document.addEventListener("keyup", (e) => newGame.play(e));