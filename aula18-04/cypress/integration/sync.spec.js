/// <reference types="cypress" />

describe('Waits ...', () => {

    before(()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload()
    })

    it('Element must be available', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();        
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('funcional');
    })

    it('Retries', () => {
        cy.get('#buttonDelay').click();        
        cy.get('#novoCampo').should('exist');
       
    })

})