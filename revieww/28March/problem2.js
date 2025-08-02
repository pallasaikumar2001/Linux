// Write a function createCountdown that takes an initial number and returns a function.
// Each time the returned function is called, it should decrement the number by 1 and log it. 
//  When the count reaches zero, the function should log "Countdown complete!" and do nothing on further calls.

function createCountdown(initialNumber) {
  return function decrementAndLog() {
    if (initialNumber > 0) {
      console.log(initialNumber);
      initialNumber--;
    } else {
      console.log("Countdown complete!");
    }
  };
}

const countdown10 = createCountdown(10);
countdown10(); // Output: 10
countdown10(); // Output: 9
countdown10(); // Output: 8
countdown10(); // Output: 7
countdown10(); // Output: 6
countdown10(); // Output: 5
countdown10(); // Output: 4
countdown10(); // Output: 3
countdown10(); // Output: 2
countdown10(); // Output: 1
countdown10(); // Output: Countdown complete!








