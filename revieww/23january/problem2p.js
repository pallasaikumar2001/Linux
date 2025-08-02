const path = require("path");
const fs = require("fs");

function createFiles() {
  const files = Array.from({ length: 5 }, (_, index) => ({
    name: `random/${index + 1}`,
    content: `This is file ${index + 1} content`,
  }));

  console.log(files);

  files.forEach((file, index) => {
    const dirPath = path.join(__dirname, "random");
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) {
        console.error(`Error creating directory: ${err}`);
      } else {
        // const filePath = path.join(__dirname, "./random/random.txt");
        // const fileData = "This is first directory.";
        fs.writeFile(file.name, file.content, (err) => {
          if (err) {
            console.error(`Error creating file:${err}`);
          } else {
            console.log(`File created successfully`);
            const lowerCasedData = file.content.toLowerCase();
            fs.appendFile(file.name, `\n${lowerCasedData}`, (err) => {
              if (err) {
                console.error(` Error appending lowerCase Data`);
              } else {
                console.log(`lowercase data appended to the file.`);
              }
            });
          }
        });
      }
    });
  });
}

createFiles();
