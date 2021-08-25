/// <reference types="Cypress" /> 

describe('MySuiteName', function()
{
    it('Test Table', function()
    {
        //NAVIGATE TO URL
        cy.visit("https://testautomationpractice.blogspot.com") 

        //1) CHECK THE PRESENCE OF A VALUE ANYWHERE IN A TABLE.
        cy.get('table[name=BookTable]').contains('Learn Selenium').should('be.visible')

        //2) VERIFY THE PRESENCE OF A VALUE IN A SPECIFIC ROW & COLUMN
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //3) CHECKING THE PRESENCE OF A VALUE BASED ON A CONDITION BY ITERATING THE ROWS IN A TABLE
        // SCENARIO: WE WANT TO VERIFY THE BOOK NAME "Master In Java" WHOSE AUTHOR IS Amod
        //step 1: create a css selector that matches with all the author names column
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e1, index, $list) => {
           const authName = $e1.text()
           if(authName.includes("Amod")) 
           {
               cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname)
               {
                   const bookName = bname.text()
                   expect(bookName).to.equal("Master In Java")
               })
           }
        })
        //While iterating, find the name which equals Amod and Verify the BookName assigned to the author

    }) 
})
    