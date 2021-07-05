/// <reference types="cypress" />

describe('Cypress Basics', () => {
    it('should visit a page and assert title', () => {
        cy.visit('http://www.wcaquino.me/cypress/componentes.html');
        // const title = cy.title();
        // console.log("titulo", title)

        cy.title().should('to.be.equal', 'Campo de Treinamento').and('contain', 'Campo');
    })
    it('should find and interact with an element', () => {
        cy.visit('http://www.wcaquino.me/cypress/componentes.html');
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
    })
})