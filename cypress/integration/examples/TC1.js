describe('TestSuiteName', function()
{

	it('TC1', function() {
        cy.visit ('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
	})
   
    it('TC2', function() {
        cy.visit ('https://demo.nopcommerce.com/')
        cy.title().should('eq','goal.com')
	})
})