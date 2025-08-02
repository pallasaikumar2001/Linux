const data=require("./product.json")

const productTitles=data.products.map(item=>item.title)
console.log(productTitles)

const skus=data.products.map(item=>item.sku)
console.log(skus)

const titlePrice=data.products.map(item=>`${item.title}:${item.price}`)
console.log(titlePrice)