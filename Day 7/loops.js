// let text = ""
// for (let i = 0; i < 5; i++) {
//     text += "The number is " + i + "\n";
// }
// console.log(text)

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x of person) {
  text += x + "\n";
}
console.log(text)