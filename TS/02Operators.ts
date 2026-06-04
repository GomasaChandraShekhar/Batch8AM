
function assignOpr() {

    let a: number = 100; // = -- Assignment Operator
    let b: number = 200;

    console.log(a); // 100
    // a += 10; // a = a + 10;
    // a -= 20;
    // a *= 2; // a = a * 2;
    // a /= 2; // a = a /2 = 50 --- / division - quotient
    // a %= 2; // a = a % 2 = 0 -- % Modulous - reminder

    console.log(a); // 0

}

// assignOpr();

function ArithOpr() {
    let a: number = 100; // = -- Assignment Operator
    let b: number = 200;

    console.log(`Sum of ${a} and ${b} is :: `, a + b); // 300
    console.log(`Difference of ${a} and ${b} is :: `, b - a); // 100
    console.log(`Product of ${a} and ${b} is :: `, a * b); // 20000
    console.log(`Division of ${a} and ${b} is :: `, b / a); // 2
    console.log(`Modulous of ${a} and ${b} is :: `, b % a); // 0

}

// ArithOpr();

function incredecreopr() {

    let a: number = 100;

    // console.log(a++); // 100
    // console.log(a); // 101

    // console.log(a); // 100
    // console.log(++a); // 101

    // console.log(a--); // 100
    // console.log(a); // 99

    console.log(a); // 100
    console.log(--a); // 99

}

// incredecreopr();


function loANDOpr() {

    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && true); // false
    console.log(false && false); // false

}

// loANDOpr();

function loOROpr() {
    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false
}

// loOROpr();

function loNOTOpr() {
    console.log(!false); // true
    console.log(!true); // false

}

// loNOTOpr();



function compOpr() {
    let a: number = 10;
    let b: number = 20;
    let c: string = '10';

    // console.log(a == b); // false
    // console.log(a == 100); // true

    // console.log(a != b); // true
    // console.log(a != 100); // false

    // console.log(a < b); // true
    // console.log(b < a); // false

    // console.log(b <= b); // true
    // console.log(b <= a); // false
    // console.log(a <= b); // true

    // console.log(a > b); // false
    // console.log(b > a); // true

    // console.log(b >= b); // true
    // console.log(b >= a); // true
    // console.log(a >= b); // false

    // console.log(a === b); // false
    // console.log(a === a); // true
    // console.log(a === c); // false

    // console.log(a !== b); // true
    // console.log(a !== a); // flase
    // console.log(a !== c); // true

}

// compOpr();

function ternaryOpr(age: number) {
    // age >= 18 - Major;
    // age < 18 - Minor;
    // ?

    let message = age >= 18 ? 'Major' : 'Minor';
    console.log(message);

}

// ternaryOpr(17);
// ternaryOpr(18);
// ternaryOpr(19);
// ternaryOpr(10);





