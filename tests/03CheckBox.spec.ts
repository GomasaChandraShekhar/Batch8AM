import { test, expect } from '@playwright/test';

test.skip("Handling Radio Button", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const maleRadio = page.locator('#male');
    const femaleRadio = page.locator('#female');

    await maleRadio.check();
    expect.soft(maleRadio).toBeChecked();

    await femaleRadio.check();
    expect.soft(femaleRadio).toBeChecked();

    expect.soft(maleRadio).not.toBeChecked();

    await page.close();

});

test("Handling Checkbox", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    await page.locator('#sunday').check();
    expect.soft(page.locator('#sunday')).toBeChecked();

    await page.locator('#monday').check();
    expect.soft(page.locator('#monday')).toBeChecked();

    await page.locator('#tuesday').check();
    expect.soft(page.locator('#tuesday')).toBeChecked();

    await page.locator('#wednesday').check();
    expect.soft(page.locator('#wednesday')).toBeChecked();

    expect.soft(page.locator('#saturday')).not.toBeChecked();

    await page.close();

});






