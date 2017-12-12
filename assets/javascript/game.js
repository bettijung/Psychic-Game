
// Assign a letter to the Computer's guess.
	
	var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var selection = Math.floor(Math.random() * 26);
		var computerChoice = choices[selection];
			// console.log(computerChoice);	


	
	
var userText = document.getElementById("user-text");
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var guessesSoFar

// Have user type in a letter and store that value.
	
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			// console.log(userGuess);
	






	







// userText.innerHTML = "Wins: "+wins+ "<br> Losses: "+losses+ "<br> Guesses Left: "+guessesLeft+ "<br> Your guesses so far: "+guessesSoFar;


}


// 	totalGuesses = totalGuesses += 1;
// 	userGuess = parseInt(input.value);

// 	if (totalGuesses >= 9) {

// 	}



// 	var totalGuesses = 0;
// 	var userWins = 0;
// 	var userLossed = 0;


// 	if(computerChoice == userGuess) {

// 		// User wins, increase winning score by 1; reset computer guess and number of guesses.

// 	else (computerChoice != userGuess){
// 		// Decrese number of guesses left by 1; allow user to guess again. If that was hte last guess attempt, increase lose score by 1.

// 	}
// 	}


// document.write('Wins: ' );
// document.write('Losses: ');
// document.write('Guesses Left: ');
// document.write('Your guesses so far: ');


// // Determine whether user's choice matches computer's choice.


// // If they match, add to user wins score.



// // If it does not match, add letter to User guesses and allot another guess. (9 in total).



// // If user guess doesn't match computer choice after 9 guesses, add to user losses score.



// // After a win or a loss, restart the game (guesses left and user guesses), keeping the score as is.
