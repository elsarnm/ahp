@add_timeEntryToMatter
Feature: Record time to a matter

Scenario: 2d. User successfully records time entry
  Given the user is logged into Clio
  And the user is viewing a "-Prince Group: Test example 1" matter
  When the user clicks "Add time"
  And fills in time duration, description, and rate
  And clicks "Save entry"
  Then the time entry should be added to the matter's billing record