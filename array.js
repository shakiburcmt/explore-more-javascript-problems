const number = 123;
const names = 'Shakib';
const onj = { brand: 'iphone', age: 22 };
function abc(num1, num2) {

}
const arr = [34, 4, 5, 3, 2];


console.log(typeof number);
console.log(typeof names);
console.log(typeof abc);
console.log(Array.isArray(arr));
console.log(arr.includes(21));
if (arr.indexOf(21) !== -1) {
    console.log('ache');
}
else {
    console.log('nai');
}

const new_array = [76, 8, 7, 100];
console.log(new_array.concat(arr));