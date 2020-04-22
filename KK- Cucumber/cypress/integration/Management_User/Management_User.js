

/// <reference types="cypress"/>

import {LoginPage} from "../Page-Objects/Login-Page";

const page = new LoginPage()

before( () =>{
    page.navigate()
    page.addUserName('Admin')
    page.addPassword('xxxxxx')
    cy.get('[style="text-align:center;"] > .btn',{timeout: 6000}).click()
    cy.get('#side-menu > :nth-child(1) > a > .nav-label').should('have.text','Home')
    cy.wait(3000)
    
})
//Scenario: Navigate to the User Page
Given('I land on home page',()=>{
    cy.wait(3000)
    cy.get('#side-menu > :nth-child(1) > a > .nav-label').should('have.text','Home')
});

when('I navigate to the Manage users page and click on Add New User', ()=>{
    cy.wait(5000)
    cy.get('#side-menu > :nth-child(2) > :nth-child(1) > .nav-label').click()
    cy.get('.active > .nav-second-level > :nth-child(1) > a > .nav-label').click()
    cy.wait(500)
    cy.get('.k-grid-toolbar > .k-button').click()
    cy.wait(800)
});

Then('An Add new user window pops up', ()=>{
    cy.get('.k-popup-edit-form > :nth-child(1) > .k-edit-form-container > :nth-child(1)',{timeout: 3000}).should('exist')
    cy.wait(300)
})

//Scenario: Entering Users Details
Given('User sumbits valid informations', ()=>{
    cy.get('[data-container-for="Title"] > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').click()
    cy.wait(800)
    cy.xpath('//div/div[3]/ul/li[3]').should('have.text','Mr').click()
    cy.get('[data-container-for="First Name"] > .k-input').type('John')
    cy.get('[data-container-for="Last Name"] > .k-input').type('Smith')
    cy.get('[data-container-for="jobTitle"] > .k-input').type('Tester')
    cy.get('[data-container-for="Email"] > .k-input').type('Jsmith@ener.co.za')
    cy.get('[data-container-for="Contact Number"] > .k-input').type('0781547211')
    cy.get('[data-container-for="title"] > .k-input').type('JohnS')
    cy.get('#user-create-password').type('Password123')
    cy.get('#user-create-confirm-pass').type('Password123')
    cy.xpath('//div[20]/span/span/span/span').click()
    //cy.xpath('//div[11]/div/div[3]/ul/li').click()
    //cy.get('[data-container-for="From Date"] > .k-widget > .k-picker-wrap > .k-select > .k-icon').click()
    //cy.wait(800)
})

when('Click on the Create button', ()=>{


})

Then('User name should be added successfully', ()=>{


})