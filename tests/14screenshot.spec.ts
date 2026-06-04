import { test, expect } from '@playwright/test';

test("Handling date picker111", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const titleHeading = page.locator(`//h1[@class="title"]`);

    await titleHeading.screenshot({ path: './images/titleImage.png' });
    await page.screenshot({ path: './images/currentViewImage.png' });
    await page.screenshot({ path: './images/fullpageImage.png', fullPage: true });

    expect.soft(await titleHeading.screenshot({ path: 'titleImage.png' })).toMatchSnapshot('./images/titleImage.png');
    expect.soft(await page.screenshot({ path: 'currentViewImage.png' })).toMatchSnapshot('./images/currentViewImage.png');
    expect.soft(await page.screenshot({ path: 'fullpageImage.png', fullPage: true })).toMatchSnapshot('./images/fullpageImage.png');

    await page.close();
});