/// <reference types="Cypress" /> 
describe('Alert Box', function()
{
    it('Alerts', function(){
        //ALERT BOX
        cy.visit("mail.rediff.com/cgi-bin/login.cgi")

        cy.get('input[type=submit]').click() 

            cy.on('window:alert',(str) =>
            {
                expect(str).to.equal('Please enter a valid user name')
            })
        })
    }) 
        describe('CA', function()
        {
            it('ConAlerts', function(){
            //CONFIRMATION ALERT
        cy.visit("https://testautomationpractice.blogspot.com/")
                cy.wait(9000)
        cy.get('#HTML9 > div.widget-content > button').click() 

        cy.on('window:confirm',(str2) =>
        {
            expect(str2).to.equal('Press a button!')
        })
    }) 
}) 

        describe('NavSuite', function()
        {
            it('Navigation Tests', function()
            {
                //NAVIGATE TO HOMEPAGE AND VALIDATE PAGE
                cy.visit("https://demo.nopcommerce.com/")
                cy.title().should('eq','nopCommerce demo store') 

                //NAVIGATE TO REGISTER AND VALIDATE THE PAGE 
                cy.get('.ico-register').contains('Register').click() 
                cy.title().should('eq','nopCommerce demo store. Register') 

                //NAVIGATE BACKWARDS TO HOMEPAGE
                cy.go('back')
                cy.title().should('eq', 'nopCommerce demo store')

                //NAVIGATE FORWARD TO REGISTRATION PAGE
                cy.go('forward')
                cy.title().should('eq','nopCommerce demo store. Register') 

                //NAVIGATE BACKWARDS TO HOMEPAGE USING -1
                cy.go(-1)
                cy.title().should('eq', 'nopCommerce demo store')

                 //NAVIGATE FORWARD TO REGISTRATION PAGE USING 1
                 cy.go(1)
                 cy.title().should('eq','nopCommerce demo store. Register')

                 //RELOAD/REFRESH PAGE 
                cy.reload()

            })
        })