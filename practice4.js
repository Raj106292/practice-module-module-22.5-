// তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

let a = 12;
let b = 12;
if(a === b){
    console.log(a,'is equal to',b);
}

a = 14;
b = 11;
if( a !== b){
    console.log(a,'is not equal to',b);
}

a = 15;
b = 10;
if( a > b){
    console.log(a,'is greater than',b);
}

a = 9;
b = 14;
if( a < b){
    console.log(a,'is less than',b);
}