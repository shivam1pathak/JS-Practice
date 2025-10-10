/* ======================================== Definition ===================================================

An array in JavaScript is a special type of variable that can hold multiple values at a time. 
Arrays are resizable,and they can store a mix of different data types, such as numbers, strings, objects, or even other arrays.

Syntax:
         let arrayName = [element1, element2, element3];


Example: 
        let fruits = ["Apple", "Banana", "Mango"];
        console.log(fruits); // ["Apple", "Banana", "Mango"]

Explanation:
            fruits is the array name.
            "Apple", "Banana", "Mango" are elements.
            Arrays can store strings, numbers, booleans, objects, or even other arrays.*/

// ======================================== Array Properties ===========================================

// a) length
// Returns the number of elements in an array.

{
  let fruits = ["Apple", "Banana", "Mango"];
  console.log(fruits.length); // 3
}

// ============================================ Array Methods ==============================================

// a) push()
// Adds one or more elements at the end of the array.
{
  let fruits = ["Banana", "Orange", "Mango"];
  console.log("---------------------------------------------------------");
  fruits.push("Pine-Apple"); // insert one element at a time
  fruits.push("Lichi", "Jack-Fuite"); // insert more element at a time
  console.log(fruits); // [ 'Banana', 'Orange', 'Mango', 'Pine-Apple', 'Lichi', 'Jack-Fuite' ]
}

// b) pop()
// Removes the last element from the array.
{
  let fruits = ["Banana", "Mango", "Pine-Apple", "Orange", "Graps"];
  console.log("---------------------------------------------------------");
  fruits.pop(); //  Graps removed....
  console.log(fruits); // [ 'Banana', 'Mango', 'Pine-Apple', 'Orange' ]
}

// c) unshift()
// Adds one or more elements at the beginning of the array.
{
  let fruits = ["Banana", "Mango", "Orange"];
  console.log("---------------------------------------------------------");
  fruits.unshift("Pine-Apple"); // add one element at the beginning of the array which is "Pine-Apple".
  console.log(fruits); //[ 'Pine-Apple', 'Banana', 'Mango', 'Orange' ]
}

// d) shift()
// Removes the first element of the array.
{
  let fruits = ["Banana", "Mango", "Orange"];
  console.log("---------------------------------------------------------");
  fruits.shift(); // Removes the first element of the array which is "Banana".
  console.log(fruits); //  [ 'Mango', 'Orange' ]
}

// e) indexOf()
// Returns the first index of the element. If not found, returns -1.
{
  let fruits = ["Banana", "Mango", "Orange", "Pine-Apple"];
  console.log("---------------------------------------------------------");
  console.log(fruits.indexOf("Graps")); // -1 "agar element array me avaible nahi hota to ye -1 return karta hai"
  console.log(fruits.indexOf("Orange")); // 2
}

// f) lastIndexOf()
// Returns the last occurrence[position] index of an element.
{
  const fruits = ["Banana", "Mango", "Orange", "Banana"];
  console.log("---------------------------------------------------------");
  console.log(fruits.lastIndexOf("Banana")); // 3
}

// g) includes()
// Checks if an element exists in the array. Returns true or false.
{
  console.log("---------------------------------------------------------");
  let fruits = ["Apple", "Banana", "Mango"];
  console.log(fruits.includes("Banana")); // true
  console.log(fruits.includes("Orange")); // false
}

// h) slice()
// Returns a new array from start to end (not including end index of the user).
// slice() sirf selected portion ka ek naya array return karta hai,
// slice() original Array ke elements ko Extract karke new array banata hai.and original array me koi change nahi hota.[in simple word]
{
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let newFruits = fruits.slice(1, 3);
  console.log("---------------------------------------------------------");
  console.log(newFruits); // ["Banana", "Mango"];
}

// i) splice()
// Adds/removes elements at any position.
// syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

// Remove elements
{
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  fruits.splice(1, 3);
  console.log("--------------------removed elements---------------------");
  console.log(fruits); // [ 'Apple' ]
}

// Add elements
{
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  fruits.splice(1, 0, "Pineapple", "Grapes");
  console.log("----------------------add elements-----------------------");
  console.log(fruits); // [ 'Apple', 'Pineapple', 'Grapes', 'Banana', 'Mango', 'Orange' ]
}

// j) join()
// Converts array to string with a separator.
{
  let fruits = ["Banana", "Mango", "Orango", "Pine-Apple"];
  let newStr = fruits.join("-");
  console.log("---------------------------------------------------------");
  console.log(newStr); //  Banana-Mango-Orango-Pine-Apple
}

// k) reverse()
// Reverses the array in place.
{
  let fruits = ["Apple", "Banana", "Mango"];
  fruits.reverse();
  console.log("---------------------------------------------------------");
  console.log(fruits); // [ 'Mango', 'Banana', 'Apple' ]
}

// l) sort()
// Sorts array elements alphabetically or numerically.
{
  let fruits = ["Banana", "Apple", "Mango"];
  fruits.sort();
  console.log("---------------------------------------------------------");
  console.log(fruits); // ["Apple", "Banana", "Mango"]

  let numbers = [4, 1, 3, 2];
  numbers.sort();
  console.log("---------------------------------------------------------");
  console.log(numbers); // [1, 2, 3, 4] (works numerically too)
}

// Numeric sort caution:
{
  let numbers = [10, 1, 5, 2, 20, 100];
  numbers.sort();
  console.log("---------------------------------------------------------");
  console.log(numbers); // [1, 10, 100, 2, 20, 5] ❌
  numbers.sort((a, b) => a - b); // correct numeric sort
  console.log("---------------------------------------------------------");
  console.log(numbers); // [1, 2, 5, 10, 20, 100]
}

