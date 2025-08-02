const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 60000, stock: 50 },
    { id: 2, name: 'Mobile', category: 'Electronics', price: 20000, stock: 150 },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 1500, stock: 200 },
    { id: 4, name: 'Washing Machine', category: 'Appliances', price: 30000, stock: 20 },
    { id: 5, name: 'Refrigerator', category: 'Appliances', price: 40000, stock: 30 },
    { id: 6, name: 'Jeans', category: 'Clothing', price: 2500, stock: 100 },
    { id: 7, name: 'TV', category: 'Electronics', price: 50000, stock: 40 },
    { id: 8, name: 'Shoes', category: 'Footwear', price: 3000, stock: 80 },
    { id: 9, name: 'Air Conditioner', category: 'Appliances', price: 45000, stock: 0 },
    { id: 10, name: 'Jacket', category: 'Clothing', price: 3500, stock: 60 },
];

// 1. Products with price > ₹30,000
const expensive=products.filter(prod=>prod.price>30000);
console.log(expensive)

// 2. Products in clothing category
const clothings=products.filter(prod=>prod.category==='Clothing');
console.log(clothings)

// 3. Products with stock < 50
const lowstock=products.filter(prod=>prod.stock<50);
console.log(lowstock);

// 4. Products with price between ₹20,000 and ₹50,000
const rangeproducts=products.filter(prod=>prod.price>=20000 && prod.price<=50000)
console.log(rangeproducts)

// 5. Products that are in stock
const instocks=products.filter(prod=>prod.stock>0);
console.log(instocks);

// 6. Products with names containing the letter "a"
const productswithA=products.filter(prod=>prod.name.toLowerCase().includes('a'));
console.log(productswithA)

// 7. Products with price below ₹5,000
const affordableproducts=products.filter(prod=>prod.price<5000);
console.log(affordableproducts)

// 8. Electronics and Appliances products
const ele=products.filter(prod=>['Electronics','Appliances'].includes(prod.category));
console.log(ele)

// 9. Products with stock as multiples of 10
const tens=products.filter(prod=>prod.stock%10===0);
console.log(tens)

// 10. Products with price ending in "000"
const priceendwith000=products.filter(prod=>prod.price%1000===0);
console.log(priceendwith000)
