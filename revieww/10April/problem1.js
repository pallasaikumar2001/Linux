// 1. Write a function getMostActiveUser(users) that returns the
// user ID of the person with the highest number of logins

const users = require("./users-cdp.json");

function getMostActiveUser(users) {
  return users.reduce(
    (acc, user) => {
      if (user.activity.logins.length > acc.count) {
        acc = {
          count: user.activity.logins.length,
          userID: user.id,
        };
      }
      return acc;
    },
    { count: 0, userID: null }
  );
}

let result = getMostActiveUser(users);

console.log(result);
