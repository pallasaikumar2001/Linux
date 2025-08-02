const data=require('./product.json')

const highestrating=data.products.reduce((prev,curr)=>prev.rating>curr.rating ? prev:curr)
console.log(`highest rating product is: ${highestrating.title}, with rating ${highestrating.rating}`)

const lowestrating=data.products.reduce((prev,curr)=>prev.rating<curr.rating ? prev:curr)
console.log(`lowest rating product is: ${lowestrating.title}, with rating ${lowestrating.rating}`)

const ratings=data.products.reduce((sum,ele)=>sum+ele.rating,0)/data.products.length
const avg=ratings/(data.products.length)
console.log(avg.toFixed(10))

const greater4=data.products.filter(product=>product.rating>4)
console.log(greater4)