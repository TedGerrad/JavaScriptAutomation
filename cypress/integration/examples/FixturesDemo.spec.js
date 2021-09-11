/// <reference types="Cypress" /> 
describe('TestSuiteName', function()
{

    before(function() 
    {
        //load fixture file with test data
        cy.fixture('example').then(function(data){
            this.data = data
        })
        

    })

    it('FixtureDemoTest', function()
    {
       //cy.visit('https://admin-demo.nopcommerce.com/login')
       //cy.visit('https://login.yahoo.com/?.intl=nz')
       cy.visit('https://www.phptravels.net/login')
       cy.wait(5000)
       cy.get(".form-control[placeholder=Email]").should('be.visible').should('be.enabled').click({force:true}).type(this.data.email)
       cy.get(".form-control[placeholder=Password]").should('be.visible').should('be.enabled').click({force:true}).type(this.data.password)
       cy.get("body > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button").should('be.visible').should('be.enabled').click({force:true}) 
       //cypress.$('input[id=login-username]').trigger('click').should('be.enabled').type(this.data.email)
       //cy.get('input[name=Email]').type(this.data.email)// email data
       //cy.get('input[name=Password]').type(this.data.password)//password data
       //cy.get('body > div.master-wrapper-page > div > div > div > div > div.page-body > div.customer-blocks > div > form > div.buttons > button').click()//Signin
    })
})