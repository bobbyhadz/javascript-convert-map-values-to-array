// EXAMPLE 1 - Convert Map Keys and Values to an Array in JavaScript

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

// ✅ Convert Map values to an Array
const values = Array.from(map.values());

console.log(values); // 👉️ ['John', 30]
console.log(values.length); // 👉️ 2

// ✅ Convert Map keys to an Array
const keys = Array.from(map.keys()); // 👉️ ['name', 'age']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert Map Keys and Values to an Array using spread syntax

// const map = new Map();
// map.set('name', 'Tom');
// map.set('age', 39);

// // ✅ Convert Map values to an array
// const values = [...map.values()];

// console.log(values); // 👉️ ['Tom', 39]
// console.log(values.length); // 👉️ 2

// // ✅ Convert Map keys to an array
// const keys = [...map.keys()];
// console.log(keys); // 👉️ ['name', 'age']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert Map Keys and Values to an Array using `Map.forEach()`

// const map1 = new Map();
// map1.set('name', 'Tom');
// map1.set('age', 30);
// map1.set('country', 'Chile');

// const values = [];

// const keys = [];

// map1.forEach((value, key) => {
//   values.push(value);

//   keys.push(key);
// });

// console.log(values); // 👉️ [ 'Tom', 30, 'Chile' ]

// console.log(keys); // 👉️ [ 'name', 'age', 'country' ]
