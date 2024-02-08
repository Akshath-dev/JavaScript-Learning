function myDisplayer(text){
    return text;
}
// TODO *** When you pass a function as an argument, remember not to use parenthesis. *** 
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    return myCallback(sum);
}
  
let res = myCalculator(5, 5, myDisplayer);
console.log(res)



const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
console.log(posNumbers)

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}