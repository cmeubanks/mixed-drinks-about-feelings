const apiCalls = {

  async getCocktails() {
    const response = await fetch('');
    const data = await response.json();
    return data;
  }

}

export default apiCalls;
