
function test01() {
    console.log("I am tes01 function");
}

function test02(name: string, age: number) {
    console.log(`My Name is :: ${name} and my age is :: ${age}`);
}


test01();

test02("Playwright", 5);

function test03(name: string, age?: number) {
    console.log(`My Name is :: ${name} and my age is :: ${age}`);
}

test03("Playwright");
test03("Playwright", 10);


function test04(name: string, age = 5) {
    console.log(`My Name is :: ${name} and my age is :: ${age}`);
}

test04("Playwright");
test04("Playwright", 20);

function getAge(age: number): number {
    return age;
}

let age: number = getAge(35);

console.log(age);

test04("Playwright", getAge(45));


function getName(name: string): string {
    return name;
}


test04(getName("Chandra"), getAge(45));

function getName1(name: string, age: number): boolean {
    console.log(`My Name is :: ${name} and my age is :: ${age}`);

    return true;
}

getName1("Playwright", 10);

// Anonymus function - no name

let msg = function () {
    console.log("Message");
}

msg();

let msg1 = function (name: string) {
    console.log("Hello ", name);
}

msg1("Chandra");


let msg2 = function (name: string): boolean {
    console.log("Hello ", name);
    return true;
}

let data: boolean = msg2("Chandra");
console.log(data); //  true

// Arrow function -- => - fat operator


let sts = () => console.log("Arrow function");

sts();

let sts2 = () => {
    console.log('Stmt 1');
    console.log('Stmt 2');
}

sts2();


let sts3 = (): string => {
    console.log('Stmt 1');
    console.log('Stmt 2');
    return "Shekhar";
}

let sn1 = sts3();
console.log(sn1);








