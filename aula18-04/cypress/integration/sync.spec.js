/// <reference types="cypress" />

describe('Waits ...', () => {

    before(()=>{
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{
        cy.reload()
    })
    //Aula 18

    it('Element must be available', () => {
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();        
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('funcional');
    })

    //Aula 19
    it('Retries', () => {
        cy.get('#buttonDelay').click();        
        cy.get('#novoCampo').should('exist');
       
    })

    //Aula 20
    it.only('Find usage', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li').find('span').should('contain', 'Item 1')
        // cy.get('#lista li').find('span').should('contain', 'Item 2')
        cy.get('#lista li span').should('contain', 'Item 2')
    })
})