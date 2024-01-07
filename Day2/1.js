// Let is used for block level and var is for global level

// let a = "95"

// console.log(typeof a)

// // converting string into integer
// a = Number.parseInt()

// console.log(typeof a)


// for in loop 

let obj = {
    49:"akshath",
    98:"gaana",
    75:"sham",
    80:"maruthi"
}
// for in loop
for (let i in obj){
    console.log("Marks of " + obj[i] +" is " + i)
}


// for of loop

for (let i of "Akshath"){

    console.log(i)
}


// functions in JS

function adding(a, b){
    return a+b;
}

const sum = (a, b)=>{
    return a+b;
}

let a = 1;
let b = 2;
let c = 2;
let p = adding(a,b);
let q = sum(b,c);

console.log('added number is ', p)
console.log('added number is ', q)


// I am soo lazy I want to keep green 💚 for 365


