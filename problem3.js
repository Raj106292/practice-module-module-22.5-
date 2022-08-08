// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

function paperRequirements(book1, book2, book3){
    const pageNeedForBook1 = 100;
    const pageNeedForBook2 = 200;
    const pageNeedForBook3 = 300;

    const pageNeedForBook1s = book1 * pageNeedForBook1;
    const pageNeedForBook2s = book2 * pageNeedForBook2;
    const pageNeedForBook3s = book3 * pageNeedForBook3;

    const totalPages = pageNeedForBook1s + pageNeedForBook2s + pageNeedForBook3s;

    return totalPages;
}

const book1 = 5;
const book2 = 10;
const book3 = 15;

const result = paperRequirements(book1, book2, book3);

console.log("Total page need for the books:",result);