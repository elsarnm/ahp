const { expect } = require('@playwright/test');

// Goto menu, section, and link
exports.goToCompany = async function (page) {
  await page.getByRole('button', { name: 'Create new' }).click();
  await page.getByRole('menuitem', { name: 'Contact' }).click();
  await page.locator('label').filter({ hasText: 'Company' }).first().click();
};

exports.goToContactList = async function (page) {
  await page.getByRole('link', { name: 'Contacts' }).click();
  await expect(page.getByRole('gridcell', { name: 'Prince Group' })).toBeVisible();
}

exports.goToSection = async function (page, sectionName) {
  await page.getByRole('link', { name: sectionName }).click();
}

exports.goToMattersList = async function (page) {
  await page.getByRole('link', { name: 'Matters' }).click();
  await expect(page.getByRole('link', { name: '-Prince Group: Test example 1' })).toBeVisible();
  await expect(page.locator('tbody')).toContainText('00001-Prince Group: Test example 1');
}

exports.goToTaskList = async function (page) {
  await expect(page.getByRole('gridcell', { name: 'Task 2 low Task example' })).toBeVisible();
}

exports.goToBillingMatter = async function (page) {
  await page.getByRole('button', { name: 'Quick bill' }).click();
  await expect(page.locator('iframe[title="Quick Bill \\| Clio"]').contentFrame().getByLabel('Flat rate')).toBeVisible();
  await expect(page.locator('iframe[title="Quick Bill \\| Clio"]').contentFrame().getByLabel('Example record')).toBeVisible();
  await expect(page.locator('iframe[title="Quick Bill \\| Clio"]').contentFrame().getByText('Date User Activity Category')).toBeVisible();
}

// Click button

exports.clickButton = async function (page, buttonName) {
  await page.getByRole('button', { name: buttonName }).click();
}

exports.clickButton2 = async function (page, buttonName2) {
  await page.getByRole('button', { name: buttonName2 }).click();
}

exports.clickNewTask = async function (page) {
  await page.getByTitle('New task').getByLabel('New task').click();
}




