// Sum
const sum = a.reduce(function(total, elem, i, array){return total + elem;}, 0);

// Product
const multiply = a.reduce(function(product, elem, i, array){return product * elem;}, 1);

// Reverse a string
const reverse = (string) => string.split("").reverse().join("");

// Filter the longest words
const filterLongWords = (words, length) => words.filter(str => str.length > length);