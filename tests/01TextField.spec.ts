import { test } from '@playwright/test';

test(`Handling Text Field`, async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    await page.getByPlaceholder('Enter Name').fill('Playwright');
    await page.getByPlaceholder('Enter EMail').fill('Playwright@abcd.com');
    await page.getByPlaceholder('Enter Phone').type('9100774577');

    const nameValue = await page.getByPlaceholder('Enter Name').inputValue();
    console.log('Entered Name Before clear :: ', nameValue);

    await page.getByPlaceholder('Enter Name').clear();
    console.log('Entered Name after clear :: ', await page.getByPlaceholder('Enter Name').inputValue());

    await page.getByPlaceholder('Enter Name').pressSequentially('Playwright', { delay: 100 });

    await page.close();

});



