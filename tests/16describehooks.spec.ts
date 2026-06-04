import { test, expect, BrowserContext, Page } from '@playwright/test';

let context: BrowserContext;
let page: Page;

/*
test.describe("Group A", async () => {

    test("Test01", async () => {
        console.log("Test01");
    });

    test("Test03", async () => {
        console.log("Test03");
    });

});


test.describe("Group B", async () => {

    test("Test04", async () => {
        console.log("Test04");
    });

    test("Test02", async () => {
        console.log("Test02");
    });

});

*/

// Login, Logout -Group-A
// add prod cart, place order Group-B
// payment - credit card, upi, net banking - Group-C
// profile - Group-D

test.skip("Test01", async () => {
    console.log("Test01");

    await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();

});

test("Test03", async () => {
    console.log("Test03");
    await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
    await page.getByRole('button', { name: '   Cart' }).click();
    await page.getByRole('button', { name: 'Checkout❯' }).click();
    await page.getByRole('textbox', { name: 'Select Country' }).click();
    await page.getByRole('textbox', { name: 'Select Country' }).fill('india');
    await page.getByRole('button', { name: ' India' }).click();
    await page.getByText('Place Order').click();
    await expect(page.locator('#htmlData')).toContainText('| 69fab2f1f86ba51a65a523f2 |');
    await page.getByText('Orders History Page').click();
    await expect(page.locator('tbody')).toContainText('69fab2f1f86ba51a65a523f2');
    await page.getByRole('button', { name: 'View' }).first().click();
    await expect(page.locator('app-order-details')).toContainText('69fab2f1f86ba51a65a523f2');
});

test.skip("Test04", async () => {
    console.log("Test04");
    await page.getByText('Orders History Page').click();
    await expect(page.locator('tbody')).toContainText('69fab2f1f86ba51a65a523f2');
    await page.getByRole('button', { name: 'View' }).first().click();
});

test.skip("Test02", async () => {
    console.log("Test02");

    await expect(page.locator('app-order-details')).toContainText('69fab2f1f86ba51a65a523f2');
});

test.beforeAll("beforeAll", async ({ browser }) => {
    console.log('beforeAll');

    context = await browser.newContext();
    page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.waitForLoadState('domcontentloaded');

    await page.getByRole('textbox', { name: 'email@example.com' }).fill('gomasachandrashekhar@gmail.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Gomasa@1988');
    await page.getByRole('button', { name: 'Login' }).click();

});

test.afterAll("afterAll", async () => {
    console.log('afterAll');
    await page.getByRole('button', { name: 'Sign Out' }).click();
});
/*
test.beforeEach("beforeEach", async () => {
    console.log('beforeEach');
});

test.afterEach("afterEach", async () => {
    console.log('afterEach');
});*/



// beforeAll
// beforeEach - test01 -afterEach
// beforeEach - test03 -afterEach
// beforeEach - test04 -afterEach
// beforeEach - test02 -afterEach
// afterAll


