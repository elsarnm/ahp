@new_matter
Feature: Create a new matter

Scenario: 2b. User successfully creates a new matter
  Given the user is logged into Clio
  When the user navigates to the "Matters" section
  And clicks on "New matter"
  And fills in all required fields
  And clicks "Save matter"
  Then the new matter should be listed in the Matters section