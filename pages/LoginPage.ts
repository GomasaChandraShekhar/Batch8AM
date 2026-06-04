import { expect, type Page } from '@playwright/test';
import { PageObjects } from './PageObjects';

export class LoginPage extends PageObjects {

    constructor(page: Page) {
        super(page);
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async login(email: string, userPassword: string) {
        await this.userEmail.fill(email);
        await this.password.fill(userPassword);
        await this.loginBtn.click();
        await expect.soft(this.successMessage).toBeVisible();
        await expect.soft(this.signOutBtn).toBeVisible();
    }

    async signOut() {
        await this.signOutBtn.click();
        await expect.soft(this.loginBtn).toBeVisible();

    }



}


