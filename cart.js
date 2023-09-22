///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => {
    return acc + cur.price
},0)


console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax){
    return (cartTotal * tax) + cartTotal - couponValue;
}


console.log(calcFinalPrice(250, 25, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    New Customer 
    1. name, for this property I will be using a string. I chose this data type becuase it is the best way to provide a name. a resturant needs to know the customers name so they can addresss them or get them there order.
    2. address, I used a string once again because we are going need multipul pieaces of information and a string is the best way.
    3. Delivery, i used a boolean. because all we need to know is if the customer wants dilevery or dine in. True or false 
    4. order, array of strings multipul. We did this because we want to make sure we can give our customers the ability to be flexible with there ordering.



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE


const newCustomer = {
    name:'Tanner',
    address: '6640 sunset hills court ',
    delivery: true,
    order: ['pizza','salad','drink']
}