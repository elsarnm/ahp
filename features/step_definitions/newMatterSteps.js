const { When, Then } = require('@cucumber/cucumber');
const { goToMattersList } = require('../helpers/navigationHelpers');
const { fillMattersDetails } = require('../helpers/formHelpers');


When('fills in all required fields', async function () {
    await fillMattersDetails(this.page);
});

Then('the new matter should be listed in the Matters section', async function () {
    await goToMattersList(this.page);
});