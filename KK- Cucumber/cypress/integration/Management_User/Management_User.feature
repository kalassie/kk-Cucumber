Feature: Management User
testing Management User


Scenario: Navigate to the User Page
Given I land on home page
When I navigate to the Manage users page and click on Add New User
Then An Add new user window pops up

Scenario: Entering Users Details
Given User sumbits valid informations

| Title*           | MR                 |
| First Name       | John               |  
| Last Name        | Smith              | 
| Job Title        | Tester             | 
| Company*         | EOH                | 
| Department       | Testing Department | 
| Email*           | Jsmith@ener.co.za  | 
| Contact Number   | 0781547211         | 
| From*            | Vaild Date         | 
| To*              | Vaild Date         | 
| User Name*       | JohnS              | 
| Password*        | Password123        | 
| Confirm Password | Password123        |  

And Click on the Create button
Then User name should be added successfully
