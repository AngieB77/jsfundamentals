/*
great for counting key/value pairs in an object, properties in an object are what is called enumberable
for in loops will iterate over an objects enumberable properties
*/

let student = {
    name: "peter",
    awesome: true,
    degree: "Javascript",
    week: 1,
}
console.log(student.degree); //dot notation single item
//object bracket notation
for (let item in student) {
    //console.log(item);
    console.log(student[item])// bracket notation array
}

let dogArray =['greaet dane', 'husky', 'border collie', 'dalmation', 'pug'];
 for (let dog in dogArray){
     console.log(dog);
     console.log(dogArray[dog])
 }

 let name = 'angie'
 let capName;
  
 for (let i in name) {
    if(i==0)
{capName = name[i].toUpperCase();
} else {
    capName += name [i].toLowerCasae();
}

 }  
 console.log(capName);
     
 
