const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person['firstName'])

console.log(person.lastName)

// objects with methods

const person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + "This is balh blah " + this.lastName;
    }
};


let a = person1.fullName()
console.log(a)
let b = person1.fullName

//it will return the function definition:
console.log(b)

let text = "AELLO WORLD";
let char = text.charCodeAt(0);
console.log(char)

// search string

