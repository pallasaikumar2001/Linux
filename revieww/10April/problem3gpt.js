// 3. Write a function getMostFrequentSku(users) that returns the SKU (stock keeping unit)
// of the item that appears most frequently across all users’ purchases.

const users = require("./users-cdp.json");

function getMostFrequentSku(users) {
  const skuFrequency = {};

  users.forEach((user) => {
    user.activity?.purchases?.forEach((purchase) => {
      purchase.items.forEach((item) => {
        skuFrequency[item.sku] = (skuFrequency[item.sku] || 0) + item.qty;
      });
    });
  });

  console.log(skuFrequency);

  let mostFrequentSku = null;
  let maxCount = 0;

  for (const [sku, count] of Object.entries(skuFrequency)) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentSku = sku;
    }
  }

//   const [mostFrequentSku] = Object.entries(skuFrequency).reduce(
//   (maxEntry, currentEntry) => {
//     return currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry;
//   }
// );


  return mostFrequentSku;
}

let result = getMostFrequentSku(users);

console.log(result);
