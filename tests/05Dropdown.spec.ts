import { test, expect } from '@playwright/test';

test.skip("Handling Single Selection Dropdown", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    const countryDrp = page.getByRole('combobox', { name: 'Country:' });

    await countryDrp.selectOption('Canada');
    console.log(await countryDrp.inputValue());

    await countryDrp.selectOption({ label: 'Germany' });
    console.log(await countryDrp.inputValue());

    await countryDrp.selectOption({ value: 'india' });
    console.log(await countryDrp.inputValue());

    await countryDrp.selectOption({ index: 5 });
    console.log(await countryDrp.inputValue());

    const allInnerTexts = await countryDrp.innerText();
    console.log(allInnerTexts);

    expect(allInnerTexts).toContain('India'); // pass

    const allTextContents = await countryDrp.textContent();
    console.log(allTextContents);

    expect(allTextContents).toContain('India');

    const options = countryDrp.locator('option');
    console.log(await options.nth(9).innerText());

    expect(options).toHaveCount(10);


    await page.close();

});


test.skip("Handling Multi Selection Dropdown", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const colours = page.getByRole('listbox', { name: 'Colors:' });

    await colours.selectOption('Blue');

    await colours.selectOption(['White', 'Red', 'Yellow']);

    await page.close();

});


test.skip("Title 01", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    // await page.getByLabel('Country:').scrollIntoViewIfNeeded();

    // await page.getByRole('combobox', { name: 'Country:' }).selectOption('India');
    // await page.waitForLoadState('domcontentloaded');
    // console.log(await page.getByRole('combobox', { name: 'Country:' }).inputValue());

    // await page.getByLabel('Country:').selectOption('Canada');
    // await page.waitForLoadState('domcontentloaded');
    // console.log(await page.getByLabel('Country:').inputValue());


    const countryDropdown = page.getByRole('combobox', { name: 'Country:' });
    // await page.pause();

    await countryDropdown.scrollIntoViewIfNeeded();

    await countryDropdown.selectOption('India');

    console.log(await countryDropdown.inputValue()); // Returns selected value.

    await countryDropdown.selectOption('Germany');

    console.log(await countryDropdown.inputValue()); // Returns selected value.

    await countryDropdown.selectOption({ label: 'Canada' });
    await countryDropdown.selectOption({ index: 4 });
    await countryDropdown.selectOption({ value: 'brazil' });

    console.log(await countryDropdown.inputValue()); // Returns selected value.

    // to capture all values from dropdown
    // console.log(await countryDropdown.innerText()); // Returns all values from dropdown
    // console.log(await countryDropdown.allTextContents()); // Returns all text contents from dropdown

    const colorsDrp = page.getByRole('listbox', { name: 'Colors:' });

    await colorsDrp.selectOption('Red');
    console.log(await colorsDrp.inputValue()); // Returns selected value.

    await colorsDrp.selectOption(['Blue', 'Yellow', 'White']);
    console.log(await colorsDrp.inputValue());

    const ddOptions = page.locator('#colors').getByRole('option');
    await expect.soft(ddOptions).toHaveCount(7);
    console.log(`AllTextContents :: ${await ddOptions.allTextContents()}`);
    console.log(`All inner texts :: ${await ddOptions.allInnerTexts()}`);


});


test("Handling auto suggestions", async ({ page }) => {

    await page.goto(`https://www.google.com/`);
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const searchBox = page.locator(`//textarea[@name='q']`);
    await searchBox.fill('Playwright');

    const listOptions = page.locator(`//ul[@class="G43f7e"]//li`);
    const elemets = await listOptions.all();

    for (const element of elemets) {
        if (await element.innerText() == 'playwright automation') {
            await element.click();
        }
    }

    await page.close();
});




