// 2. Write a function getTopSpenders(users) that returns an array of top 5 users
//  who spent the most in total across all their purchases.

const users = require("./users-cdp.json");

function getTopSpenders(users) {
  const usersPurchaseAmount = users.reduce((acc, user) => {
    let totalPurchase = 0;
    user.activity.purchases.forEach((purchase) => {
      totalPurchase += purchase.amount;
    });
    acc.push({ userName: user.name, totalPurchase });
    return acc;
  }, []);

  const sortedUsersPurchaseAmount = usersPurchaseAmount.sort((a, b) => {
    return b.totalPurchase - a.totalPurchase;
  });
  return sortedUsersPurchaseAmount.slice(0, 5);
}

let result = getTopSpenders(users);

console.log(result);
