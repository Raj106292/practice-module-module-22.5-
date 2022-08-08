//  তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

const numbers = [5, 9, 15, 87, 5, 67, 91, 157, 25, 547, 1];

for( let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    console.log('The',i,'th item is:',number);
}