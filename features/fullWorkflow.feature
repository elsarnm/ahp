@full_workflow
Feature: Full workflow

  Scenario: 2a. User successfully creates a new company
    Given the user is logged into the Clio dashboard
    When the user goto new company form
    And the user enters valid company details
    Then the new company should be visible in the company list

  Scenario: 2b. User successfully creates a new matter
    Given the user is logged into Clio
    When the user navigates to the "Matters" section
    And clicks on "New matter"
    And fills in all required fields
    And clicks "Save matter"
    Then the new matter should be listed in the Matters section

  Scenario: 2c. User successfully creates a task
    Given the user is logged into Clio
    When the user navigates to the "Tasks" section
    And user clicks on New task
    And fills in all required task fields
    And clicks "Save task"
    Then the task should appear in the Task list

  Scenario: 2d. User successfully records time entry
    Given the user is logged into Clio
    And the user is viewing a "-Prince Group: Test example 1" matter
    When the user clicks "Add time"
    And fills in time duration, description, and rate
    And clicks "Save entry"
    Then the time entry should be added to the matter's billing record