const COURSES = {
    "C++": 39.99,
    "Java": 29.99,
    "Python": 29.99,
    "Rust": 19.99,
    "JavaScript": 19.99
};
const TAX_AMOUNT = 0.10;

let queryString = window.location.search;
let cartItems = queryString.substring(queryString.indexOf("courses=") + 8);
cartItems = cartItems.split(",");

let totalNoTax = 0;
cartItems.forEach(item => {
    totalNoTax += COURSES[item];
});

let totalTax = totalNoTax * TAX_AMOUNT;

console.log("Total before tax: $" + totalNoTax.toFixed(2));
console.log("Tax: $" + totalTax.toFixed(2));
console.log("Total: $" + (totalNoTax + totalTax).toFixed(2));
