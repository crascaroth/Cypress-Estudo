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
    it('Find usage', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li').find('span').should('contain', 'Item 1')
        // cy.get('#lista li').find('span').should('contain', 'Item 2')
        cy.get('#lista li span').should('contain', 'Item 2')
    })

    //Aula 21
    it('Using Timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('existe')
        // cy.get('#buttonListDOM').click()
        // cy.wait(5000)
        // cy.get('#lista li span', {timeout:30000}).should('contain', 'Item 2')
        
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span', {timeout:30000}).should('have.length', 1)
    })

    //Aula 22

    it.only('Should visit a page and assert title', () => {
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
        cy.title().should('be.equal', 'Campo de Treinamento').and('contain', 'Campo')

        cy.title().should(title => {
            console.log(title)
        })
    })

    
})