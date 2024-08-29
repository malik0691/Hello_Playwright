const { test, expect } = require('@playwright/test');
const HelloPage = require('../pages/helloPage');

const fs = require('fs');
const rawData = fs.readFileSync('./data/testData.json');
const testData = JSON.parse(rawData);

let helloPage;

test.describe('HelloDashboard tests', () => {

    test.beforeEach(async ({ page }) => {
        helloPage = new HelloPage(page);
        await page.goto('/');
    });


    test('Verification upon updating the first name', async ({ page }) => {
        const email = testData.email;
        const password = testData.password;
        const modifiedName= testData.updatedFirstname;

        await helloPage.enterEmail(email);
        await helloPage.enterpassword(password);
        await helloPage.selectSigninBtn();

        await helloPage.selectCustomer();
        await helloPage.selectCustomerLink();
        await helloPage.selectUser();
        await helloPage.editUser();
        await helloPage.updateFirstname(modifiedName);
        await helloPage.clickSaveBtn();

        const nameText = await helloPage.verifyName();
        expect(nameText).toContain("Maximilian");
        expect(nameText).toBeTruthy();
    });

    test.afterEach(async ({ page }) => {
        const modifiedRevertName= testData.currentFirstName;

        await helloPage.selectCustomerLink();
        await helloPage.selectUpdatedUser();
        await helloPage.editUser();
        await helloPage.revertFirstname(modifiedRevertName);
        await helloPage.clickSaveBtn();
    });

});