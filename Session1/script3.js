// challenge : save in a var the info from the prompt and display on console.
const banana = 2;
const grapes = 4;
const orange = 5;
const tax = .08;
let quantity;
let productOne;
let productSubtotal;
let totalCost;

alert(`Welcome to my online store! I have a few options to choose from. 
Please let me know if you want a banana, grapes or an orange.`);

// A prompt for the user which is store in the var productOne

productOne = prompt(`Enter the product name: `);

/* 
    The code below uses the stored productOne var given by the user to determine which line of code is ran
    Each statement is related to one of three different selections for the customer to purchase 
*/

if (productOne.toUpperCase() === `BANANA`) {

    quantity = prompt(`Quantity amount: `);
    console.log(`Customer has chosen ${quantity} ${productOne}(s)`);
    productSubtotal = banana * quantity;
    alert(`Your total is $${productSubtotal} before tax.`);
    console.log(`Customer total is $${productSubtotal} before tax.`);
    totalCost = productSubtotal * tax + productSubtotal;
    alert(`Your total after tax is: $${totalCost}`);
    console.log(`Customer total is $${totalCost}.`);
    document.getElementById("receipt").innerHTML = "<h3>Thank you for your purchase!</h3>";

} else if (productOne.toUpperCase() === `ORANGE`) {

    quantity = prompt(`Quantity amount: `);
    console.log(`Customer has chosen ${quantity} ${productOne}(s)`);
    productSubtotal = orange * quantity;
    alert(`Your total is $${productSubtotal} before tax.`);
    console.log(`Customer total is $${productSubtotal} before tax.`);
    totalCost = productSubtotal * tax + productSubtotal;
    alert(`Your total after tax is: $${totalCost}`);
    console.log(`Customer total is $${totalCost}.`);
    document.getElementById("receipt").innerHTML = "<h3>Thank you for your purchase!</h3>";
    

} else  if (productOne.toUpperCase() === `GRAPES`) {

    quantity = prompt(`Quantity amount: `);
    console.log(`Customer has chosen ${quantity} ${productOne}(s)`);
    productSubtotal = grapes * quantity;
    alert(`Your total is $${productSubtotal} before tax.`);
    console.log(`Customer total is $${productSubtotal} before tax.`);
    totalCost = productSubtotal * tax + productSubtotal;
    alert(`Your total after tax is: $${totalCost}`);
    console.log(`Customer total is $${totalCost}.`);
    document.getElementById("receipt").innerHTML = "<h3>Thank you for your purchase!</h3>";

} else {
    alert(`Invalid product type! Please try again!`);
    document.getElementById("receipt").innerHTML = "<h3>Please refresh this page!</h3>";
}

// Trying to figure out how to make this loop back to the if statement if the else statement runs
