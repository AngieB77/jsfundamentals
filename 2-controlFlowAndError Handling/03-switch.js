/*
    switch statements execute a block of code depending on different cases
    switch statements often use the break or default keywords (or both together)
        both keywords are optional

        break keyword breaks out of the current condition & switch statment
        default keyword specifies code to run if there is no case match
*/

let officeCharacter ='Michael';

switch (officeCharacter) {
    case "Michael": 
    console.log('My mind is going a mile an hour');
    break;
    case "dwight":
        console.log('Perfecten');
        break;

    case "Jim":
        console.log('Bears, beets, etc.');
        break;
    default:
        console.log('Im sorry,but do i know you?');

}

//Challenge

let dessertMenu = cake;

switch (dessertMenu){
    case "pie":
        console.log('Pie, pie me oh my!');
        break;
    case " cake":
        console.log('Cake is great!');
        break;
    case "ice cream": 
        console.log ('I scream for ice cream!');
    default:
    console.log('Not on the menu!');
}
