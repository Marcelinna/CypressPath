class Method{

clickOnElement(){
  cy.contains("children").click()
  cy.url().should('include', '/commands/traversal') 
}


}

export default new Method()