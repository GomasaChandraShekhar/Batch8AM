import { test } from '@playwright/test';
import PageObjectManager from '../pages/PageObjectManager';
import ReadFiles from '../utils/ReadFiles';

const readFiles = new ReadFiles();
const dataFilePath = 'testdata/PlaceOrder.csv';
// const loginData: any = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
const loginData: any = readFiles.readCsvFile(dataFilePath);

let orderId: string;
let pageObjectManager: PageObjectManager;

for (const { prodName, country } of loginData) {

    test.describe(`Verify Place Order`, { tag: ['@Smoke', '@Regression'] }, () => {
        test.beforeEach(async ({ page }) => {
            // await page.pause();
            pageObjectManager = new PageObjectManager(page);
            try {
                await pageObjectManager.loginPage.goto(pageObjectManager.testConfig.url);
                await pageObjectManager.loginPage.login(pageObjectManager.testConfig.userEmail, pageObjectManager.testConfig.userPassword);
            }
            catch (error) {
                console.log(error);
            }
        });

        test(`Verify Place Order for ${prodName}`, { tag: ['@Regression'] }, async () => {

            try {
                await pageObjectManager.placeOrderPage.addProdToCart(prodName);
                await pageObjectManager.placeOrderPage.navigateToCart();
                await pageObjectManager.placeOrderPage.placeOrder(country);
                orderId = await pageObjectManager.placeOrderPage.getOrderId();
                await pageObjectManager.placeOrderPage.navigateToOrders();
                await pageObjectManager.placeOrderPage.verifyOrder(orderId);
                await pageObjectManager.placeOrderPage.clickViewOrdersButton();
            }
            catch (error) {
                console.log(error);
            }
        });

        test.afterEach(async () => {
            await pageObjectManager.loginPage.signOut();
        });

    });

}

