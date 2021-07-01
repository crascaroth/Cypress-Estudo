Given('que eu acesse o site Google', () => {
    
})

When('eu acessar o Google', () => {
    cy.visit('www.google.com.br')
})

Then('deu certo', () => {
    
    cy.url().should('eq', 'https://www.google.com.br/?gws_rd=ssl')
})