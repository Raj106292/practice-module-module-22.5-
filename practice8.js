// তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

const numbers = [5, 9, 15, 87, 5, 67, 91, 157, 25, 547, 1];

// find out how many elements into the array
console.log(Array.isArray(numbers));
console.log("The length of the numbers array is:",numbers.length);

// change the 4th item of the array
numbers[3] = 999;
console.log(numbers);

// add two items into the ending of the array
numbers.push(77, 7);
console.log(numbers);

// remove one item from the begining of the array
numbers.shift()
console.log(numbers);