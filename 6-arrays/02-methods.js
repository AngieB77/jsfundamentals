let food = ['Pecan Pie', 'shrimp', 'Quesadilla', 'Cheese Cake', 'hotdog'];
console.log('original array:,' food);

food.push('pizza'); //appends or pushes an item into the array.appends to the end
console.log('push:',food);
 
food.splice(1,1, "Bananas"); // position/ how many to delete; what to add to its place
console.log('splice',food);

food.splice(2, 0, 'Sweet Potato Pie'); //position / how many to delete(0) what to add in its place
console.log('splice 2':',food);

food.pop();  //removes last item in array

console.log('pop:', food);

food.shift(); //removes the first item in an array
console.log('shift:', food);

food.unshift('Popcorn', 'Steak'); //unshift adds 1 or more items to the beginning of the array
console.log('unshift:',food);

console.log('original Array', food);






