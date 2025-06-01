import { When, Then, Given } from '@cucumber/cucumber';
import { clickButton2, goToSection, goToMattersList, goToBillingMatter } from '../helpers/navigationHelpers.js';
import { fillTimeDetails } from '../helpers/formHelpers.js';

Given('the user is viewing a {string} matter', async function (sectionName) {
  await goToMattersList(this.page);
  await goToSection(this.page, sectionName);
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