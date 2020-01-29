
funciton hi(name) {
    //let name = 'Zach'
    console.log(`Hello, $(name)`);
}

hi('zach');

function zach(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}
zach(`sandwich`);

function counter(number) {
    for(let i =0; i<= 10; i++){
        console.log(i);
    }
}

counter();

function counter(number, string) {
    for (let i = 0; i <= number; i++){
        console.log (i);
    }console.log(string)
}

function myName(firstName, lastName){
    let fullName = firstName +' '+ lastName;

console.log(`Hello, my name is ${fullName}`)
}

myName('Angie', 'Bryson');
