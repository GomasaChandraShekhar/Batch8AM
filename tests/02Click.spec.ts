import { test, expect } from '@playwright/test';

test(`Handling Click`, async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const playwrightPracticeLink = page.getByText('PlaywrightPractice');
    const textField1 = page.locator('#field1');
    const autoTest = page.getByText('Automation Testing Practice');

    // Click
    // await playwrightPracticeLink.click();
    // await expect(page.locator('#username')).toBeVisible();

    // Right Click()
    // await playwrightPracticeLink.click({ button: 'right' });

    // double click :: 
    // await textField1.scrollIntoViewIfNeeded();  // to scroll to show the element
    // await autoTest.dblclick();

    // Click by position
    // await playwrightPracticeLink.click({ position: { x: 20, y: 5 } });
    // await expect(page.locator('#username')).toBeVisible();

    // force click
    // await playwrightPracticeLink.click({ force: true });
    // await expect(page.locator('#username')).toBeVisible();

    // Focus - highlights element
    // await playwrightPracticeLink.focus();

    // Mouse hover
    // await playwrightPracticeLink.hover();
    // await textField1.hover();



    await page.close();


});