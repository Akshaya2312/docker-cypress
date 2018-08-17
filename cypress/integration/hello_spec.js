describe('My First Test', function() {
  it('finds the content "type"', function() {
    cy.visit('http://firstpage1:80')gir
    cy.contains('Hello World!')
  })
})