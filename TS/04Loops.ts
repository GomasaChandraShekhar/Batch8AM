
function forLoop() {

    // 1 - 10

    for (let i = 1; i <= 10; i++) {

        if (i == 5) {
            // break;
            continue;
        }
        console.log(i);
    }
    console.log('Out of for loop');

}

// forLoop();


function whileLoop() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
    console.log('Out of while loop');
}

// whileLoop();


function dowhileLoop() {
    let i = 1;
    do {
        console.log(i);
        i++;
    }
    while (i <= 10);
    console.log('Out of do while loop');
}

dowhileLoop();







