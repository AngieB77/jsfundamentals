/*
a variable is a named container for storing data
we name variables  so that we can refer to them again
var, let , const

*/

let a  = 2;

let        b     =     1;
/* (1)    (2)    (3)   (4)
1. javascript keyword
2. variable name
3. assignment operator
4. value of variable
*/

console.log(a+b);

/* 

notes on variables:
   a variable name must begin with a letter, underscore, or dollar sign
   numbers may follow the above character, but cant come first
   javascript is case sensitive = 'hello' and 'Hello' are two separate variables
   no spaces allowed in variable names
   camelCase is the best practice for naming variables with multiple words
        helps with readability


    var, let, const:
        var: 'old' keyword for variables in js
        let: 'new' keyword for variables in js(ES6)
        const: unchangeable variable once declared 


    declaration vs initialization;
        declarations are the left side of the variable
             let x  
            declarations are on the left side of the assignment operator(=)
        initializations are the right side of the variable
            it sets the value of the variable
            the value we initialize our variables as is what is on the right side of the assinment operator
            (=)
            */

            let x;
            console.log('Declaration',x);// declaration undefined
            x= 10;
            console.log('initialization:', x) //initialization:  10

            x= 100;
            console.log('Reinitialization:', x);
            
            let y = 'hello';
            console.log(x,y);

            const today = 'Great';
            console.log(today);

        
       





