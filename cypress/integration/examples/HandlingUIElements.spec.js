/// <reference types="cypress" /> 

describe('UI Elements', function()
{
    it('Verify Inputbox & Radio buttons', function()
    {
        //visit url
        cy.visit("https://www.phptravels.net/") 

        //verify url
        cy.title().should('eq','PHPTRAVELS - PHPTRAVELS')
        
        //click loginButton
        //cy.wait(5000)
        cy.get("body > header > div.header-top-bar.padding-right-100px.padding-left-100px > div > div > div:nth-child(2) > div > div > a.theme-btn.theme-btn-small.theme-btn-transparent.ml-1.waves-effect").click()
        //cy.wait(6000)
        
        //verify status(visibility, checked or not etc) for email field
        cy.get(".form-control[placeholder=Email]").should('be.visible').should('be.enabled').click({force:true}).type("testemail@hotmail.com")
        
        //verify status of input box for password
        cy.get(".form-control[placeholder=Password]").should('be.visible').should('be.enabled').click({force:true}).type("testuser")
        
        //verify status and click the signin button
        cy.get("body > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button").should('be.visible').should('be.enabled').click({force:true}) 

        //verify dashboard
        //cy.get("body > div.sidebar-nav > div > div.sidebar-menu-wrap > ul > li.page-active > a").should('be.visible').should('eq','Dashboard')
        cy.title().should('eq','Dashboard - PHPTRAVELS')

        //click on flights
        cy.get("body > header > div.header-menu-wrapper.padding-right-100px.padding-left-100px > div > div > div > div > div.main-menu-content > nav > ul > li:nth-child(3) > a").click()
        
        //validate flights page
        cy.get("body > section.round-trip-flight.section--padding > div > div:nth-child(1) > div > div > h2").contains('Top Flight Destinations')
        
        //validate one-way trip
        cy.get("#one-way").should('be.visible').should('be.enabled').should('be.checked')

        //validate round-trip
        cy.get("#round-trip").should('be.visible').should('be.enabled').should('not.be.checked').click({force:true})

        //validate multi-way
        cy.get("#multi-trip").should('be.visible').should('be.enabled').should('not.be.checked')
        
    })
})
    
