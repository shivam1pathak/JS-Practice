/* 1- var variable

Function-scoped (not block-scoped).
Can be re-declared and updated.
Variables are accessible only inside the function where they are declared.
Cannot access outside the function, but accessible anywhere inside the function, even inside nested blocks.
Hoisting: var variables are hoisted and initialized with undefined.
*/


function shivam() {  // function scope start here 
      var x = 10;
if (true) {

    console.log(x);

    { 
        console.log(x); // x accessible inside nested block
    }
}
 console.log(x);

} // function scope end here 

// console.log(x);   -> we can't access "x" here.bacuase this is outside the function.
shivam();  // calling the function to execute code

/*-------------------------------------------------------------------------------------*/

/* 2- let Variable

Introduced in ES6 (modern JS).
Block-scoped → only accessible inside the {} it’s declared in.
Can be updated, but cannot be re-declared in the same scope.
Hoisting: let is hoisted but not initialized, so using before declaration gives ReferenceError.
*/

function pathak(){
 if(true) {
  let a = 15;
//   console.log(a);
  return a;
 }
}
 console.log("let value here", pathak());
// pathak();

// Update the let variable value

let a =15;
a=5;            // Allowed the value updated
//let a=5;         Error: a already declared, con't be re-declared
console.log("updated value",a);

/*-------------------------------------------------------------------------------------*/

/* 3- Const variable
Introduced in ES6.
Block-scoped.
Cannot be updated or re-declared.
Must be initialized at the time of declaration.
Useful for constants or references that shouldn’t change.
*/

function constExample(){
    const b = 20;
    // const b = 300; //  Error: b already declared, con't be re-declared
    // b=15;          // Error: Assignment to constant variable, con't be updated 
    console.log("print b value", b);
}
constExample();


