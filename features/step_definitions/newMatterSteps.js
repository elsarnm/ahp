import { When, Then } from '@cucumber/cucumber';
import { goToMattersList } from '../helpers/navigationHelpers.js';
import { fillMattersDetails } from '../helpers/formHelpers.js';


When('fills in all required fields', async function () {
    await fillMattersDetails(this.page);
});

Then('the new matter should be listed in the Matters section', async function () {
    await goToMattersList(this.page);
});