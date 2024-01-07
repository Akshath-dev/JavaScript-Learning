// string methods

let name1 = 'harry\'s'

console.log(name1.length)


console.log(name1.toUpperCase())

console.log(name1.toLowerCase())
console.log(name1.toLocaleUpperCase())

console.log(name1.slice(2,4))
console.log(name1.slice(2))

let text = "this is Akshath and Akshath loves to play football"
console.log(text.replace("Akshath", "Aman"))
console.log(text.replaceAll("Akshath", "Aman"))

console.log(name1.concat(' is a friend of ', "Akshath"))


text2 = "   Akshath is bad boy    "
console.log(text2)

console.log(text2.trim())

let friend1 = "Shamanth"

for(let i = 0;i<friend1.length;i++){
    console.log(friend1[i])
}