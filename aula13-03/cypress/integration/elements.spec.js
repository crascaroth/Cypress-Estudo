/// <reference types="cypress" />

describe('section 03', () => {
    beforeEach(() =>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })
    it('Textfields', ()=> {
        cy.get('#formNome').type('Cypress Test');

        cy.get('#formNome').should('have.value', 'Cypress Test');

        cy.get('#elementosForm\\:sugestoes').type('TextArea').should('have.value', 'TextArea');

        cy.get(':nth-child(3) > :nth-child(6) > input').type("oioioi").should('have.value', 'oioioi');

        cy.get('[data-cy=dataSobrenome]').clear().type('testestes{backspace}{backspace}').should('have.value', 'testest')

        cy.get('#elementosForm\\:sugestoes').clear().type('Erro{selectall}acerto', {delay:100}).should('have.value', 'acerto');

    })
})