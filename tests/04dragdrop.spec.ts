import { test, expect } from '@playwright/test';


test.skip("Drag And Drop Test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    const sourceEle = page.locator('div#draggable');
    const targetEle = page.locator('div#droppable');

    await page.pause();

    await sourceEle.dragTo(targetEle);

    // mouse
    // await sourceEle.hover();
    // await page.mouse.down(); // click and hold the mouse left button
    // await targetEle.hover();
    // await page.mouse.up(); // Releases the mouse left button

    await page.close();
});

test("Scroll Test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    const sourceEle = page.locator('div#draggable');

    // await sourceEle.scrollIntoViewIfNeeded();

    // await sourceEle.hover();
    // await sourceEle.click();

    // await page.mouse.wheel(0, 2000);


});



