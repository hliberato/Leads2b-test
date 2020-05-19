describe('Recovery password', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('form', 'Login')
  })
  it('Click recovery pasword', () => {
    cy.get('[type=button].el-button--text').click()
  })
  // it('Go to Home', () => {
  //   cy.get('.home-view').should('be.visible')
  // })
})
