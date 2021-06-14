describe('Emotion Question View', () => {


  beforeEach(() => {
    cy.stubCocktails()
  });

  describe('Favorite Drink User Flow', () => {

    it('After a drink is is reccomended, user can favorite drink to be added to a new view', () => {
      cy.get('.select')
        .select('happy')
      .get('.drinkBtn')
        .click()
      .get('.favBtn')
        .click()
      .get('.select')
        .select('sad')
      .get('.drinkBtn')
        .click()
      .get('.favBtn')
        .click()
      .get('.favPageBtn')
        .click()
      .get('#14029').get('h2')
        .contains('Old Pal')
      .get('#178318').get('h2')
        .contains('Orange Rosemary Collins')
    });

    it('should header elements on favorites page', () => {
      .get('.favPageBtn')
        .click()
    });

    it('should display a new url path when favorites page is selected', () => {
      .get('.favPageBtn')
        .click()
      .url().should('eq', 'http://localhost:3000/favorites')
    });

    it('should display all article elements when a drink is added to favorites view', () => {
      cy.get('.select')
        .select('happy')
      .get('.drinkBtn')
        .click()
      .get('.favBtn')
        .click()
      .get('.favPageBtn')
        .click()
      .get('#14029').get('h2')
        .contains('Old Pal')
      .get('.drink-img')
        .should('have.attr', 'src', 'https://www.thecocktaildb.com/images/media/drink/x03td31521761009.jpg')
      .get('.favBtn')
        .contains('Favorite')
    });

    it('should navigate home when home button is selected')
  });
});
