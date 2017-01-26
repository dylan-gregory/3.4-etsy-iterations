/*
 * Question #1
 */

var justPrices = items.map(function(items){
  return items.price;
})

var totalPrice = justPrices.reduce(function(total, current){
    return (total + current);

});

var averagePrice = (totalPrice/items.length).toFixed(2);

console.log("The average price is $" + averagePrice);


/*
 * Question 2
 */
