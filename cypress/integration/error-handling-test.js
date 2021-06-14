describe('Error Handling', () => {

  describe('Status error', () => {

  it('Should display an error message for a server error', () => {
    cy.intercept('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/')
    .get('.errorMess')
      .contains('OH NO, Something went wrong! Reload page and try again.')
  });

  it('Should display an error message for a server error', () => {
    cy.intercept('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail', {
      statusCode: 400
    })
    cy.visit('http://localhost:3000/')
    .get('.errorMess')
      .contains('OH NO, Something went wrong! Reload page and try again.')
  });
});

  describe('Navigation Error', () => {

    it('Should direct the user home when the wrong URL path is typed in browser', () => {
      cy.stubCocktails()
        .visit('http://localhost:3000/bugs')
        .url().should('eq', 'http://localhost:3000/')
    })
  })

  describe('Form Errors', () => {

    beforeEach(() => {
      cy.stubCocktails()
    });

    it('should display an error message if a user trys to get a drink without an emotion input', () => {
      cy.get('.select')
        .get('.drinkBtn')
        .click()
        .get('.errorMess')
          .contains('Choose valid emotion')
    })

    it('should display a message if user visits favorites page without adding a favorite drink', () => {
      cy.visit('http://localhost:3000/favorites')
        .get('.fav-error')
          .contains("Aren't you thirsty?")
    })

    it('should prevent a user from adding duplicate favorite drinks', () => {
      cy.get('.select')
        .select('happy')
      .get('.drinkBtn')
        .click()
      .get('.favBtn')
        .click()
        .click()
        .click()
      .get('.favPageBtn')
        .click()
      .get('h2')
        .contains('Old Pal')
      .get('.drink').should('have.length', 1)
    })
  })
});
