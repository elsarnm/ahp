import { When, Then } from '@cucumber/cucumber';
import { goToTaskList, clickNewTask } from '../helpers/navigationHelpers.js';
import { fillTaskDetails } from '../helpers/formHelpers.js';


When('fills in all required task fields', async function () {
    await fillTaskDetails(this.page);
});

When('user clicks on New task', async function () {
    await clickNewTask(this.page);
});

Then('the task should appear in the Task list', async function () {
    await goToTaskList(this.page);
});