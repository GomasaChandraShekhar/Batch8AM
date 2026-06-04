import { test, expect } from '@playwright/test';


test.skip("Handling Simple Alerts", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();
    page.on('dialog', async dialog => {
        console.log('Dialog message is :: ', dialog.message());
        expect.soft(dialog.message()).toBe('I am a JS Alert');
        console.log('Dialog Type is :: ', dialog.type());
        expect.soft(dialog.type()).toBe('alert');
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

});

test.skip("Handling Confirmation Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();
    page.on('dialog', async dialog => {
        console.log('Dialog message is :: ', dialog.message());
        console.log('Dialog type is :: ', dialog.type());
        expect.soft(dialog.message()).toBe('I am a JS Confirm');
        expect.soft(dialog.type()).toBe('confirm');
        // await dialog.accept(); // to click OK
        await dialog.dismiss(); // to click cancel
    });
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.pause();
});

test("Handling Prompt Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();
    page.on('dialog', async dialog => {
        console.log('Dialog message is :: ', dialog.message());
        console.log('Dialog type is :: ', dialog.type());
        expect.soft(dialog.message()).toBe('I am a JS prompt');
        expect.soft(dialog.type()).toBe('prompt');

        // When Click Ok
        // await dialog.accept('Hello Playwright');

        // When Click Cancel
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    // expect.soft(await page.locator(`#result`).innerText()).toBe(`You entered: Hello Playwright`);
    // expect.soft(await page.locator(`#result`).textContent()).toBe(`You entered: null`);
    await page.pause();

});