describe('Accessing Flybuys website', () => {
  it('Opens the web', () => {
    cy.visit('https://www.flybuys.co.nz')

    cy.get('#hamburger_btn').click()

    cy.get('#hamburger_query').type('asdfadsfadsfadsadsf {Enter}')

    cy.get('.no-results').contains('sorry there are no results')

  })
})