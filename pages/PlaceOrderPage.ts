import { expect, type Page } from '@playwright/test';
import PageObjects from './PageObjects';

export default class PlaceOrderPage extends PageObjects {

    constructor(page: Page) {
        super(page); // parent class constructor
    }

    async addProdToCart(prodName: string) {
        try {
            await expect.soft(this.products.first()).toBeVisible();
            for (const prod of await this.products.all()) {
                if (await prod.locator("b").innerText() == prodName) {
                    // await prod.locator("//button[text()=' Add To Cart']").click();
                    await prod.getByText(' Add To Cart').click();
                    break;
                }
            }
            await expect.soft(this.successMessage).toBeVisible();
        } catch (error) {
            console.log(error);

        }
    }

    async navigateToCart() {

        await this.cartBtn.click();
        await expect.soft(this.checkoutBtn).toBeVisible();
    }

    async navigateToOrders() {

        await this.ordersBtn.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }

    async placeOrder(country: string) {
        await this.checkoutBtn.click();
        await this.countryField.pressSequentially(country);
        await this.countryOption.last().click();
        await this.placeOrderBtn.click();
        await expect.soft(this.successMessage).toBeVisible();
        await expect.soft(this.orderIdText).toBeVisible();

    }

    async getOrderId(): Promise<string> {

        return (await this.orderIdText.innerText()).replaceAll('|', '').trim();

    }

    async verifyOrder(orderId: string) {
        await expect.soft(this.orderIdCol).toContainText(orderId);
        if (await this.orderIdCol.innerText() == orderId) {
            await this.viewOrderButon.click();
        }
        await expect.soft(this.orderIdInOrderDetails).toContainText(orderId);
    }

    async clickViewOrdersButton() {
        await this.viewOrdersButton.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }

}