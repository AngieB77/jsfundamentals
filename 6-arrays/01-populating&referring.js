/*
 arrays are containers that hold a list of items
 denoted by square brackets
 can hold multiple data types
 always separated by commas
 */

 let list = ['orange', 'banana', 'apple'];

 console.log(list[1]);

 /*
when calling an array, we can append square brackets onth end of our array with the index number we want to reference.  This is called square bracket notation

javascript counts starting at 0
 */

 let students = ['Matt', 'bob', 'Jeff','ab', 23, true, [ 'Kris', 'Taylor', 'Will'] ]
 //console.log(typeof students);
 //console.log(students instanceof Array); // instance of operator is used to check the type of a variable we're working on

 //console.log(students[2]);
 console.log(students[6][2]);
 let name = students[6][2];
 console.log('Hello ${name}');
