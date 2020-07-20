// challenge : save in a var the info from the prompt and display on console.
const productCost = 5;
let productOne = prompt(`Enter the product name: `);
console.log(`Customer has chosen ${productOne}(s)`);
let quantity = prompt(`Quantity amount: `);
console.log(`Customer has chosen ${quantity} ${productOne}(s)`);
let subtotal = productCost * quantity;
alert(`Your total is $${subtotal} before tax.`);
console.log(`Customer total is $${subtotal} before tax.`);
const tax = .08;
let totalCost = subtotal * tax + subtotal;
alert(`Your total after tax is: $${totalCost}`);
console.log(`Customer total is $${totalCost}.`);
document.getElementById("receipt").innerHTML = "<h3>Thank you for your purchase!</h3>"
// I tried expanding this on script3.js but I am stumped at the moment.