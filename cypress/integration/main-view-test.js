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

  describe('Form User Flow', () => {

    it('should load a data set of emotions in form drop down', () => {
      cy.get('.select')
        .select('happy')
        .should('have.value', 'happy')
      .get('.select')
        .select('sad')
        .should('have.value', 'sad')
      .get('.select')
        .select('confused')
        .should('have.value', 'confused')
    })

    it('should display a drink from fetched data when an emotion is submitted', () => {
      cy.get('.select')
        .select('happy')
        .should('have.value', 'happy')
      .get('.drinkBtn')
        .click()
      .get('article').get('h2')
        .contains('Old Pal')
      .get('img')
        .should('have.attr', 'src', 'https://www.thecocktaildb.com/images/media/drink/x03td31521761009.jpg')
    })
  })

});
