/// <reference types="Cypress" /> 

describe('Suite Name', function()
{
    it('Verify check-boxes', function()
    {
        //NAVIGATE TO URL
        cy.visit("http://demo.automationtesting.in/Register.html") 
        cy.wait(5000)

        //SELECT CHECK-BOXES
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket') 
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies') 
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey') 

        //UNCHECK THE CHECK-BOXES
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //SELECT MULTIPLE CHECK-BOXES IN A SINGLE STATEMENT
        cy.get('input[type=checkbox]').check(['Cricket', 'Movies'])

    })
    
    
    it('Handles static drop-downs', function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html") 
        //SELECT DROP-DOWN ELEMENT BY USING ID 
        cy.get('#Skills').select('Select Skills').should('have.value','Select Skills')

   
    })
    //it('handles multi-select drop-down/list-box'), function()
    //{
        //SELECT DROP-DOWN ELEMENT BY USING ID 
      //  cy.get('#msdd').click() 
      //  cy.get('.ui-corner-all').contains('English').click()
      //  cy.get('.ui-corner-all').contains('German').click()

    //}

   
    it('Searchable drop-down', function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html") 
        //SELECT DROP-DOWN ELEMENT BY USING ID 
        cy.get('[role=combobox]').click() 
        cy.get('.select2-search__field').type('Den')
        cy.get('.select2-search__field').type('{enter}')

    })

})
