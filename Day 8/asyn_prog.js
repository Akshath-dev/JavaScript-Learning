// setTimeout(()=>console.log("hello motherfucker"), 3000);

// function myFunction() {
//     console.log("akshath")
// }

setTimeout(myFunction, 3000)


function myFunction() {
    let d = new Date();
    let x = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log(x)
  }