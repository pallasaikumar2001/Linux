// let c = 0;
// function print() {
//   if (c < 10) {
//     console.log(c);
//     c++;
//     setTimeout(print, 1000 * c);
//   }
// }

// print();

// let c = 0;
// let res = setInterval(() => {
//   if (c < 10) {
//     console.log(c);
//     c++;
//   } else {
//     clearInterval(res);
//   }
// },1000);

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
