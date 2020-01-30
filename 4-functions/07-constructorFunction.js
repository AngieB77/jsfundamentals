let person1 ={
    name: ''
}
//   (1)   (2)        (3)
function Person(name, age, canVote){
//   (4)  (5)    (6)
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//              (7) (8)
let person4 = new Person('James', 80, true);
let person5 = new Person('Doug', 32, true);
console.log(person4);
console.log(person5);
/*
 1. function keyword
 2. function name should be capitalized in constructor functions
 3. parameters values of the keys in our object
 4. this is a keyword in javascript  refers back to whatever called it or whatever activates it in this case, this refers back to person
 5. the keys of the new object we're creating
 6. the argument we pass thru our function call will resolve as the values
 7 &8  the new keyword creates a new instance of our person function, with the values we pass into that function when invoking it.
 */
 

let count =0;
for (; count < 9; ++count) {
    console.log(count);
}