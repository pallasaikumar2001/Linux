const data=require('./product.json')

const smallestProduct = data.products.reduce((a, b) => (a.dimensions.width * a.dimensions.height * a.dimensions.depth) < (b.dimensions.width * b.dimensions.height * b.dimensions.depth) ? a : b);
console.log(smallestProduct);