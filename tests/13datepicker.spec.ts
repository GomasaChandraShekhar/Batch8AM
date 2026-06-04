import { test, expect, chromium } from '@playwright/test';

test.skip("Handling date picker", async ({ page }) => {

    let date = '15';
    let month = 'June';
    let year = '2026';

    await page.goto("https://jqueryui.com/datepicker/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const frame = page.frameLocator('.demo-frame');
    const dateField = frame.locator('#datepicker');
    const prevButton = frame.locator(`//a[@class='ui-datepicker-prev ui-corner-all']`);
    const nextButton = frame.locator(`//a[@class='ui-datepicker-next ui-corner-all']`);
    const monthText = frame.locator(`//span[@class="ui-datepicker-month"]`);
    const yearText = frame.locator('//span[@class="ui-datepicker-year"]');
    const dateValue = frame.getByText(date);
    const dateValue2 = frame.locator(`//a[text()='${date}']`);

    // await dateField.fill('04/15/2026');
    await dateField.click();

    let flag = true;
    while (flag) {
        if (await monthText.innerText() != `${month}`) {
            await nextButton.click();
        }
        if (await monthText.innerText() == `${month}` && await yearText.innerText() == `${year}`) {
            await dateValue.click();
            flag = false;
        }
    }

    await page.close();


});

test("Handling date picker Other Month", async ({ page }) => {

    let date = '2';
    let month = 'August';
    let year = '2027';

    await page.goto("https://jqueryui.com/datepicker/#other-months");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const frame = page.frameLocator('.demo-frame');
    const dateField = frame.locator('#datepicker');
    const prevButton = frame.locator(`//a[@class='ui-datepicker-prev ui-corner-all']`);
    const nextButton = frame.locator(`//a[@class='ui-datepicker-next ui-corner-all']`);
    const monthText = frame.locator(`//span[@class="ui-datepicker-month"]`);
    const yearText = frame.locator('//span[@class="ui-datepicker-year"]');
    const dateValue = frame.locator(`//a[@class="ui-state-default" and text()='${date}']`);

    // await dateField.fill('04/15/2026');

    await dateField.click();

    let flag = true;
    while (flag) {
        if (await monthText.innerText() != `${month}`) {
            await nextButton.click();
        }

        if (await monthText.innerText() == `${month}` && await yearText.innerText() == `${year}`) {
            await dateValue.click();
            flag = false;
        }
    }

    await page.close();


});


