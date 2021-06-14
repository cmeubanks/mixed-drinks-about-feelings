describe('Error Handling', () => {

  describe('Status error', () => {

    it('Should display an error message for a server error', () => {
    cy.intercept('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
      .contains('OH NO, Something went wrong! Reload page and try again.')
  });
});
});
