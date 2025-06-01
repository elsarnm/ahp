const { expect } = require('@playwright/test');

exports.fillCompanyDetails = async function (page) {
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Prince Group');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('qa.testing.els@gmail.com');
  await page.locator('th-column').filter({ hasText: 'Phone number*' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('6285710025601');
  await page.getByRole('textbox', { name: 'Web address' }).click();
  await page.getByRole('textbox', { name: 'Web address' }).fill('https://portofolio-qa-elsa-sarah-nm.webflow.io/');
  await page.getByRole('textbox', { name: 'Street' }).click();
  await page.getByRole('textbox', { name: 'Street' }).fill('Jl. Medan Merdeka Barat No.22');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Central Jakarta');
  await page.getByRole('textbox', { name: 'State/Province' }).click();
  await page.getByRole('textbox', { name: 'State/Province' }).fill('Jakarta');
  await page.getByRole('textbox', { name: 'Zip/Postal code' }).click();
  await page.getByRole('textbox', { name: 'Zip/Postal code' }).fill('10110');
  await page.getByRole('button', { name: 'select' }).click();
  await page.getByRole('option', { name: 'Indonesia' }).click();
  await page.getByRole('button', { name: 'Custom fields' }).click();
  await page.locator('#customfields').getByRole('button', { name: 'select' }).click();
  await page.getByRole('button', { name: 'Custom fields' }).click();
  await page.getByRole('button', { name: 'Employees' }).click();
  await page.locator('#employees').getByRole('button', { name: 'select' }).click();
  await page.getByRole('button', { name: 'Employees' }).click();
  await page.getByRole('button', { name: 'Billing preferences' }).click();
  await page.getByRole('button', { name: 'Save contact' }).click();
}

exports.fillMattersDetails = async function (page) {
  await page.getByRole('region', { name: 'Template information' }).getByLabel('select').click();
  await page.getByRole('option', { name: 'Example' }).click();
  await page.getByLabel('Matter details').locator('cc-contact-field').getByRole('button', { name: 'select' }).click();
  await page.getByRole('option', { name: 'Prince Group (qa.testing.els@' }).click();
  await page.locator('label').filter({ hasText: 'Responsible staff*' }).getByLabel('select').click();
  await page.getByRole('option', { name: 'Elsa Sarah Nindita Manggala (' }).click();
  await page.getByRole('textbox', { name: 'Client reference number' }).click();
  await page.getByRole('textbox', { name: 'Client reference number' }).fill('021');
  await page.locator('label').filter({ hasText: 'Practice area*' }).getByLabel('select').click();
  await page.getByRole('option', { name: 'Employment / Labor' }).click();
  await page.locator('label').filter({ hasText: 'Matter Stage*' }).getByLabel('select').click();
  await page.locator('label').filter({ hasText: 'Closed date*' }).getByLabel('select').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: '9' }).first().click();
  await page.locator('label').filter({ hasText: 'Pending date*' }).getByLabel('select').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: '12' }).first().click();
  await page.locator('cc-statute-of-limitations').getByRole('button', { name: 'select' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: '1', exact: true }).first().click();
  await page.getByRole('button', { name: 'Add a reminder' }).click();
  await page.locator('cc-reminder').getByRole('button', { name: 'select' }).click();
  await page.getByRole('option', { name: 'Me (via email)' }).click();
  await page.getByRole('region', { name: 'Matter permissions' }).getByLabel('select').click();
  await page.getByRole('option', { name: 'Elsa Sarah Nindita Manggala (' }).click();
  await page.getByRole('region', { name: 'Related contacts' }).getByLabel('select').click();
  await page.getByText('Kings Group (qa.testing.els@').nth(1).click();
  await page.getByRole('textbox', { name: 'Relationship' }).click();
  await page.getByRole('textbox', { name: 'Relationship' }).fill('Father');
  await page.getByRole('checkbox', { name: 'Bill recipient' }).click();
  await page.getByLabel('Custom fields').locator('th-combobox').getByRole('button', { name: 'select' }).click();
  await page.getByLabel('Custom fields').locator('th-combobox').getByRole('button', { name: 'select' }).click();
  await page.getByRole('button', { name: 'General' }).click();
  // await page.getByRole('button', { name: 'General' }).click();
  // await expect(page.locator("//input[@name='customField16058213']")).toBeVisible();
  // await page.locator("//input[@name='customField16058213']").click();
  // await page.getByRole('option', { name: '8:00 AM' }).click();
  await page.locator('cc-matters-activity-category').getByRole('button', { name: 'select' }).click();
  await page.getByRole('textbox', { name: 'Amount' }).click();
  await page.getByRole('textbox', { name: 'Amount' }).fill('100');
  await page.getByRole('checkbox', { name: 'Notify firm users when matter' }).click();
  await page.getByRole('spinbutton', { name: 'Notify when trust funds are' }).click();
  await page.getByRole('spinbutton', { name: 'Notify when trust funds are' }).fill('100');
  await page.getByRole('checkbox', { name: 'Notify assignees when these' }).click();
  await page.getByRole('region', { name: 'Task lists' }).getByLabel('select').click();
  await page.getByRole('checkbox', { name: 'Notify assignees when these' }).click();
  await page.getByRole('button', { name: 'Save matter' }).click();
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByRole('spinbutton', { name: 'Notify when trust funds are' }).click();
  await page.getByRole('spinbutton', { name: 'Notify when trust funds are' }).press('ArrowLeft');
  await page.getByRole('spinbutton', { name: 'Notify when trust funds are' }).press('ArrowLeft');
  await page.getByRole('spinbutton', { name: 'Notify when trust funds are' }).press('ArrowRight');
  await page.getByRole('spinbutton', { name: 'Notify when trust funds are' }).fill('80');
}

