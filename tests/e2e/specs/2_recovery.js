describe('Recovery password', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('form', 'Login')
  })
  it('Click recovery pasword', () => {
    cy.get('#cy-button-forgot').click()
  })
  it('Type e-mail and click Recovery', () => {
    cy.get('#cy-input-forgotemail').type('bia@leads2b.com.br')
    cy.get('#cy-button-recovery').click()
  })
  it('Back to Login', () => {
    cy.contains('Check your e-mail!')
    cy.contains('Forgot password?')
  })
})