// m) concat()
// Combines two or more arrays.
{
  let fruits = ["Apple", "Banana"];
  let vegetables = ["Carrot", "Potato"];
  let milk = ["Cow-milk", "full-cream"];
  let mixBoth = fruits.concat(vegetables, milk);
  console.log("---------------------------------------------------------");
  console.log(mixBoth); // [ 'Apple', 'Banana', 'Carrot', 'Potato', 'Cow-milk', 'full-cream' ]
}

// n) forEach()
// Executes a function for each element in array.

/*Important Rule:

 Order fix hai, names nahi. 

 Syntax : 
 array.forEach(function(element, index, array) {
   // code here
});

Position	                    Role	                            Example name
1st                     	Current element	                    item / fruit / value
2nd	                         Index number	                    index / i / position
3rd	                        Whole array	                           arr / array / list*/

{
  let fruits = ["Apple", "Banana", "Mango"];
  console.log("---------------------------------------------------------");
  fruits.forEach(function (item, index) {
    console.log(index, "-", item);
  });
}

{
  let fruits = ["Apple", "Banana", "Mango"];
  console.log("---------------------------------------------------------");
  fruits.forEach(function (item, index) {
    let fruitName = item; // current element ko store kiya
    let fruitIndex = index; // uska index store kiya
    console.log(`${fruitIndex} - ${fruitName}`);
  });
}

// o) map()
// Creates a new array by applying a function to each element.
{
  let numbers = [1, 2, 3];
  let square = numbers.map(function (num) {
    return num * num;
  });
  console.log("---------------------------------------------------------");
  console.log(square); // [ 1, 4, 9 ]
}

// p) filter()
// Creates a new array with elements that pass a condition.
{
  let numbers = [1, 2, 3, 4, 5];
  let evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log("---------------------------------------------------------");
  console.log(evenNumbers); // [ 2, 4 ]
}

// q) find()
// Returns the first element that satisfies a condition.
{
  let numbers = [1, 2, 3, 4, 5];
  let firstNumber = numbers.find((num) => num % 2 === 0);
  console.log("---------------------------------------------------------");
  console.log(firstNumber); //  2
}

// r) findIndex()
// Returns the index of the first element that satisfies a condition.
{
  let numbers = [1, 2, 3, 4, 5];
  let firstIndex = numbers.findIndex(function (num) {
    return num % 2 === 0;
  });
  console.log("---------------------------------------------------------");
  console.log(firstIndex); // 1
}

// s) reduce()
// Reduce() joins all array elements step by step and gives one final single value.
{
  let numbers = [1, 2, 3, 4, 5];
  let total = numbers.reduce((sum, num) => sum + num, 0);
  console.log("---------------------------------------------------------");
  console.log(total); // 15
}

// t) some() and every()
// some() → checks if at least one element passes condition.
// every() → checks if all elements pass condition.
{
  let numbers = [1, 2, 3, 4, 5];
  console.log("---------------------------------------------------------");
  console.log(numbers.some((num) => num > 3)); // true
  console.log(numbers.every((num) => num >= 1)); // true
  console.log(numbers.every((num) => num > 3)); // false
}

// u) flat()
// Flattens nested arrays into a single-level array.
{
  let arr = [1, [2, 3], [4, [5, 6]]];
  console.log("---------------------------------------------------------");
  console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]
  console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6]
}

// v) Array.from()
// Creates an array from array-like or iterable objects.
{
  let name = "Shivam";
  let chars = Array.from(name);
  console.log("---------------------------------------------------------");
  console.log(chars); // [ 'S', 'h', 'i', 'v', 'a', 'm' ]
}

// w) Array.isArray()
// Checks if a variable is an array.
{
  let fruits = ["Apple", "Banana"];
  console.log("---------------------------------------------------------");
  console.log(Array.isArray(fruits)); // true
  console.log(Array.isArray("Hello")); // false
}

// x) fill()
// It replaces all or selected elements of an array with the same fixed value.
// Original array modified hota hai, new array return nahi karta hai.
// fill() method ek fixed value se original array ko modify karta hai.

{
  let arr = [1, 2, 3, 4];
  arr.fill(0);
  console.log("---------------------------------------------------------");
  console.log(arr); // [0, 0, 0, 0]

  let arr2 = [1, 2, 3, 4];
  arr2.fill(5, 1, 3); // start=1, end=3 (not including 3)
  console.log(arr2); // [1, 5, 5, 4]
}

{
  let arr = [0, 0, 0];
  let values = [1, 2, 3];
  let result = arr.map((_, index) => values[index]);
  console.log("---------------------------------------------------------");
  console.log(result); // [1, 2, 3]
}

// y) copyWithin()
// original Array ke elements ko ek jagah se dusri jagah shift karna.Original array hi modify hota hai, new array nahi banta hai.

/*Step by step:

0 → destination index (kahaan paste karna hai)
3 → start index (kahaan se copy shuru karna hai)
5 → end index (kahaan tak copy karna hai, end not included)*/

{
  let arr = [1, 2, 3, 4, 5];
  arr.copyWithin(0, 3, 5); // copy elements at index 3-4 to index 0
  console.log("---------------------------------------------------------");
  console.log(arr); // [4, 5, 3, 4, 5]
}

// z) at()
// “at()” method array ya string ke element ko access karta hai — positive index se start se, aur negative index se end se.
{
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  console.log("---------------------------------------------------------");
  console.log(fruits.at(0)); // Apple (1st element)
  console.log(fruits.at(2)); // Mango (3rd element)
  console.log(fruits.at(-1)); // Orange (last element)
  console.log(fruits.at(-2)); // Mango (2nd last element)
}
