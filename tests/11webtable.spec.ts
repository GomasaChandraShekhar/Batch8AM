import { test, expect } from '@playwright/test';

test("Handling web table 001", async ({ page }) => {

    //await page.goto(`https://money.rediff.com/gainers/bsc/dailygroupa?`);
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const table = page.locator('#taskTable');
    await table.scrollIntoViewIfNeeded();

    // const tableheader = table.locator('//thead//tr//th');
    // const headrsCount = await tableheader.count();
    // console.log('Headers count :: ', headrsCount); // 5

    // for (let i = 0; i < headrsCount; i++) {
    //     console.log(await tableheader.nth(i).innerText());
    // }

    const rows = table.locator('//tbody//tr');
    const rowsCount = await rows.count();
    console.log('Rows count :: ', rowsCount);

    for (let row = 0; row < rowsCount; row++) {
        const colms = rows.nth(row).locator('//td');
        const colmsCount = await colms.count();
        console.log('Columns count in row ' + (row + 1) + ' :: ', colmsCount);
        for (let col = 0; col < colmsCount; col++) {
            console.log(await colms.nth(col).innerText());
        }
    }

    const linkEle = page.locator('//ul[@id="pagination"]//li//a');
    const linksCount = await linkEle.count();
    for (let i = 1; i <= linksCount; i++) {
        page.locator(`//ul[@id="pagination"]//li//a[text()=${i}]`).click();
    }


    await page.close();



});