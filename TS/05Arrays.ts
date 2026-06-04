
// Creating an array using array literal

let student;

student = ['chandra', 35, 'India', 9100774577, true];

const arr2 = ['Shekhar', 37, 'USA', 9100774577, true];

const arr3: (string | number | boolean)[] = ['chandra', 35, 'India', 9100774577, true];
// console.log(arr3[3]);
// console.log(arr3[4]);

let arr4: (string | number | boolean)[];

// arr4 = ['Shekhar'];
// console.log(arr4[0]);

// arr4 = [9100774577];
// console.log(arr4[0]);

// arr4[0] = 'Shekhar';
// arr4[1] = 9100774577;
// console.log(arr4[0]);
// console.log(arr4[1]);

// arr4[2] = 'India';
// console.log(arr4[2]);

// console.log(arr3[0]);

// console.log(arr3.length);

// console.log(arr3[arr3.length - 1]);

// for (let ele of arr3) {
//     console.log(ele);
// }

// for (const element of arr2) {
//     console.log(element);
// }



// Array creation using new keyword

// Explicitly typed array of strings
let colors: string[] = new Array("Red", "Green", "Blue");
let num: number[] = new Array(1, 2, 3, 4, 5);

let empNames1: Array<string> = new Array("john", "smith", "peter", "scott"); // Array of strings


//  Array creation using generic way

let empNames: Array<string> = ["john", "smith", "peter", "scott"]; // Array of strings

let empIds: Array<number> = [101, 102, 103, 104]; // Array of numbers

let data: Array<string | number> = [300, "john", 103, "smith", 101, 102]; // Union type (string or number)

let data2: Array<any> = [1, "john", true, null]; // Array allowing multiple data types
// console.log(data2.length);

// for (let index in data2) {
//     console.log(data2[index]);

// }

data2[4] = 'Chandra';
data2[5] = 35;
data2[6] = 9100774577;

// console.log(data2.length);



// Tuple

const person: [string, number, number] = ['Shekhar', 35, 9100774577];
console.log(person.length);

const browsers: [string, string, string, string] = ['Chrome', 'Firefox', 'Safari', 'Edge'];

// for (let ele of person) {
//     console.log(ele);

// }

// for (let ind in browsers) {
//     console.log(browsers[ind]);

// }

for (let ind = 0; ind < browsers.length; ind++) {
    console.log(browsers[ind]);

}




