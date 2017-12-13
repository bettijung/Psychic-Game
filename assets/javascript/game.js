
// Assign a letter to the Computer's guess.
		var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var computerChoice =  choices[Math.floor(Math.random() * choices.length -1)];
		console.log(computerChoice);	
	 

//Create values that will track out wins, losses, guesses left, letters guessed.
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var lettersGuessed = [];
	

//Function to reset the game
			function resetGame() {
				guessesLeft = 9;
				lettersGuessed = [];
				computerChoice = choices[Math.floor(Math.random() * choices.length -1)];
				console.log(computerChoice);
			}


// Game function.
// Have user type in a letter and store that value.
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			lettersGuessed.push(" " + userGuess);
			

		// Determine whether user's choice matches computer's choice.
		// If they match, user wins. Increase winning score by 1; reset computer guess and number of guesses.
			if (userGuess == computerChoice) {
				wins ++;
				resetGame();
				
			// If it does not match, add letter to User guesses and allow another guess from user. (9 in total).
			} else if (userGuess != computerChoice && guessesLeft != 1) {
				guessesLeft --;
			}

			// If user doesn't guess correctly after 9 tries, record a loss.
			else {
				losses ++;
				resetGame();
			}
			
		// Display results.
			var resultDOM = document.getElementById('result');
			var resultHTML = "Wins: " + wins + "<br>" +
								"Losses: " + losses + "<br>" +
								"Guesses left: " + guessesLeft + "<br>" +
								"Letters guessed: " + lettersGuessed;

			resultDOM.innerHTML = resultHTML;	
}

	
 
			

	




















	
