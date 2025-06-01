const { When, Then } = require('@cucumber/cucumber');
const { goToTaskList, clickNewTask } = require('../helpers/navigationHelpers');
const { fillTaskDetails } = require('../helpers/formHelpers');


When('fills in all required task fields', async function () {
    await fillTaskDetails(this.page);
});

When('user clicks on New task', async function () {
    await clickNewTask(this.page);
});

Then('the task should appear in the Task list', async function () {
    await goToTaskList(this.page);
});