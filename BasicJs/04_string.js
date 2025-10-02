//********************************** JavaScript String & Its Methods ********************************

// 1. length
// length Batata hai string me total kitne characters hai.

{
  let str = "shivam";
  console.log(str.length); // output = 6
}

// 2. toUpperCase() / toLowerCase()
// Letters ko capital ya small me convert karta hai.

{
  let str = "Pathak";
  console.log(str.toUpperCase()); // output = PATHAK
  console.log(str.toLowerCase()); // output = pathak
}

// 3. charAt(index)
// Specific position ka ek letter ouput me return karta hai. (Index 0 se start hota hai).

{
  let str = "shivam";
  console.log(str.charAt(3)); // output = "v"
}

// 4. indexOf(value) / lastIndexOf(value)
// Word/letter ki position batata hai.

{
  let str = "Hello World";
  console.log(str.indexOf("o"));          // 4 (pehla 'o')
  console.log(str.lastIndexOf("o"));     // 7 (last 'o')
}

// 5. includes(value)
// Check karta hai word present hai ya nahi (true/false).

{
let str = "hello everyone,Shivam is here";
console.log(str.includes("Shivam")); // output = true
console.log(str.includes("shivam")); // output = false
}

// 6. startsWith(value) / endsWith(value)
// Start ya end check karta hai.

{
    let str = "Shivam Pathak";
console.log(str.startsWith("Shivam")); // output = true
console.log(str.endsWith("Pathak"));   // output = true

}

// 7. slice(start, end) / substring(start, end)
// String ka ek part nikalta hai.

{
    let str = "ShivamPathak";
console.log(str.slice(0,6));            //  output  = "Shivam"
console.log(str.substring(6,12));      // output = "Pathak"

}

// 8. replace(old, new) / replaceAll(old, new)
// String ka word change karta hai.

{
    let str = "I like Music. Music is Peace.";
console.log(str.replace("Music", "Dance"));    // "I like Dance. Music is Peace."
console.log(str.replaceAll("Music", "Dance"));  // "I like Dance. Dance is Peace."

}

// 9. trim() / trimStart() / trimEnd()
// Extra spaces hatata hai.

{
    let str = "   Hello   ";
console.log(str.trim());      // "Hello"
console.log(str.trimStart()); // "Hello   "
console.log(str.trimEnd());   // "   Hello"

}

// 10. split(separator)
// String ko array me tod deta hai.
{
    let str = "apple,banana,orange";
console.log(str.split(","));        // ["apple", "banana", "orange"]

}

// 11. concat()
// Strings ko jodta hai.

{
    let a = "Hello";
let b = "World";
console.log(a.concat("-", b));  // "Hello-World"

}

// 12. repeat(count)
// String ko bar-bar repeat karta hai.

{
    let str = "shivam ";
console.log(str.repeat(3));     // "shivam shivam shivam "

}


