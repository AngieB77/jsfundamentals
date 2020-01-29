/*
forOf loops look at the iterable properties on an array
cant use forOf loops on objects because objects are enumberable, not iterable

*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (let item of student) {
console.log(item);

}

let dogArray =['great dane', 'husky', 'border collie', 'dalmation', 'pug'];
for (let dog of dogArray){
    console.log(dog, 'goes bark');
   
}
