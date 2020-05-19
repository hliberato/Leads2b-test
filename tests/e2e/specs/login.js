describe('Login', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('form', 'Login')
  })
  it('Type e-mail and pasword', () => {
    cy.get('[type=text]').type('bia@leads2b.com.br')
    cy.get('[type=password]').type('123456')
    cy.get('[type=button].el-button--primary').click()
  })
  it('Go to Home', () => {
    cy.get('.home-view').should('be.visible')
  })
})
