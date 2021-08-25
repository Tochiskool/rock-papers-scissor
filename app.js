//Define array of rope paper and scissors
var rps = ["r", "p", "s"];

//Set wins,looses and ties;
var wins = 0, losses = 0, ties = 0;

// Number of times to play defined
for (var i = 0; i < 10; i++){
    
    //promt user to choose a character between r p and s
    var myChoice = prompt('Choose between r p and s');
    //turn choice to lowercase
    myChoice = myChoice.toLocaleLowerCase();
    if (rps.indexOf(myChoice) === -1) {
        alert(`You must choose between r p and s only or you might Loose`)
    } else {
        alert(`Great choice`)
    }
    //PC should make a choice
    var pcChoice = rps[Math.floor(Math.random() * rps.length)];
    alert(`PC has chosen ${pcChoice}`)

    // Compare now
     // Win/lose conditions:
     if ((myChoice === "r" && pcChoice === "s") ||
     (myChoice === "s" && pcChoice === "p") || 
     (myChoice === "p" && pcChoice === "r")) {
     wins++;
     alert("You've won " + wins + " time(s)!");
   } else if (myChoice === pcChoice) {
     ties++;
     alert("You've tied " + ties + " time(s).");
   } else {
     losses++;
     alert("You've lost " + losses + " time(s).");
   }
}
// When the game is over, alert the totals to the user. We can use the \n character to make a line break.
alert(`Total wins: ${wins}. \nTotal ties: ${ties} \nTotal losses: ${losses}`)