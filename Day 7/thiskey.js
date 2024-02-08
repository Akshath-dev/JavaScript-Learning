let x = this;

console.log(x)
console.log(typeof x)

"use strict";
let y = this;
console.log(y)

"use strict";
function myFunction() {
  return this;
}
let a = myFunction()
console.log(a)