import { Given, When, Then } from '@cucumber/cucumber';
import { userLogin } from '../helpers/loginHelpers.js';
import { goToCompany, goToContactList } from '../helpers/navigationHelpers.js';
import { fillCompanyDetails } from '../helpers/formHelpers.js';


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
