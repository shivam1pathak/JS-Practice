/*--------------------------- Data Types ----------------------------------*/

/* 1-> Data types are the classification of values that determine what kind of operations can be performed on them.
   2-> JavaScript has two main categories of data types: Primitive and Non-Primitive (Reference) types.*/


  /* --------------------- 1. Primitive Data Types -------------------------

These are basic data types that are immutable (cannot be changed once created).

Data Type           	       Description	                                              Example

String	                    Sequence of characters	                                     "Hello", 'JavaScript'
Number	                    Numeric values (integers or floats)	                          10, 3.14, -5
BigInt	                    Numbers larger than Number.MAX_SAFE_INTEGER	                  9007199254740991n
Boolean	                    Represents true or false	                                  true, false
Undefined	                Variable declared but not assigned a value	                  let x; console.log(x); // undefined
Null	                    Represents “no value” or “empty”	                          let y = null;
Symbol	                    Unique and immutable identifier	                              let id = Symbol('id');


----------------------------- 2. Non-Primitive / Reference Data Types ----------------------------

These are objects that can store multiple values and are mutable.

Data Type                           	Description	                                                Example

Object	                           Collection of key-value pairs	                let obj = {name: "Shivam", age: 25};
Array	                           Ordered list of values	                        let arr = [1, 2, 3, 4];
Function	                       A block of reusable code	                        function greet() { console.log("Hi"); }
Date	                           Represents date and time	                        let today = new Date();
RegExp	                           Regular expressions	                            /ab+c/    

---------------------------------------- Key Points ----------------------------------

1- Primitive types are copied by value, while objects are copied by reference.
2- typeof operator can be used to check data types:*/


console.log(typeof 42);             // "number"
console.log(typeof "hello");       // "string"
console.log(typeof {});           // "object"
console.log(typeof null);        // "object" (this is a known JavaScript quirk)

// ------------------------------ JavaScript quirk -------------------------------------------

let arr = [1,,3];
console.log(arr.length);

console.log(arr[1]);

/*   Function declarations hoist hoti hain, kyunki pure function ka code memory me pehle se load ho jata hai.
Isliye aap function ko define karne se pehle bhi call kar sakte ho:*/

greet(); // "Hello"
function greet() { console.log("Hello"); }

//    lekin function expressions nahi: JS sirf variable ko hoist karta hai, function value ko nahi.

greet(); // Error
var greet = function() { console.log("Hi"); }


console.log(0 === -0);   // true
console.log(1 / 0);      // Infinity
console.log(1 / -0);     // -Infinity

console.log(0 == '0');  // true
console.log(0 === '0'); // false

console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 ya "[object Object]" depending on context

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(NaN === NaN); // false



