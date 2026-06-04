import { test, expect } from '@playwright/test';


test.skip("Upload single file", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    await page.locator('#singleFileInput').scrollIntoViewIfNeeded();
    await page.locator('#singleFileInput').setInputFiles('C:/Users/GOMASA/Downloads/data.xlsx');

    await page.getByText('Upload Single File').click();

    const fileUploadedText = page.locator('#singleFileStatus');
    await expect.soft(fileUploadedText).toContainText('data.xlsx');
    await page.close();


});


test.skip("Upload Multiple files", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    await page.locator("#multipleFilesInput").setInputFiles(['./Runningnotes.txt', 'C:/Users/GOMASA/Downloads/data.xlsx']);

    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    const fileStatus = page.locator('#multipleFilesStatus');
    await expect.soft(fileStatus).toBeVisible();

    await expect.soft(fileStatus).toContainText('Runningnotes.txt');


});

test("Remove Uploaded Files", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    await page.locator("#multipleFilesInput").setInputFiles(['./RunningNotes.txt', 'C:/Users/GOMASA/Downloads/data.xlsx']);

    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    const fileStatus = page.locator('#multipleFilesStatus');

    await expect.soft(fileStatus).toBeVisible();
    await expect.soft(fileStatus).toContainText('RunningNotes.txt');
    await expect.soft(fileStatus).toContainText('data.xlsx');

    await page.locator("#multipleFilesInput").setInputFiles([]);
    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    await expect.soft(fileStatus).toBeVisible();
    await expect.soft(fileStatus).toContainText('No files selected.');


});
