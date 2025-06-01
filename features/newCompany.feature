@new_company
Feature: Create a new company

Scenario: 2a. User successfully creates a new company
  Given the user is logged into the Clio dashboard
  When the user goto new company form
  And the user enters valid company details
  Then the new company should be visible in the company list