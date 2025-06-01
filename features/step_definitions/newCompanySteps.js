const { Given, When, Then } = require('@cucumber/cucumber');
const { userLogin } = require('../helpers/loginHelpers');
const { goToCompany, goToContactList } = require('../helpers/navigationHelpers');
const { fillCompanyDetails } = require('../helpers/formHelpers');


Given('the user is logged into the Clio dashboard', { timeout: 100000 }, async function () {
    await userLogin(this.page);
});

When('the user goto new company form', { timeout: 100000 }, async function () {
    await goToCompany(this.page);
});

When('the user enters valid company details', { timeout: 100000 }, async function () {
    await fillCompanyDetails(this.page);
});

Then('the new company should be visible in the company list', { timeout: 100000 }, async function () {
    await goToContactList(this.page);
});
