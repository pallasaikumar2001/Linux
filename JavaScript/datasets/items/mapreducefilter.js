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

// 1. Total price of Electronics with stock > 30
const electronicscost=products
.filter(prod=>prod.category==='Electronics' && prod.stock>30)
.reduce((sum,prod)=>sum+prod.price,0);
console.log(electronicscost)

// 2. Clothing product names sorted
const sortedclothing=products
.filter(prod=>prod.category==='Clothing')
.map(prod=>prod.name)
.sort()
console.log(sortedclothing)

// 3. Average price of Appliances
const avgappliances=products.filter(prod=>prod.category='Appliances')
const average=avgappliances.reduce((sum,prod)=>sum+prod.price,0)/avgappliances.length
console.log(average)

// 4. Total stock value (price × stock)
const totalvalue=products.reduce((sum,prod)=>sum+(prod.price*prod.stock),0)
console.log(totalvalue);

// 5. Product names below ₹10,000 and in stock
const affordablestock=products
.filter(prod=>prod.price<10000)
.map(prod=>prod.name);
console.log(affordablestock)