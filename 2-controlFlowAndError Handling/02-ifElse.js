let weather = 30;

if (weather<50) {
    console.log("Wear a jacket")
    
} else {
    console.log("No jacket required!")
}

let name = "Angie";

if (name == "Angie"){

    console.log("Hello, my name is " + name);
} else 
    console.log("Hello, what is your "+ <name here>+ "?")</name>/

    //Challengelet 
    nameCase = 'zAchARy';
let firstLetter = nameCase.charAt(0);

if (firstLetter == 'Z') {
    console.log(nameCase)
} else {
    console.log("Hey, this isn't written correctly.")
}
if (firstLetter == 'Z') {
    console.log(nameCase.charAt(0));
} else {
    let newString = nameCase.toLowerCase();
    console.log(newString.slice(-6));
}
*/
if (firstLetter == 'Z') {
    let newString = nameCase.toLowerCase();
    let newestString = newString.slice(-6);
    console.log(nameCase.charAt(0) + newestString);
}
else {
    let newString = nameCase.toLowerCase();
    let newestString = newString.slice(-6);
    console.log(firstLetter.toUpperCase() + newestString.toLowerCase());
}

let name = 'zAchARy';
if (name[0]== name[0].toUpperCase()){
    console.log(name);

} else {
    console.log('hey, this isn't written correctly');
    
}

//challenge
let age = 30;

if (age >=25) {
    console.log('You can rent a car!');

} else if (age >= 21){
    console.log ('you can drink!');
} else if (age >= 18)