import { type Page } from '@playwright/test';
import LoginPage from './LoginPage'
import PlaceOrderPage from './PlaceOrderPage';
import TestConfig from '../testdata/TestConfig';

export default class PageObjectManager {

    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly placeOrderPage: PlaceOrderPage;
    readonly testConfig: TestConfig;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
        this.testConfig = new TestConfig();
    }


}





