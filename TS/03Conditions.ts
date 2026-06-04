
function ifCond(x: number) {

    // even number or odd   // num % 2 = 0

    if (x % 2 == 0) {
        console.log(`Given number ${x} is even numer`);
    }
    else {
        console.log(`Given number ${x} is odd numer`);
    }

}

// ifCond(10);
// ifCond(11);

function elseIfCond(marks: number) {

    if (marks >= 35 && marks < 60) {
        console.log(`Passed with second class and marks are ${marks}`);

    } else if (marks >= 60 && marks <= 75) {
        console.log(`Passed with first class and marks are ${marks}`);

    } else if (marks >= 76 && marks <= 100) {
        console.log(`Passed with distiction and marks are ${marks}`);

    } else {
        console.log(`Failed with marks ${marks}`);

    }

}

// elseIfCond(35);
// elseIfCond(59);
// elseIfCond(60);
// elseIfCond(75);
// elseIfCond(95);
// elseIfCond(100);
// elseIfCond(34);

function switchCase(day: string) {

    switch (day) {

        case 'Sunday':
            console.log("Sunday");
            break;

        case 'Monday':
            console.log("Monday");
            break;

        case 'Tuesday':
            console.log("Tuesday");
            break;

        case 'Wednesday':
            console.log("Wednesday");
            break;

        case 'Thursday':
            console.log("Thursday");
            break;

        case 'Friday':
            console.log("Friday");
            break;

        case 'Saturday':
            console.log("Saturday");
            break;

        default:
            console.log("Invalid day");
    }
    console.log("Out of swicth statement");
}


switchCase('Friday');

