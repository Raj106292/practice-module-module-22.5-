// তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

const numbers = [5, 9, 15, 87, 5, 67, 91, 157, 25, 547, 1];

for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];

    if(number > 80){
        console.log(number);
    }
}