// ========================================== Object =============================================
// object is a collection of key–value pairs, where each key is a property name and each value can be any data type.

/*------------------------------------- 1️⃣ Object Creation ------------------------------------

Definition:

Object ek data structure hai jisme data ko key-value pairs ke form me store kiya jata hai.

🔸 Important Work:

Related data ko ek single unit me store karta hai.
Real-world entities (like person, car, student) ko represent karta hai.

🔸 Behavior:

Keys hamesha string ya symbol hoti hain.
Values kuch bhi ho sakti hain (string, number, function, array, object).*/

let person = {
  name: "Shivam",
  education: "MCA",
  city: "Aligarh",
};
console.log("---------------------------------------------------------");
console.log(person);

/* ----------------------------------- 2️⃣ Dot Notation -----------------------------------

🔸 Definition:
Object ke property ko access karne ke liye . (dot) use hota hai.Simple property ko access karna ya update karna ke liye.

🔸 Behavior:
Static property ke liye use hota hai (jisme space ya variable key na ho).*/

let user = {
  name: "pathak",
  age: 25,
  city: "Aligarh",
};
console.log("---------------------------------------------------------");
console.log(user.name); // "pathak" -> ek bar me ek hi value print karke dega
console.log(user.age); //DOT NOTATION and output is "25"
console.log(user.name, user.age, user.city); // pathak 25 Aligarh -> ye ek baar me sabhi value ko print karke dega.

/*-------------------------------------- 3️⃣ Bracket Notation --------------------------------------
🔸 Definition:
Object property ko access karne ka alternate tarika — object["key"].

🔸 Important Work:
Dynamic ya space wali keys ko access karne ke liye.

🔸 Behavior:
Key ko string ya variable ke form me likhna padta hai. */

let course = {
  "course Id": 101,
  courseName: "javascript",
  coursecode: "JS",
};
console.log("---------------------------------------------------------");
console.log(course["course Id"]); // BRACKET NOTATION
// console.log(course.course Id); Wrong -> ye value is tarah se access nahi hogi.

//  key variable
console.log("---------------------------------------------------------");
for (let keys in course) {
  console.log(
    `pehle key ka name print hoga "${keys}", fir uski value print hogi "${course[keys]}".`
  );
}

/* ------------------------------------------ Object CRUD operations ------------------------------------
CRUD = CREATE, READ, UPDATE, DELETE

1. CREATE (Add new property)

Definition:
Object me naya property add karna without replacing old data.
Agar property pehle se nahi hai to nayi property add ho jayegi.*/
{
  let car = {
    model: "Nexa",
    color: "white",
    wheels: 4,
  };
  car.company = "Maruti Suzuki"; // added new property in car object
  console.log("---------------------------------------------------------");
  console.log(car);
}

/* 2. READ (Access data)

Definition:
Object ke andar stored data ko read karna.Agar key exist karti hai to value return karta hai, warna undefined.*/

{
  let car = {
    company: "Maruti Suzuki",
    model: "Nexa",
    color: "white",
    wheels: 4,
  };
  console.log("---------------------------------------------------------");
  console.log(car.company); // Dot notation
  console.log(car["model"]); // Bracket notation
}

/* 3. UPDATE (Modify existing data)
Object ke andar already existing value ko change karna.yani Old value ko new value se replace karna.

Behavior:
Property agar milta hai to update ho jata hai; nahi mila to create ho jata hai.*/

{
  let user = {
    name: "Shivam",
    age: 20,
    city: "Pune",
    country: "India",
  };
  user.age = 25;
  console.log("---------------------------------------------------------");
  console.log(user.age); // age updated "25"
}

/* 4. DELETE (Remove property)
Definition:
Object se property permanently delete ho jata hai.
Property delete ho jata hai aur dobara access karne par undefined milta hai.*/

