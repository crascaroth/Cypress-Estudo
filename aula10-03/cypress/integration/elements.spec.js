///<reference types="cypress" />

const { before } = require("cypress/types/lodash")

describe('Work With Basic  Elements', () => {
    before(()=> {
        cy.visit("http://www.wcaquino.me/cypress/componentes.html")
    })
    beforeEach(()=>{
        cy.reload()
    })
    it('Text', () => {
        // cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        // cy.visit('http://www.wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', "Voltou!")
        
        cy.reload()
        cy.get('#resultado').should('have.not.text', "Voltou!")
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', "Voltou!")
    })
})

