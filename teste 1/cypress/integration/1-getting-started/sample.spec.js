describe('Primeiro Teste',  function () {

it('Finds an Element', function () {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
})

it('Clicks an Element', function () {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
})

it('Makes an assertion', function ()  {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    cy.url().should('includes', '/commands/actions')
    
})

it('Gets, types and asserts', function(){
    cy.visit('https://example.cypress.io')

    cy.pause()
    cy.contains('type').click()

    cy.url().should('includes', '/commands/actions')
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
})
})