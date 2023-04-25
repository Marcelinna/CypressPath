//import Method from "../support/methods/visit"
import Method from "methods/visit"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    Method.clickOnElement()

  })
})