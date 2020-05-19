describe('Login', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('form', 'Login')
  })
  it('Type e-mail/pasword and press Login', () => {
    cy.get('#cy-input-email').type('bia@leads2b.com.br')
    cy.get('#cy-input-password').type('123456')
    cy.get('#cy-button-login').click()
  })
  it('Go to Home', () => {
    cy.get('.home-view').should('be.visible')
  })
})
