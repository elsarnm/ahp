import { expect } from '@playwright/test';

// Goto menu, section, and link
export async function goToCompany(page) {
  await page.getByRole('button', { name: 'Create new' }).click();
  await page.getByRole('menuitem', { name: 'Contact' }).click();
  await page.locator('label').filter({ hasText: 'Company' }).first().click();
}

export async function goToContactList(page) {
  await page.getByRole('link', { name: 'Contacts' }).click();
  await expect(page.getByRole('gridcell', { name: 'Prince Group' })).toBeVisible();
}

export async function goToSection(page, sectionName) {
  await page.getByRole('link', { name: sectionName }).click();
}

export async function goToMattersList(page) {
  await page.getByRole('link', { name: 'Matters' }).click();
  await expect(page.getByRole('link', { name: '-Prince Group: Test example 1' })).toBeVisible();
  await expect(page.locator('tbody')).toContainText('00001-Prince Group: Test example 1');
}

export async function goToTaskList(page) {
  await expect(page.getByRole('gridcell', { name: 'Task 2 low Task example' })).toBeVisible();
}

export async function goToBillingMatter(page) {
  await page.getByRole('button', { name: 'Quick bill' }).click();
  await expect(page.frameLocator('iframe[title="Quick Bill \\| Clio"]').getByLabel('Example record')).toContainText('Example record 2');
  await expect(page.frameLocator('iframe[title="Quick Bill \\| Clio"]').getByLabel('Flat rate')).toContainText('Flat rate');
  // const frame = await page.frameLocator('iframe[title="Quick Bill \\| Clio"]').frame();
  // await expect(frame.getByLabel('Flat rate')).toBeVisible();
  // await expect(frame.getByLabel('Example record')).toBeVisible();
  // await expect(frame.getByText('Date User Activity Category')).toBeVisible();
}

// Click button

export async function clickButton(page, buttonName) {
  await page.getByRole('button', { name: buttonName }).click();
}

export async function clickButton2(page, buttonName2) {
  await page.getByRole('button', { name: buttonName2 }).click();
}

export async function clickNewTask(page) {
  await page.getByTitle('New task').getByLabel('New task').click();
}