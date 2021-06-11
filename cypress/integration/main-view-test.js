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
    });
  });

});
