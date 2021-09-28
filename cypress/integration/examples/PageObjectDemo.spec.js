/// <reference types="Cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('TestSuiteName', function() {

    it('Valid Login Test', function(){

        const lp=new LoginPage()
        lp.nav()
        lp.enterEmail('admin@yourstore.com')
        lp.enterPassword('admin')
        lp.clickButton()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })

})