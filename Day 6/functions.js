function myFunction(p1, p2) {
    return p1 * p2;
  }

let x = myFunction(5, 2)
console.log(x)

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
  
// passing correct parameter
let value = toCelsius(77);

console.log(value)
let value1 = toCelsius();
// giving incorrect value
console.log(value1)
let value2 = toCelsius;
// returning not a number value i.e it means it a function
console.log(value2)