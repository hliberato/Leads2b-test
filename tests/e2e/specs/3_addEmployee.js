describe('Add employee', () => {
  it('Login', () => {
    cy.visit('/')
    cy.get('#cy-input-email').type('bia@leads2b.com.br')
    cy.get('#cy-input-password').type('123456')
    cy.get('#cy-button-login').click()
  })
  it('Open add dialog', () => {
    cy.get('#cy-button-add').click()
    cy.get('.employee-dialog').contains('Add employee')
  })
  it('Type new employee', () => {
    cy.get('#cy-input-firstname').type('Henrique')
    cy.get('#cy-input-lastname').type('Liberato')
    cy.get('#cy-input-email').type('henriquebmx@gmail.com')
    cy.get('#cy-input-function').type('Frontend Engineer')
    cy.get('#cy-input-active span').click()
  })
  it('Register new', () => {
    cy.get('#cy-button-upsert').click()
    cy.contains('Employee added')
    cy.contains('Henrique')
    cy.contains('Liberato')
  })
})