exports.fillTaskDetails = async function (page) {
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Task 2');
  await page.getByLabel('Priority* Normal HighNormalLow').selectOption('low');
  await page.locator('div').filter({ hasText: /^Enter task description\.\.\.$/ }).locator('div').fill('Task e');
  await page.getByText('Task e').fill('Task example 2');
  await page.locator('cc-task-assign-to').getByRole('button', { name: 'select' }).click();
  await page.getByRole('option', { name: 'Elsa Sarah Nindita Manggala' }).click();
  await page.locator('[data-test="apollo-create-task-modal"] label').filter({ hasText: 'Task type*' }).getByLabel('select').click();
  await page.locator('[data-test="apollo-create-task-modal"] label').filter({ hasText: 'Task type*' }).getByLabel('select').click();
  await page.getByLabel('Task status* Pending').selectOption('in_review');
  await page.getByRole('textbox', { name: 'Time estimate' }).fill('2h');
  await page.locator('cc-matter-field').getByRole('button', { name: 'select' }).click();
  await page.getByRole('option', { name: '-Prince Group: Test example 1' }).click();
  await page.locator('cc-task-due-date').getByRole('button', { name: 'select', exact: true }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('link', { name: '31' }).click();
}

exports.fillTimeDetails = async function (page) {
  await page.getByRole('textbox', { name: 'Duration Info Toggle timer' }).click();
  await page.getByRole('textbox', { name: 'Duration Info Toggle timer' }).fill('1h');
  await page.locator('cc-activities-activity-category-field').getByRole('button', { name: 'select' }).click();
  await page.locator('cc-activities-activity-category-field').getByRole('button', { name: 'select' }).click();
  await page.locator('th-date-picker').getByRole('button', { name: 'select' }).click();
  await page.getByRole('link', { name: '31' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('Example record 2');
  await page.getByRole('textbox', { name: 'Rate' }).click();
  await page.getByRole('textbox', { name: 'Rate' }).fill('1');
  await page.getByRole('checkbox', { name: 'Non-billable' }).click();
}