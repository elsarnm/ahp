import { Given, When } from '@cucumber/cucumber';
import { userLogin } from '../helpers/loginHelpers.js';
import { goToSection, clickButton } from '../helpers/navigationHelpers.js';


Given('the user is logged into Clio', async function () {
    await userLogin(this.page);
});

When('the user navigates to the {string} section', async function (sectionName) {
    await goToSection(this.page, sectionName);
});

When('clicks on {string}', async function (buttonName) {
    await clickButton(this.page, buttonName);
});

When('clicks {string}', async function (buttonName) {
    await clickButton(this.page, buttonName);
});