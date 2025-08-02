// Write a function called "waitTimer()". This should print numbers from 1 to 10 each after a delay of k number of
//  seconds after printing last number, where k is the number it is printing.

// For eg:
// 1 // prints after delay of 1 sec
// 2 // prints after delay of 2 sec after printing 1
// 3 // prints after delay of 3 sec after printing 2
// ...
// ...
// and so on.

function waitTimer(k) {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

waitTimer(2); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, after 2 seconds each.
