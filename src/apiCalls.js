const apiCalls = {

  async getCocktails() {
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const data = await response.json();
    console.log(data)
    return data;
  }
}

export default apiCalls;
