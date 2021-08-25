# rock-papers-scissor
A small game of choice

## Pseudocode on how to write the game

- Define array of rope paper and scissors using r s p inside the array.

- Set wins,looses and ties;

- Number of times to play defined **in a for loop**
 * In for loop prompt user to choose a character between r p and s
  
 * turn choice to lowercase
    - if user choose out of range alert with a message taht says **You must choose between r p and s only**
    - Else if you choose inside the defined range  alert **Great choice**.
 
- Logic to make PC choose amongst elements in the array
   ``bash var pcChoice = rps[Math.floor(Math.random() * rps.length)];
   **alert(`PC has choose ${pcChoice}`)**
   ``
- Compare now
     * ### Win/lose conditions:
       * When your choice is different from the pC's you win and increment win
       * If chooses are same is a tie and increment ties
       * If first logic do not match you lose so increase losses.
       - When the game is over, alert the totals to the user. We can use the \n character to make a line break.
    * alert Total wins, losses to the player.


