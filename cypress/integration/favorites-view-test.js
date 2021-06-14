describe('Emotion Question View', () => {


  beforeEach(() => {
    cy.stubCocktails()
  });

  describe('Favorite Drink User Flow', () => {

    it('After a drink is is recomended, user can favorite drink to be added to a new view', () => {
      cy.get('.select')
        .select('happy')
      .get('.drinkBtn')
        .click()
      .get('.favBtn')
        .click()
      .get('.select')
        .select('melancholy')
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

    it('should display header elements on favorites page', () => {
      cy.get('.favPageBtn')
        .click()
      .get('h1')
        .contains('Mixed Drinks About Feelings')
      .get('.homebtn')
        .contains('Home')
      .get('.favPageBtn')
        .contains('Favorites')
    });

    it('should display a new url path when favorites page is selected', () => {
      cy.get('.favPageBtn')
        .click()
      .url().should('eq', 'http://localhost:3000/favorites')
      .get('.fav-error')
        .contains("Aren't you thirsty?")
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
  });

  describe('Navigation User Flow', () => {

    it('should navigate home when home button is selected', () => {
      cy.url().should('eq', 'http://localhost:3000/')
      .get('.favPageBtn')
        .click()
        .url().should('eq', 'http://localhost:3000/favorites')
      .get('.fav-error')
        .contains("Aren't you thirsty?")
      .get('.homebtn')
        .click()
        .url().should('eq', 'http://localhost:3000/')
      .get('.label')
        .contains('How are you feeling today:')
    })
  });
});
