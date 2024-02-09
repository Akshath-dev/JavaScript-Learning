// let arr = [2,30, 13, 20, 83, 10, 110]

// let arr2 = arr.filter((value)=>{
//     // return value % 10 ==0;
//     if(value%10==0){
//         return value;
//     }
// })

// console.log(arr2)

// let a = [1,2,3,4,5,6]
// let p = a.reduce((v1,v2)=>v1*v2)
// console.log(p)

// // 

let a = Math.floor(Math.random() * 100);
console.log(a)
// while(true)
let p = prompt("Guess the number")
while(true){
    if(p<a){
        console.log("Guess little higher")
        p = prompt("Guess the number")
    }else if(p>a){
        console.log("Guess Little lower")
        p = prompt("Guess the number")
    }else{
        alert("Yaay!!! you got it")
        break
    }
}