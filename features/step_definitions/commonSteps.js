const { Given, When } = require('@cucumber/cucumber');
const { userLogin } = require('../helpers/loginHelpers');
const { goToSection, clickButton } = require('../helpers/navigationHelpers');


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