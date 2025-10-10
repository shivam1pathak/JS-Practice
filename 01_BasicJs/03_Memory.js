// *********************************JavaScript Memory Model: Stack vs Heap*******************************************

/*--------------------------- 1. Stack Memory -------------------------------

Small aur fast hoti hai.
Isme primitive data types store hote hain:
number, string, boolean, null, undefined, symbol, bigInt.
Execution context (functions, local variables) bhi stack pe store hote hain.
Yaha copy by value hota hai → matlab value ka direct copy banta hai.*/

let x = 10;
let y = x;

y = 20;

console.log (x);
console.log (y);

//  x aur y dono ki values alag-alag stack me copy hui hain.
//  Isliye y badalne se x par koi effect nahi pada.


/*------------------------------ 2. Heap Memory -----------------------------------

Large aur unordered memory hoti hai.
Isme non-primitive data types store hote hain:
objects, arrays, functions.
Stack me sirf reference (address/pointer) store hota hai jo heap ke actual data ko point karta hai.
Yaha copy by reference hota hai → matlab ek hi memory ka reference multiple variables ke paas hota hai.*/

let obj1 = {
    name:"shivam",
    age: 44
};

let obj2=obj1;
obj2.name = "pathak";
obj2.age = 33;

console.log(obj1.name);
console.log(obj2.name);
console.log(obj1.age);
console.log(obj2.age);


// Yahaan { name: "Shivam", age:44 } heap me store hua.
// Stack me obj1 aur obj2 ke paas same reference (address) hai.
// Isliye agar obj2 change kiya, to obj1 bhi change ho gaya.

