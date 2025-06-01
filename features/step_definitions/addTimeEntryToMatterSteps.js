const { When, Then, Given } = require('@cucumber/cucumber');
const { clickButton2, goToSection, goToMattersList, goToBillingMatter } = require('../helpers/navigationHelpers');
const { fillTimeDetails } = require('../helpers/formHelpers');


Given('the user is viewing a {string} matter', async function (sectionName) {
    await goToMattersList(this.page);
    await goToSection(this.page, sectionName)
});

When('the user clicks {string}', async function (buttonName2) {
    await clickButton2(this.page, buttonName2);
});

When('fills in time duration, description, and rate', async function () {
    await fillTimeDetails(this.page);
});

Then("the time entry should be added to the matter's billing record", async function () {
    await goToBillingMatter(this.page);
});