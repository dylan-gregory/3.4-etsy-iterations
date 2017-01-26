/*
 * Question #1
 */

// Getting all of the price values out of each object within the items array
var justPrices = items.map(function(items){
  return items.price;
})

// Adding up each price, them dividing by the number of total items in the array
var averagePrice = justPrices.reduce(function(total, current){
    return (total + current);

})/items.length;

// Logging the price, terminated at the logical dollar amount
console.log("The average price is $" + averagePrice.toFixed(2));


/*
 * Question 2
 */

// Setting up and using a filter to find just the items that are in USD
function dollarFilter(items){
  return items.currency_code === "USD";
}

var americanItems = items.filter(dollarFilter);

// Setting up and using a filter to retrieve only the items between 14 & 18 USD
function amountFilter(value){
  return (value.price > 14.00) && (18.00 > value.price);
}

var midPriceItems = americanItems.filter(amountFilter);


console.log("Items that cost between $14.00 USD and $18.00 USD:", midPriceItems);


/*
 * Question 3
 */

// Opposite of last function, it only allows currency codes of NOT USD thru
 function britainFilter(items){
   return items.currency_code !== "USD";
 }

var britItem = items.filter(britainFilter);

// Grabbing the items title
var britItemTitle = britItem.map(function(items){
  return items.title;
})

// grabbing the items price
var britItemPrice = britItem.map(function(items){
  return items.price;
})


console.log(britItemTitle + " costs " + "£" + britItemPrice);


/*
 * Question 4
 */

// This filter only allows items whose materials include wood
 var justMats = items.filter(function(items){
   return items.materials.includes("wood");
 });

// This extracts the titles of the items whose materials include wood
 var woodenItems = justMats.map(function(items){
   return items.title;
 });

 console.log(woodenItems);


 /*
  * Question 5
  */

// This picks only the items whose materials arrays are longer than 8 items
  var eightMatsPlus = items.filter(function(items){
    return items.materials.length > 8;
  });


  var itemTitles = eightMatsPlus.map(function(items){
    return items.title;
  });

  var itemMats = eightMatsPlus.map(function(items){
    return items.materials;

  });


console.log(itemTitles[0] + " has " + itemMats[0].length + " materials:", itemMats[0]);
console.log(itemTitles[1] + " has " + itemMats[1].length + " materials:", itemMats[1]);



/*
 * Question 6
 */

// This only allows the items made by the seller to be added to the ownerMade array
 var ownerMade = items.filter(function(items){
   return items.who_made === "i_did";
 });

console.log(ownerMade.length + " were made by their sellers");

// "who_made": "i_did",
