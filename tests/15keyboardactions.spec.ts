import { test } from '@playwright/test';

test("Verify key board actions", async ({ page, context }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.pause();

    const nameField = page.locator('#name');
    const emailField = page.locator('#email');
    const PPLink = page.getByText('PlaywrightPractice');

    await nameField.pressSequentially('123', { delay: 200 });
    await nameField.press('End', { delay: 200 });
    await nameField.press('$')
    await nameField.pressSequentially('asdf', { delay: 200 });
    await nameField.press('Control+a');
    await nameField.press('Control+c');
    await emailField.press('Control+v');

    await PPLink.hover();

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            PPLink.press('Control+Enter', { delay: 300 })
        ]
    );

    const pages = context.pages();
    console.log(pages.length); // 2

    await page.close();

});




