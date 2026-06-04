import { test, expect } from '@playwright/test';


test.skip("Handling Tab Test", async ({ page, context }) => {

    await page.goto(`https://demo.automationtesting.in/Windows.html`);
    await page.waitForLoadState('domcontentloaded');
    await page.pause();
    await page.getByRole('link', { name: 'Open New Tabbed Windows ' }).click();

    const [childPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'click' }).click()
        ]
    );

    childPage.bringToFront(); // Activate the child page
    console.log(await childPage.title());
    const documentationLink = childPage.locator(`//span[text()='Documentation']`);
    await expect.soft(documentationLink).toBeVisible();
    await childPage.getByRole('link', { name: 'Documentation' }).click();

    await expect.soft(childPage.getByText(`The Selenium Browser Automation Project`)).toBeVisible();
    await childPage.close();

    await page.bringToFront();
    console.log(await page.title());
    await expect.soft(page.getByRole('link', { name: 'Open New Tabbed Windows ' })).toBeVisible();

    await page.close();
});


test.skip("Handling Window Test", async ({ page, context }) => {

    await page.goto(`https://demo.automationtesting.in/Windows.html`);
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const parentTabTitle = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle);

    await expect.soft(page).toHaveTitle('Frames & windows');

    // await page.locator(`//a[text()='Open New Seperate Windows']`).click();
    await page.getByText('Open New Seperate Windows').click();

    // promise - pending, rejected, fulfilled
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'click' }).click(),
        ]);

    await newPage.bringToFront();

    const childPageTitle = await newPage.title();
    console.log("Child tab title is :: ", childPageTitle);

    await expect.soft(newPage).toHaveTitle("Selenium");

    if (childPageTitle == "Selenium") {
        await newPage.close();
    }

    await page.bringToFront();

    await expect.soft(page.getByText('Open New Seperate Windows')).toBeVisible();

    await page.close();
});


test("Handling Multiple Windows Test", async ({ browser }) => {

    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto(`https://demo.automationtesting.in/Windows.html`);
    await parentPage.waitForLoadState('domcontentloaded');
    await parentPage.pause();

    const parentTabTitle = await parentPage.title();
    console.log("parentTabTitle is :: ", parentTabTitle);

    await expect.soft(parentPage).toHaveTitle('Frames & windows');

    await parentPage.getByText('Open Seperate Multiple Windows').click();

    // promise - pending, rejected, fulfilled
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            parentPage.getByRole('button', { name: 'click' }).click(),
        ]);

    await parentPage.waitForTimeout(3000);
    const allPages = context.pages();
    console.log('Number of pages :: ', allPages.length); //3
    console.log(await allPages[0].title());
    console.log(await allPages[1].title());
    console.log(await allPages[2].title());

    await allPages[1].bringToFront();

    const childPageTitle = await allPages[1].title();
    console.log("Child tab title is :: ", childPageTitle);

    await expect.soft(allPages[1]).toHaveTitle("Index");
    const emailField = newPage.getByPlaceholder('Email id for Sign Up');

    await expect.soft(emailField).toBeVisible();
    await expect.soft(emailField).toBeEnabled();
    await expect.soft(emailField).toBeEditable();

    if (childPageTitle == "Index") {
        await allPages[1].close();
    }

    await allPages[2].bringToFront();

    const childPageSel = await allPages[2].title();
    console.log("childPageSel title is :: ", childPageSel);

    expect.soft(childPageSel).toBe('Selenium');

    await expect(allPages[2].locator('//h1')).toBeVisible();

    if (childPageSel == "Selenium") {
        await allPages[2].close();
    }

    await parentPage.bringToFront();

    if (parentTabTitle == "Frames & windows") {
        await parentPage.close();
    }

});


