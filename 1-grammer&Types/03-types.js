/*Booleans
    a boolean has two possible values of either true or false
    */

    let on = true;
    console.log(on);

    let off = false;
    console.log(off);

    /*

    Null 
        null is an empty value.  Think of it like an empty container: nothing is in it, but it still exists as a space to fill 
    */
   
    let empty = null;
    console.log(empty);

    /* Undefined
     no value has been assigned and it does not act as an empty container, whereas null does
     
    */

    let undef = undefined;
    console.log(undef);

    let correct;
    console.log(correct);

    /*  null is like a container with nothing in it
        undefined is when a variable has never been set, or hasn't been created yet
    */

    /*  
        numbers
            numbers are literally just numbers, Don't need anything special to write them
    */

    let degrees = 33;
    console.log(degrees);

    let precise =999999999999999;//15 nines  16 nines js rounds up
    console.log(precise);

    let rounded = 9999999999999999
    console.log(rounded);

    let decimal = 0.2 + 0.1;
    console.log(decimal);

    /*  Strings
            strings are datatypes used to represent text and are wrapped in either single or double quotes

    */

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';
console.log( first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

// if one datatype is a string and one is a number, the comppiler will assume you are trying to work with strings and convert the number to a string

/* 
    Objects
        store many values instead of singular value
        hold what are known as a value pairs

*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo);

/*
    Arrays
        container has multiple items
        list of items
        let list = [ 'item1', 'item2', 'item3'];
          (1)    (2)      (3)
        1. array name or variable
        2. square brackets denote array
        3. items separated by commas   can be anything,  numbers, items, etc.
*/

let burritos = ['large',4,true];
console.log(burritos);
console.log(typeof burritos);

/* Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = "Jo";
let lastName = "Doe";
let hn =10;
let street = "Downing";
let city = "Indy";
let state = "IN";
let zip =46200;
console.log(firstName, lastName+ ',', hn, street +',', city+ ',', state, zip);


/*

    String:properties
        properties are qualities associated with a specific datatype
        strings have properties, or qualities that are associated specifically with strings
        */

    let myName = "Angie";
    console.log(myName.length);// length will not start counting at zero

    /*
        String: Methods
            methods are tools that can help us manipualate certain data
            property & .method()
            no () for properties
    */

    let myNameIs = "Angie";
    console.log(myNameIs.toUpperCase());//to uppercase is a method that changes a string to all uppercase


    let home = 'my home is Greenwood';
    console.log(home.includes('Greenwood'));

    let sent = "this sentence will be split into individual parts";
    console.log(sent.split(""));
    console.log(sent.split(" "));
    












    

        



