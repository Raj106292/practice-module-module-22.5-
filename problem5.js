//  একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


function positiveNumberArray(numbers){
    let positiveNumbers =[];

    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        // console.log(number);

        if(number > 0){
            positiveNumbers.push(number)
        }
        else if(number < 0){
            return positiveNumbers;
        }
    }
}

const numbers = [ 15, 25, 35, 45, -5, 68, 97, -25, 48, 102, 91, 5];

const result = positiveNumberArray(numbers);
console.log(result);