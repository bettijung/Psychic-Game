
// Assign a letter to the Computer's guess.

	var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var selection = Math.floor(Math.random() * choices.length);
	var computerChoice = choices[selection];
		console.log(computerChoice);	
	 

//Create values that will track out wins, losses, guesses left, letters guessed.
	
	// var userText = document.getElementById("user-text");
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var lettersGuessed = [];
	


// Have user type in a letter and store that value.
	
		document.onkeyup = function(event) {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			// console.log(userGuess);

			lettersGuessed.push(" " + userGuess);
			// console.log(lettersGuessed);

		do {	
			// Determine whether user's choice matches computer's choice.
			// If they match, user wins. Increase winning score by 1; reset computer guess and number of guesses.
			if (userGuess == computerChoice) {
				wins ++;
			// If it does not match, add letter to User guesses and allow another guess from user. (9 in total).
			} else {
				guessesLeft --;
			
			}

			if (guessesLeft < 1) {
				losses ++;
			}
			// console.log(guessesLeft);

		

			var resultDOM = document.getElementById('result');

			var resultHTML = "Wins: " + wins + "<br>" +
							"Losses: " + losses + "<br>" +
							"Guesses left: " + guessesLeft + "<br>" +
							"Letters guessed: " + lettersGuessed;

			resultDOM.innerHTML = resultHTML;

		} while (guessesLeft != 0) ;

}

	






	// -------

	// 	// Determine whether user's choice matches computer's choice.	
	// 	// If they match, user wins. Increase winning score by 1; reset computer guess and number of guesses.
	// 	if(computerChoice == userGuess) {
	// 		wins++;
	// 	}


	// 	// If it does not match, add letter to User guesses and allow another guess from user. (9 in total).
	// 		else if(computerChoice != userGuess)  
	// 			guessesSoFar--;

	// 	}


	// 	// If user guess doesn't match computer choice after 9 guesses, add to user losses score.
	// 		else if (guessesLeft < 1) {
	// 			losses++;
	// 		}



	// 	// After a win or a loss, restart the game (guesses left and user guesses), keeping the score as is.






