// ========================================== Date Method ==========================================================

// JavaScript Date objects represent a single moment in time in a platform-independent format.
// Note: Month 0 se start hota hai. 0 = January, 1 = February … 9 = October.

// 1. getFullYear()
// Current year return karta hai.

let d = new Date();
console.log(d.getFullYear()); // 2025

// 2. getMonth()
// Current month (0-11) return karta hai.

{
  let d = new Date();
  console.log(d.getMonth()); // 9 => October
}

// 3. getDate()
// Month ka date return karta hai (1-31).

{
  let d = new Date();
  console.log(d.getDate()); //  aaj jo date hoga wo day print karega..
}

// 5. getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Time ke parts return karte hain.jo current time chal raha hoga use hi print karega...

{
  let d = new Date();
  console.log(d.getHours());
  console.log(d.getMinutes());
  console.log(d.getSeconds());
  console.log(d.getMilliseconds());
}

// 6. getTime()
// Date ko milliseconds me return karta hai since Jan 1, 1970.

{
  let d = new Date();
  console.log(d.getTime());
}

// 7. getTimezoneOffset()
// Local timezone aur UTC ke beech ka difference minutes me.

{
  let d = new Date();
  console.log(d.getTimezoneOffset()); // -330 => IST is UTC+5:30
}

// ============================== Setting Date & Time (Set Methods) =========================================

// 1. setFullYear(year) / setFullYear(year, month, day)
// Year set karne ke liye.

{
  let d = new Date();
  d.setFullYear(2030);
  console.log(d.getFullYear());
}

// Note: apni custom format me print bhi kar sakte ho:

{
  let d = new Date(2025, 5, 9);
  console.log(`Date: ${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`); // Date: 9-5-2025
}

// 4. setHours(hour) / setMinutes(min) / setSeconds(sec) / setMilliseconds(ms)
// Time set karte hain. aur apni custom format me print bhi kar sakte ho:

{
  let d = new Date();
  d.setHours(10);
  d.setMinutes(30);
  console.log(d.getHours(), d.getMinutes()); // 10 30
}


// ======================================= Conversion Methods ============================================

// 1. toDateString()
// Sirf date ko readable string me return karta hai.

{
    let d = new Date();
    console.log(d.toDateString()); // aaj ka date print hoga....
}

// 2. toTimeString()
// Sirf time ko string me return karta hai.

{
     let d = new Date();
    console.log(d.toTimeString()); // Ex: 10:30:00 GMT+0530 (India Standard Time)
}

// 3. toISOString()
// ISO standard format me date return karta hai.

{
    let d = new Date();
    console.log(d.toISOString()); // Ex: 2030-01-15T04:00:00.000Z
}

// 4. toLocaleDateString()
// Local format me date return karta hai.

{
    let d =new Date();
    console.log(d.toLocaleDateString("en-IN")); // Ex: 15/01/2030
}

// 5. toLocaleTimeString()
// Local time format me time return karta hai.

{
    let d=new Date();
    console.log(d.toLocaleTimeString("en-IN")); // Ex: 10:30:00 AM
}


// ========================= Basic Overview — toLocaleString() ===============================
/*toLocaleString() ek Date object ka method hai jo date + time ko human-readable format me return karta hai,
according to locale (region/language) aur custom options.*/

// Basic Syntax:

//  date.toLocaleString([locale], [options])

/*Parameters:

1- locale (optional):
Ye batata hai kis region/language ke format me date dikhani hai
Example: "en-IN", "en-US", "fr-FR", "hi-IN"

2- options (optional):
Isse hum output format customize karte hain
Jaise weekday, month, year, hour format, etc.*/

// ************************** Example with options *************************
{
let d = new Date();

let options = {
  weekday: "long",   // "long" => Monday, "short" => Mon
  year: "numeric",   // "2-digit" => 25, "numeric" => 2025
  month: "long",     // "long" => October, "short" => Oct, "numeric" => 10
  day: "2-digit",    // "2-digit" => 07, "numeric" => 7
  hour: "2-digit",   // time ke liye
  minute: "2-digit",
  second: "2-digit",
  hour12: true       // true => 12hr AM/PM, false => 24hr
};
console.log("Example with options");
console.log(d.toLocaleString("en-IN", options));
}


/*  Commonly Used options List
Option	                    Values                                      	Description
weekday	            "long", "short", "narrow"	                           Week day name (Monday / Mon / M)
year	            "numeric", "2-digit"	                               Year display format
month	       "numeric", "2-digit", "long", "short", "narrow"          	Month format
day	                "numeric", "2-digit"	                                Day of month
hour	            "numeric", "2-digit"	                                Hour format
minute	            "numeric", "2-digit"	                                Minute format
second	            "numeric", "2-digit"	                                Second format
hour12	                true, false	                                        12-hour (AM/PM) ya 24-hour
timeZoneName	        "short", "long"	                                    Time zone show karna (e.g., GMT+5:30, India Standard Time)
timeZone	            "UTC", "Asia/Kolkata"	                            Specific timezone set karna
era	                    "short", "long"	                                    (optional) AD/BC era show karne ke liye*/