let fs = require("fs");
let path = require("path");
let numberOfIles = 1;
function data() {
  fs.mkdir("Random", (err) => {
    console.log("Created directory successfully");
    let filePath = "Random/File1.txt";
    randomdata = "IT IS GOOD DATA";
    newData = randomdata.toLowerCase();
    console.log(newData);
    fs.writeFile(filePath, randomdata, (err) => {
      if (err) {
        console.log("error is there");
      } else {
        fs.appendFile(filePath, randomdata, (err) => {
          console.log("Successfully append the data");
        });
      }
    });
  });
}
data();

// let count = 0;
// let data = setInterval(() => {
//   console.log(count);
//   count++;
//   if (count == 10) {
//     clearInterval(data);
//   }
// }, 1000);

// let count = 0;
// let data = setInterval(() => {
//   count++;
//   if (count == 10) {
//     clearInterval(data);
//   }
// });
