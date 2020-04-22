//Scenario: Login as Admin Successfully
Given('I navigate to the ETS Login page',()=>{
    cy.visit("http://172.22.13.123/")
});

When('I type in username and password',()=>{
    cy.get('#username').type('Admin')
    cy.get('#password').type('xxxxxx')
});

When('I click on Sign in button', ()=>{

    cy.get('[style="text-align:center;"] > .btn',{timeout: 6000}).click()
});

Then('the home page should be shown', ()=>{
    cy.wait(5000)
    cy.get('#side-menu > :nth-child(1) > a > .nav-label',{timeout: 10000}).should('have.text','Home')
})

//Scenario: Log out as Admin
Given('I am on the Home page',()=>{
    cy.wait(8000)
    cy.get('#side-menu > :nth-child(1) > a > .nav-label').click
});

When('I click on Admin Profile',()=>{
    cy.get('.h5').click()  
});

When('I click on Logout button',()=>{
    cy.get('.dropdown-menu > :nth-child(4) > a').click()
});

Then('I should be signout to Login Page', ()=>{
    cy.contains('Login').should('have.text', 'Login to the system')
    
})