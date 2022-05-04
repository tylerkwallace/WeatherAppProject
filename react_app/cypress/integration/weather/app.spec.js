/// <reference types="cypress" />


describe('weather app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays weather app', () => {
    cy.get(".clock").should('be.visible')
    cy.get(".date").should('be.visible')
    cy.get(".input-group").should('be.visible')
    cy.get(".btn").should('be.visible')
    cy.get(".form-control").type("atlanta")
    cy.get(".btn").click()
    cy.get(".location").should('be.visible')
    cy.get(".clock").should('be.visible')
    cy.get(".date").should('be.visible')
    cy.get(".input-group").should('be.visible')
    cy.get(".btn").should('be.visible')
    cy.get(".current-temp").should('be.visible')
    cy.get(".current-description").should('be.visible')
    cy.get(".icon").should('be.visible')
    cy.get("#conditions-info").should('be.visible')
    cy.get("#current-conditions").should('be.visible')
    cy.get(".feels").should('be.visible')
    cy.get(".humidity").should('be.visible')
    cy.get(".wind").should('be.visible')
    cy.get("#conditions-info").should('be.visible')
    cy.get(".card-container").should('be.visible')
    cy.get(".indCards.closed.card").should('be.visible')
    cy.get(".card-title").should('be.visible')
    cy.get("#forecast-icon").should('be.visible')
    cy.get(".fas.fa-chevron-down").should('be.visible')
    cy.get('.indCards.closed.card').click({ multiple: true })
    cy.get(".indCards.open .five-day-forecast").should('have.length', 5)
    cy.get('.indCards.open.card').click({ multiple: true })
    cy.get(".fas.fa-chevron-down").should('be.visible')
  })

  it('displays error message', () => {
    cy.get(".clock").should('be.visible')
    cy.get(".date").should('be.visible')
    cy.get(".input-group").should('be.visible')
    cy.get(".btn").should('be.visible')
    cy.get(".form-control").type("$$$")
    cy.get(".btn").click()
    cy.get('#err').should('be.visible')
  })

})