{
  let user = {
    name: "Shivam",
    age: 20,
    city: "Pune",
    country: "India",
  };
  delete user.city; // this property is deleted permanently
  console.log("---------------------------------------------------------");
  console.log(user.city); // undefined -> Because property permanently delete ho chuka hai
  console.log(user); // { name: 'Shivam', age: 20, country: 'India' } city is deleted
}

/*-------------------------------------------- 4️⃣ Object.keys() ------------------------------------------------
🔸 Definition:
Object ke sabhi keys ko array me return karta hai.

🔸 Important Work:
Object ke keys par loop lagane ke liye.*/
{
  const person = {
    name: "Shivam",
    age: 23,
  };
  console.log("---------------------------------------------------------");
  console.log(Object.keys(person)); // ["name", "age"]  return keys
}

/*----------------------------------------------- 5️⃣ Object.values() -----------------------------------------------

🔸 Definition:
Object ke sabhi values ko array ke form me return karta hai.

🔸 Important Work:
Values ke operations (sum, filter, etc.) me use hota hai.*/

{
  const person = {
    name: "Shivam",
    age: 23,
  };
  console.log("---------------------------------------------------------");
  console.log(Object.values(person)); // [ 'Shivam', 23 ] return values
}

/*----------------------------------------------- 6️⃣ Object.entries() ----------------------------------------------

🔸 Definition:
Object ke [key, value] pairs ko array ke form me return karta hai.

🔸 Important Work:
Key-value ke sath loop chalane ke liye.

🔸 Behavior:
Har element ek array hota hai [key, value].*/

{
  let user = {
    name: "Shivam",
    age: 20,
    city: "Pune",
    country: "India",
  };
  console.log("---------------------------------------------------------");
  console.log(Object.entries(user));

  console.log("---------------------------------------------------------");
  // array destructuring
  for (let [key, val] of Object.entries(user)) {
    console.log(key, val);
  }
}

/*-------------------------------------------- 7. Object.assign() Shallow Copy ------------------------------------------------
🔸 Definition:
source object ke properties target object me copy karta hai (merge karta hai).
agar empty object{} use karte hai to new copy bnata hai.older JS version me use hota hai.

🔸 Important Work:
Object merging ya shallow copy ke liye.

🔸 Behavior:
Source ke values target me copy hote hain.

important points:
source ke values target object me copy ho jati hai.agar empty object{} na ho to.
Source object unchanged rehta hai.
Agar dono objects ki key same hai to keys overwrite ho jati hai.*/

{
  let even = {
    0: 10,
    5: 20,
    6: 30,
  };

  let odd = {
    3: 1,
    1: 3,
    2: 5,
  };
  const merge = Object.assign({}, odd, even); // agar hum empty object {} ko target object bnate hain to dono object ko target object me merge kar deta hai...
  console.log("---------------------------------------------------------");
  console.log(merge); // { '0': 10, '1': 3, '2': 5, '3': 1, '5': 20, '6': 30 }
  console.log("---------------------------------------------------------");
  console.log(even); // { '0': 10, '5': 20, '6': 30 }
  console.log("---------------------------------------------------------");
  console.log(odd); // { '1': 3, '2': 5, '3': 1 }
}

/*------------------------------------------------------- 8. Spread Operator {...} ------------------------------------------------------
🔸 Definition:
Spread operator {}...} ka use object ka clone (copy) banane ya multiple objects merge karne ke liye hota hai.

🔸 Important Work:
Ye ek immutable copy banata hai — matlab original object directly modify nahi hota.
(Par ye copy shallow hoti hai, deep nahi.)

🔸 Behavior:
Top-level properties copy karta hai ✅
Nested objects ka reference copy karta hai ❌
(Isliye nested data change karne par original object bhi change hota hai)*/

{
  let even = {
    0: 10,
    5: 20,
    6: 30,
  };

  let odd = {
    3: 1,
    1: 3,
    2: 5,
  };
  const merge = { ...even, ...odd };
  console.log("---------------------------------------------------------");
  console.log(merge);
}


