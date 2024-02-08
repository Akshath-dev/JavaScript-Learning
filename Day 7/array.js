const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let size = fruits.length;

console.log(size)

let fruit = fruits.at(2);

console.log(fruit)

let a = fruits.join(',')
console.log(a)

let b = fruits.shift();
console.log(b)

let c = fruits.unshift("Lemon")
console.log(c)

fruits.copyWithin(2,0)
console.log(fruits)

const arr = [[1,2],[3,42],[5,6]]
const newArr = arr.flat();
console.log(newArr)

const f = ["Banana", "Orange", "Apple", "Mango"];
f.splice(2, 0, "Lemon", "Kiwi");
console.log(f)

const f1 = ["Banana", "Orange", "Apple", "Mango"];
f1.splice(2, 2, "Lemon", "Kiwi");
console.log(f1)



// console.log(Math.trunc(4.9))
// console.log(Math.trunc(-4.2));
// console.log(Math.trunc(4.7));
// console.log(Math.trunc(4.4));
// console.log(Math.trunc(4.2));
// console.log(Math.floor(4.9))
// console.log(Math.floor(4.7))
// console.log(Math.floor(4.4))
// console.log(Math.floor(4.2))
// console.log(Math.floor(-4.2));

console.log(Math.abs(-4.7));
console.log(Math.sign(0));
console.log(Math.random());

const cars = ["BMW", "Volvo", "Mini"];

const letters = ["a","b","c"];

for (const x in letters) {
  // code block to be executed
  console.log(letters[x])
}