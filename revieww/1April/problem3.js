// 3. Return an object where each user's full name is the key, and GitHub
//  URL is the value. If a user doesn’t have GitHub, skip them.

// {
//     "Alice Johnson": "https://github.com/alicejohnson",
//     "Bob Smith": "https://github.com/bobsmith",
//     ...
// }

const data = require("./users-dataset.json");

function getNameAndGithubURL() {
  return data.reduce((acc, user) => {
    let fullNmae = user.name.first + " " + user.name.last;
    let githubURL = "";
    user.socialAccounts.forEach((account) => {
      //  console.log(account);
      if (account.platform === "GitHub") {
        githubURL = account.url;
      }
    });
    if (githubURL) {
      acc[fullNmae] = githubURL;
    }
    return acc;
  }, {});
}

let result = getNameAndGithubURL();
console.log(result, Object.keys(result).length);
