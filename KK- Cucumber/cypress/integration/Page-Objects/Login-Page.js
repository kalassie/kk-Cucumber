/// <reference types="cypress"/>

export  class  LoginPage {
    navigate()
    {cy.visit("http://172.22.13.123/")}

    addUserName(Admin)
    {cy.get('#username').type(Admin + '{enter}')}

    addPassword(Password)
    {cy.get('#password').type(Password + '{enter}')}

    //ClickLoginButton(LoginButton)

}