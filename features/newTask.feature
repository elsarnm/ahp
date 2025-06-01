@new_task
Feature: Create a new task

Scenario: 2c. User successfully creates a task
  Given the user is logged into Clio
  When the user navigates to the "Tasks" section
  And user clicks on New task
  And fills in all required task fields
  And clicks "Save task"
  Then the task should appear in the Task list