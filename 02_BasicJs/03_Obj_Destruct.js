/* -------------------------------------------------- Object Destructuring -----------------------------------------------
-> Definition:-
Object destructuring ka matlab hai object ke properties ko direct variables me extract karna,
bina baar-baar object ka naam likhe.

-> Behavior / Kaise kaam karta hai:-

Variable ke naam object ke key ke naam se match karte hain.
Multiple properties ek saath extract kar sakte hain.
Nested objects bhi destructure kar sakte hain.
Default value aur renaming possible hai.

-> Work / Use case:-

Code short aur readable banata hai.
API response ya object ke andar ke data ko easy access karne me helpful hai.*/

{
  const user = {
    name: "Shivam",
    age: 25,
    city: "Mumbai",
  };
  const { name, age, city } = user; // Object Destructuring, {name} variables directly user.name ko point karta hai.
  console.log("---------------------------------------------------------");
  console.log(name, age, city); // Shivam 25 Mumbai
}

/* ----------------------------------------------- Variable Renaming -------------------------------------------
Variable ka naam change kar sakte ho (name: userName)
Original object property same rehti hai.*/

{
  const user = {
    name: "Shivam",
    age: 25,
    city: "Mumbai",
  };
  const { name: userName, age: userAge } = user; // here changed variable name
  console.log("---------------------------------------------------------");
  console.log(userName, userAge); // Shivam 25
}

// ------------------------------------------------ Object Default Value --------------------------------------------
// Agar property exist nahi karti object me, to default value use hoti hai.

{
  const user = {
    name: "Shivam",
    age: 25,
    city: "Mumbai",
  };
  const { name, country = "India" } = user; // here added Default Value
  console.log("---------------------------------------------------------");
  console.log(name, country); // Shivam India
}

// --------------------------------------------- Nested Object Destructuring ---------------------------------------
// Nested properties ko direct access kar sakte hain without extra variables.
// Parent object ke structure ko preserve karte hue inner properties extract hoti hain.

{
  const person = {
    name: "Shivam",
    details: { city: "Mumbai", pin: 400001 },
  };
  const {
    details: { city, pin },
  } = person; // Nested Object Destructuring
  console.log("---------------------------------------------------------");
  console.log(city, pin); // Mumbai 400001
}

// ----------------------------------------- Function Parameter Destructuring ------------------------------------
// Function me object directly destructure karke parameters me access kar sakte hain.

{
  const person = {
    name: "Shivam",
    age: 25,
    details: { 
        city: "Mumbai", 
        pin: 400001 
    },
  };
  function greet({ name, age }) {
    console.log("---------------------------------------------------------");
    console.log(`hello ${name}, you are ${age} year old.`);
  }
  greet(person);
}


/* ------------------------------------ Shallow Copy vs Deep Copy --------------------------------------------

1 -> Shallow Copy

Definition:-
Shallow copy me top-level properties copy hoti hain, lekin nested objects reference share karte hain.

Behavior:-

Original object aur copy ke nested objects linked hote hain.
Top-level properties independent hote hain.

Work / Use case:-

Simple object copy karne ke liye.
Agar nested structure important nahi hai to enough hai.*/

{
    const user = {
  name: "Shivam",
  details: { city: "Mumbai", pin: 400001 }
};

// Object.assign() se shallow copy
const copy1 = Object.assign({}, user);

// Spread operator se shallow copy
const copy2 = { ...user };

// Nested property change
copy1.details.city = "Pune";
console.log("---------------------------------------------------------");
console.log(user.details.city); // "Pune" (original bhi change)
console.log(copy2.details.city); // "Pune"

}


/* 2 -> Deep Copy

Definition:-
Deep copy me saare levels ka copy banta hai, nested objects bhi alag hote hain.

Behavior:-

Original aur copy completely independent hote hain.
Nested object change se original object affect nahi hota.

Work / Use case:-

Complex objects ke liye.
Nested structure preserve karke safe copy chahiye to deep copy best hai.*/

{
    // Original object with nested data
const user = {
  name: "Shivam",
  details: {
    city: "Mumbai",
    pin: 400001
  },
  hobbies: ["coding", "music"],
};
const deepcopy = structuredClone(user); 
deepcopy.details.city = "Aliagrh";
deepcopy.hobbies.push("traveling");
console.log("---------------------------------------------------------");
console.log(user);          // Original copy not changed 
console.log(deepcopy);      // Deepcopy changed 
}

/* key points
 structuredClone(user) poore object ko recursively clone karta hai — including nested objects & arrays.

Bonus Tip:
(
structuredClone() modern browsers me supported hai.
Agar kabhi old browser support chahiye ho to:

 use this -> const deepCopy = JSON.parse(JSON.stringify(user));

use kar sakte ho (but date, function, undefined lose ho jaate hain  */


//  --------------------------------- Object destructuring with rest operator -------------------------------------
// Rest operator (...) object ya array me use hota hai bache hue elements ya properties ko collect karne ke liye.

const user = {
  name: "Shivam",
  age: 23,
  city: "Mumbai",
  country: "India"
};

// Destructure using rest
const { name, ...rest } = user;
console.log("---------------------------------------------------------");
console.log(name);          // "Shivam"
console.log(rest);          // { age: 23, city: "Mumbai", country: "India" }
