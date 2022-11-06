describe('Ensuring no results page exists', () => {
  beforeEach(function () {
    cy.visit('https://www.flybuys.co.nz')
    cy.get('[data-testid="flybuys-logo"]')
  })

  it('Negative - Search using hamburger', () => {
    cy.get('#hamburger_btn').click()

    cy.get('#hamburger_query').type('asdfadsfadsfadsadsf')
    cy.get('#intro_section > .search-form > .search-form__button > .glyphicon-search').click()

    cy.get('.no-results').invoke('text').should('match', /Sorry there are no results/)

  }); it('Negative - Search using footer', () => {
    cy.get('#footer_query').click()

    cy.get('#footer_query').type('asdfadsfadsfadsadsf')
    cy.get('.search_wrap > .search-form > .search-form__button').click()

    cy.get('.no-results').invoke('text').should('match', /Sorry there are no results/)


  })
})