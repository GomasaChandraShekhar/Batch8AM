import { test, chromium } from '@playwright/test';


test("Handling Shadow Element 1", async () => {

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext(
        {
            // proxy: {
            //     server: 'https://selectorshub.com',
            //     username: '',
            //     password: ''
            // }
            ignoreHTTPSErrors: true,
            // viewport: { width: 1600, height: 700 },
        }
    );

    await context.addCookies(
        [
            {
                name: 'session_id1',
                value: '12345',
                domain: 'example1.com',
                path: '/'
            },

            {
                name: 'session_id2',
                value: '12345',
                domain: 'example2.com',
                path: '/'
            }
        ]
    );

    const allCoockies = await context.cookies();
    console.log(allCoockies.length);

    console.table(allCoockies);

    for (const coockie of allCoockies) {
        console.log(coockie.name);
        console.log(coockie.domain);
        console.log(coockie.value);
        console.log(coockie.path);
    }

    await context.clearCookies();
    console.log("After deleting coockies ::::::::::::::");

    const allCoockiesafter = await context.cookies();
    console.log(allCoockiesafter.length);

    console.table(allCoockiesafter);

    for (const coockie of allCoockiesafter) {
        console.log(coockie.name);
        console.log(coockie.domain);
        console.log(coockie.value);
        console.log(coockie.path);
    }

    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);



    await page.close();


    /*

    cockies :: 


    */

});




