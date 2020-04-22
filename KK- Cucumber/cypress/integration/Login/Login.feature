Feature: Login

   I should be able to log in and out as Admin

   Scenario: Login as Admin Successfully
   Given I navigate to the ETS Login page
   When I type in username and password
   And I click on Sign in button
   Then the home page should be shown


   Scenario: Log out as Admin 
   Given I am on the Home page
   When I click on Admin Profile
   And I click on Logout button
   Then I should be signout to Login Page
