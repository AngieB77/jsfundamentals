/*
    the forEach()method executes a provided function once for each element in an array
    the   """"    "      does the same thing as a for loop or for of loop - both iterate over properties in an array

*/

let food = ['Pecan Pie', 'shrimp', 'Quesadilla', 'Cheese Cake', 'hotdog'];

for (let i=0; i < food.length; i++) {
    console.log(food[i]);


}
 
food.forEach(foodItem => console.log(foodItem));//looks at each item and prints it 

food.forEach(individualFoodItem => {
    console.log(individualFoodItem);
})

food.forEach(function(foodItem){
    console.log(foodItem);
})

food.forEach(function(index, foodItem){
    console.log(foodItem)
    console.log(index)
})

// can add index to console.log and will print food item with index--fat arrow or regular


let movie =['jaws', 'Red', 'Bonnie & Clyde'];

console.log(movie);

movie.forEach(movieItem => console.log(movieItem));

movie.push('StarWars');
console.log(movie);

movie.splice(3,1, 'Solo');

movie.forEach (movie => console.log(movie));
