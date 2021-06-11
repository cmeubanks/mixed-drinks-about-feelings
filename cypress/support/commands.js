import drinkData from '../fixtures/drink-data.json';

const baseURL = 'https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'

Cypress.Commands.add('stubCocktails', () => {
  cy.intercept(baseURL, drinkData)
    .visit('http://localhost:3000/')
});
