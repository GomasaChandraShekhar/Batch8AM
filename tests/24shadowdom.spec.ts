import { test } from '@playwright/test';

test("Handling Shadow Element", async ({ page }) => {

    // await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.waitForTimeout(3000);

    // await page.pause();
    /*
    
        const inputField = page.locator('#shadow_host').locator("input[type='text']");
        // const inputField = page.locator("//div[@id='shadow_host']//input[@type='text']");
        // id="shadow_host"
        await inputField.scrollIntoViewIfNeeded();
        await inputField.fill("Playwright");
    */

    // iframe inside shadow root


    //   https://selectorshub.com/xpath-practice-page/
    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/");
    await page.waitForTimeout(3000);

    await page.pause();

    const shadowRoot = page.locator('#userName');

    const frame = shadowRoot.frameLocator('#pact1');

    const currentCrush = frame.getByRole('textbox', { name: 'Current Crush Name' });

    await currentCrush.scrollIntoViewIfNeeded();

    await currentCrush.fill("Playwright");

    const frame2 = frame.frameLocator('#pact3');

    const destiny = frame2.getByRole('textbox', { name: 'Destiny' });
    await destiny.fill("Playwright");

    await page.close();

});