/// <reference types="Cypress" /> 
describe('TestSuiteName', function()
{
    before(function() 
    {
        //runs once before all tests in the blocks
        cy.log('****** This is a SETUP BLOCK ********')
    })

    after(function() 
    {
        //runs once after all tests in the blocks
        cy.log('****** This is a TEAR-DOWN BLOCK ********')
    })

    beforeEach(function() 
    {
        //runs before each test in the block
        cy.log('****** This is a BLOCK that executes every time before an it block is executed. For example, a login block ********')
    })

    afterEach(function() 
    {
        //runs after each test in the block
        cy.log('****** This is a BLOCK that executes every time after an it block is executed. For example, a logout block ********')
    })

    it('searching', function()
    {
       cy.log('******* This is a Searching Test ********')
    })

    it('advanced searching', function()
    {
       cy.log('******* This is an Advanced Searching Test ********')
    })

    it('product listing', function()
    {
       cy.log('******* This is a Product Listing Test ********')
    })

}) 