var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

console.log("Computer: " + computerChoice);


var compare = function(choice1, choice2) {
	if(choice1 === choice2) {
        return "The result is a tie!";
    }

    if(choice1 != choice2) {
    	if(choice1 != "rock") {
    		return "invalid entry";
    	}
    	else if(choice1 != "scissors") {
    		return "invalid entry";
    	}
    	else(choice1 != "paper") {
    		return "invalid entry";
    	}
    }

   if(choice1 === "rock") {
   		if(choice2 === "paper") {
        	return "You lost";
        	}
    	else{
       		 return "You win!";
        	}
    }

    if (choice1 === "paper") {
    	if(choice2 === "rock") {
    		return "paper wins!";
    	}
    	else {
    		return "scissors wins!";
    	}

    }

    if (choice1 === "scissors") {
    	if(choice2 === "rock") {
    		return "rock wins!";
    	}
    	else {
    		return "scissors wins!";
    	}

    }
};

compare(userChoice,computerChoice);