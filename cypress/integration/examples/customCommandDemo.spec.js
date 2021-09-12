/// <reference types="Cypress" /> 
describe('CustomTestSuite', function()
{
    it('LoginTest', function()
    {
        //Script for Login Test using hard-coded data-driven values
        cy.login('admin@yourstore.com','admin')//valid input data
        cy.wait(5000)
        cy.title().should('be.equal','Dashboard / nopCommerce administration') 

        cy.login('admin@yourstore.com','admin22')//in-valid input data
        cy.wait(5000)
        cy.title().should('be.equal','Your store. Login') 
        
        cy.login('admin@yourstore.com22','admin')//in-valid input data
        cy.wait(5000)
        cy.title().should('be.equal','Your store. Login') 

    })

    it('AddCustomerTest', function()
    {
        //Script for Login Test
        cy.login('admin@yourstore.com','admin')//valid input data

        //Script for adding a new customer
        cy.log('A new customer has been added')

    })

    it('EditCustomerTest', function()
    {
        //Script for Login Test
        cy.login('admin@yourstore.com','admin')//valid input data
        //Script for editing Customer details
        cy.log('Customer details have been edited') 

    })
})