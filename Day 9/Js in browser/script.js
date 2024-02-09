console.log("don't try to fool with me Niggesh")


// prompt confirm and write keyword


let a = prompt("give me a number", '69')
a = Number.parseInt(a)
alert("you have entered the type " + (typeof a) + "the number is " + a)

let b = confirm("Please confirm that the number is " + a)
if(b)
    document.write(a)
else{
    console.log("fuck off bitch")
}