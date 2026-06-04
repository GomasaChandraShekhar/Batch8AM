
// Object Literal

let emp = {
    name: "John",
    salary: 50000,
    job: "Engineer",

    getDetails: function () {
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
};

// Accessing objects properties

// obj.key -- Dot Notation
// boj['key'] -- Bracket Notation

// console.log(emp.name); // Dot notation
// console.log(emp["salary"]); // Bracket notation
// console.log(emp.getDetails());

// // Modifying:
// emp.job = "Manager";
// console.log(emp.getDetails());


// Object Literal with strict type

let emp1: {
    ename: string;
    esal: number;
    ejob: string;
    eph: number;
} = {
    ename: "Chandra",
    esal: 10000,
    ejob: "Engineer",
    eph: 9100774577,
}

// console.log(emp1.ename);
// console.log(emp1["ejob"]);



class Person {

    constructor(public name: string, public age: number, public city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getCity() {
        return this.city;
    }

    getDetails() {
        console.log(`${this.name} is aged ${this.age} from ${this.city} city`);
    }

}

let Person1 = new Person("Typescrit", 35, "Hyderabad");

// console.log(Person1.name);
// console.log(Person1["age"]);

// Person1.age = 40;
// console.log(Person1["age"]);

let age = Person1.getAge();

console.log(Person1.getName());

Person1.setName("Arjun");

console.log(Person1.getName());


let Person2 = new Person("Chandra", 30, "Warangal");

console.log(Person2.getName());
console.log(Person2.getAge());
console.log(Person2.getCity());

let Person3 = new Person("Shekhar", 40, "Vizag");

// console.log(Person3.getName());
// console.log(Person3.getAge());
// console.log(Person3.getCity());

Person3.getDetails();