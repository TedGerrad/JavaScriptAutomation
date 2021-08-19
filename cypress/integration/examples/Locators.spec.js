/// <reference types="cypress" />

describe('Locating Elements',function()
    {
        it('verify types of locators',function()
            {
                cy.visit("https://demo.nopcommerce.com/") //launch browser and opens application url

                cy.get("#small-searchterms").type("Apple MacBook Pro 13") //Enter text in search box 

                cy.get("[type='submit']").click() //click on search button  

                cy.get("body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.search-results > div > div.products-wrapper > div > div > div > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button").click()//Select item from search result and add item to cart
                
                cy.get("#product_enteredQuantity_4").clear().type("3")//enter item quantity of your choice

                cy.get("#add-to-cart-button-4").click()//add to cart after altering quantity 
                
                cy.get("#topcartlink > a > span.cart-label").click()//click on shopping cart link after it appears

                cy.get(".product-unit-price").contains("$1,800.00")//validate unit price of item selected

                cy.get(".product-subtotal").contains("$5,400.00")//Validate the product sub-total of items in the cart.
            }
        )
    }
)