class LoginPage
{

    nav()
    {
        cy.visit("https://admin-demo.nopcommerce.com/login")
    }

    enterEmail(value)
    {
        const textfield = cy.get('[id=Email]').clear()
        //textfield.clear()
        textfield.type(value)
        return this
    }

    enterPassword(value)
    {
        const passwordfield = cy.get('[id=Password]')
        passwordfield.clear()
        passwordfield.type(value)
        return this
    }

    clickButton()
    {
        const submitbutton = cy.get('[type=submit]')
        submitbutton.click()
    }


}

export default LoginPage