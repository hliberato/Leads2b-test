describe('Remove employee', () => {
  it('Login', () => {
    cy.visit('/')
    cy.get('#cy-input-email').type('bia@leads2b.com.br')
    cy.get('#cy-input-password').type('123456')
    cy.get('#cy-button-login').click()
  })
  it('Count 40 lines', () => {
    cy.get('.el-table__body').find('tr').should('have.length', 40)
  })
  it('Open remove confirm modal', () => {
    cy.get('#cy-button-remove').first().click()
  })
  it('Confirm removal', () => {
    cy.get('.el-button--danger').click()
  })
  it('Verify removal. Shoud have 39 lines', () => {
    cy.get('.el-table__body').find('tr').should('have.length', 39)
  })
})
