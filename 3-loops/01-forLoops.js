/*
for loops take in 3 parameters:
1. initial expression
2. condition
3. increment expression
*/
//       1        2       3
for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let i =0; i<21; i+=2) {
    console.log(i);
}

for (let i= 10; i>= 0; i-= 1){
    console.log(i);
}

for (let i = 0; i >= -24;i-= 2){
    console.log(i);
}
let string = 'Chloe';
for (let i = 0;  i< string.length; i++){
    console.log(string[i]);
}

let sum = 0;

for (i =  1; i<= 50; i++ ){
    sum = i+sum ;
    
}
console.log(sum);



