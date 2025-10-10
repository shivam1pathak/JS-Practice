// ======================== Number Methods (Number object ke methods) =================================

// 1. toString()
// Number ko string me convert karta hai.

{
  let num = 936820;
  console.log(num.toString()); // "936820" (string ban gaya)
}

// 2. toFixed(digits)
// Number ko decimal ke baad fixed digits me convert karta hai.

{
  let num = 5.6789;
  console.log(num.toFixed(2));  // "5.68" (string return karta hai)
}

// 3. toPrecision(digits)
// Number ko overall precision (total digits) ke hisaab se round karta hai.

{
    let num = 5.6789;
console.log(num.toPrecision(2)); // "5.6"

}

/*---------------------------- Main Difference ------------------------

toFixed() → sirf decimal ke baad ke digits fix karta hai.
toPrecision() → poore number me kitne digits hone chahiye fix karta hai.*/

// 4. valueOf()
// Number object ko primitive value deta hai.

{
    let num = new Number(100);
console.log(num.valueOf()); // 100

}

const productES6 = {
  price: 1000,
  discount: 200,
  valueOf() {
    return this.price - this.discount;
  }
};
console.log("Final Price",productES6.valueOf());

// 7. Number.parseInt(string)
// String ko integer number me convert karta hai.

console.log(Number.parseInt("100px")); // 100

// 8. Number.parseFloat(string)
// String ko floating-point number me convert karta hai.

console.log(Number.parseFloat("10.55kg")); // 10.55


// ===================================== Math Methods (Math object ke methods) ===================================
// Math ek global object hai jisme bahut saare mathematical functions available hote hain.

// 1. Math.round(x)
// Number ko nearest integer me round karta hai.

console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// 2. Math.ceil(x)
// Number ko upper integer me round karta hai.

console.log(Math.ceil(4.2)); // 5

// 3. Math.floor(x)
// Number ko lower integer me round karta hai.

console.log(Math.floor(4.9)); // 4

// 4. Math.trunc(x)
// Number ka decimal part hata deta hai (sirf integer part deta hai).

console.log(Math.trunc(4.9)); // 4

// 5. Math.pow(base, exponent)
// Power calculate karta hai.

console.log(Math.pow(2, 3)); // 8

// 6. Math.sqrt(x)
// Square root nikalta hai.

console.log(Math.sqrt(25)); // 5

// 7. Math.abs(x)
// Absolute value (negative ko positive me).

console.log(Math.abs(-10)); // 10

// 8. Math.min(a, b, c, …)
// Minimum number return karta hai.

console.log(Math.min(3, 7, -2, 9)); // -2

// 9. Math.max(a, b, c, …)
// Maximum number return karta hai.

console.log(Math.max(3, 7, -2, 9)); // 9

// 10. Math.random()
// 0 aur 1 ke beech random number generate karta hai.

console.log(Math.random()); // 0.123456...

// Agar aapko specific range me random number chahiye:

// 1 se 10 ke beech random integer
console.log(Math.floor(Math.random() * 10) + 1);

// Agar kisi specific number ke beech me random number chahiye to

const min =10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min );

// 11. Math.cbrt(x)
// Cube root nikalta hai.

console.log(Math.cbrt(27)); // 3

// 12. Math.log(x)
// Natural logarithm (base e) deta hai.

console.log(Math.log(5)); // 1.6094379124341003

// Number methods → Mainly conversion, checking aur parsing ke liye.
// Math methods → Mainly calculations, rounding, powers, roots, trigonometry aur random ke liye.



