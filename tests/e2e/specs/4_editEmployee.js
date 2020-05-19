describe('Edit employee', () => {
  it('Login', () => {
    cy.visit('/')
    cy.get('#cy-input-email').type('bia@leads2b.com.br')
    cy.get('#cy-input-password').type('123456')
    cy.get('#cy-button-login').click()
  })
  it('Open edit modal', () => {
    cy.get('#cy-button-edit').first().click()

  })
  it('Type new name and edit', () => {
    cy.get('#cy-input-firstname').clear().type('VerySpecificName')
    cy.get('#cy-button-upsert').click()
  })
  it('Verify editions', () => {
    cy.contains('VerySpecificName')
  })
})