//  difference between Object.assign() and {...} operator
{
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };

  const merged2 = { ...obj1, ...obj2 };
  console.log("---------------------------------------------------------");
  console.log(obj1); // unchanged 
  console.log(merged2 === obj1); // false new object

  const merged1 = Object.assign(obj1, obj2);
  console.log(obj1); // mutated → { a: 1, b: 2 }

  console.log(merged1 === obj1); // true same reference
}

// Second difference 

/* ---------------------------------- Object.assign() Example (Shallow Copy) ------------------------------------
Object.assign({}, user) ek naya object banata hai.
Lekin details ka reference copy karta hai (deep copy nahi).
Isliye jab copy.details.city badla → original user.details.city bhi change ho gaya.*/

// Original object with nested data
{
const user = {
  name: "Shivam",
  details: {
    city: "Mumbai",
    pin: 400001
  }
};

// Shallow copy using Object.assign()
const copy = Object.assign({}, user);

// Changing nested property
copy.details.city = "Pune";
  console.log("---------------------------------------------------------");
console.log("Original user:", user);
console.log("Copied user:", copy);
}

/* ----------------------------------------- Spread Operator {...} Example (Shallow Copy) --------------------------------------------
{...user} bhi sirf top-level properties copy karta hai.
details ek object reference hai, isliye dono ek hi memory share karte hain.*/

{
    // Original object with nested data
const user = {
  name: "pathak",
  details: {
    city: "Mumbai",
    pin: 400001
  }
};

// Shallow copy using spread operator
const copy = { ...user };

// Changing nested property
copy.details.pin = 999999;
  console.log("---------------------------------------------------------");
console.log("Original user:", user);
console.log("Copied user:", copy);

}


// -------------------------------------------------------- 9. Object.freeze() ------------------------------------------------------
// Object ko poori tarah lock kar deta hai. Data ko accidentally change hone se bachata hai. Add, delete, modify — sab kuch block hota hai.

{
    const user = {
        name:"shivam",
        age: 25,
        city: "Aligarh"
    }
    Object.freeze(user);    // Object user locked
    user.age = 20;       // ❌ Not allowed
     console.log("---------------------------------------------------------");
    console.log(user);      // { name: 'shivam', age: 25, city: 'Aligarh' } NO change..
}


/* -------------------------------------------------- 10. Object.seal() ------------------------------------------------------
🔸 Definition:
Object me nayi properties add/delete nahi hoti, but existing modify ho sakti hain. Partially lock karne ke liye.*/

{
    const person = {
        name: "shivam",
        age: 25,
    }
    Object.seal(person);
    person.name = "pathak";      // name modify, it's allowed only
    delete person.age;          // Delete Not allowed
    person.city = "Aligarh";    // Add new property Not allowed 
     console.log("---------------------------------------------------------");
    console.log(person);
}


/* ---------------------------------------------------- 11. JSON.stringify() & JSON.parse() ----------------------------------------------
🔸 Definition:
Object ko string me convert karta hai (stringify) aur wapas object me convert karta hai (parse).
Data transfer (API / LocalStorage) ke liye.
Functions ko ignore karta hai.*/

{
     const person = {
        name: "shivam",
        age: 25,
    }
    const str = JSON.stringify(person);
    console.log("---------------------------------------------------------");
    console.log(str);           // {"name":"shivam","age":25}  Data in string's form 

    const obj = JSON.parse(str);
    console.log("---------------------------------------------------------");
    console.log(obj.name)            // shivam,  data in object's form
}


// -------------------------------------------------- 12. for...in Loop --------------------------------------------------
// Object ke keys par iterate karta hai.Properties access karne ke liye looping.

{
      const person = {
        name: "shivam",
        age: 25,
    }
    console.log("---------------------------------------------------------");
    for (let key in person){
    console.log(key, person[key]);
    }
}