//   (1     (2))
let hi =()=> {
    console.log('hello');
}

/*
    all fat arrow functions need to be set to a variable
    fat arrow signifies that this is a function
    arrow functions are the shorthand way of writing a function expression- not declaration
    fat arrow functions do not get hoisted since they are function expressions

    */

    //concise body fat arrow

    let hi =() => console.log ('hello');// return is implicit and happens by default
    hi();

    //block body

    let hi = () => {
        console.log('hello');
        // return keyword has to be present inside of a block body arrow function
    }
    hi();
     let apples = num => console.log('there are ${num}apples');
     apples(10)

     let counting = num => {
         for (let i = 0; i<= num; i++){
             console.log(i);
         }
     }
     counting(20);

     /*  no parameter need parenthesis
        single parameter may or may not have them up to you
        multiple parameter need parenthesis
        */

















