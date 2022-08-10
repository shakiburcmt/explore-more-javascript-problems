// array slice
const arra = [34, 4, 5, 6, 7, 4, 3, 122];
console.log(arra.slice(2, 5));

// array splice
const array = [34, 4, 5, 6, 7, 4, 3, 122];
const partial = array.splice(2, 4, 99, 100);
// console.log(array.splice(2, 5, 123, 124, 125));
console.log(partial);
console.log(array);