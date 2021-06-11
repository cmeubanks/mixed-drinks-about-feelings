describe('Emotion Question View', () => {


  beforeEach(() => {
    cy.stubCocktails()
  });

  describe('Page Load User Flow', () => {

    it('should be able to visit the page and render the correct elements', () => {
      cy.get('.load')
          .contains('Loading...')
        .get('h1')
          .contains('Mixed Drinks About Feelings')
        .get('.drinkGreet')
          .contains('Your drink coming soon...')
        .get('.label')
          .contains('How are you feeling today:')
        .get('.select')
          .should('have.value','')
        .get('.drinkBtn')
          .contains('Get Drink')
    });
  });

});
