// তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

let a = 7;
console.log("ODD numbers between 7 to 19:");
while( a <= 19){
    if( a%2 !== 0){
        console.log(a);
    }
    a++ ;
}