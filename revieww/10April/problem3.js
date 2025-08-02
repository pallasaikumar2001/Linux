// 3. Write a function getMostFrequentSku(users) that returns the SKU (stock keeping unit)
// of the item that appears most frequently across all users’ purchases.

const users = require("./users-cdp.json");

function getMostFrequentSku(users) {
  const skuFrequency = users.reduce((acc, user) => {
    user.activity.purchases.forEach((purchase) => {
      purchase.items.forEach((item) => {
        acc[item.sku] = (acc[item.sku] || 0) + item.qty;
      });
    });
    return acc;
  }, {});

  const sortedSkus = Object.entries(skuFrequency).sort((a, b) => b[1] - a[1]);
  console.log(sortedSkus);
  return sortedSkus[0]; // Return the SKU with the highest count
}

let result = getMostFrequentSku(users);
console.log(result);
