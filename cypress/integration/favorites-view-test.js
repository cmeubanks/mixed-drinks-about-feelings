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
  });
});
