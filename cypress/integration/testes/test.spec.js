describe("Login",function(){
    it("Sigin",function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=08ody4')
        cy.get('input[type="email"]').type('dayane.felix.freitas@gmail.com')
        cy.get('input[type="password"]').type('teste123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        //should espera que o botão exista na tela,que ele esteja visivel
    })
})