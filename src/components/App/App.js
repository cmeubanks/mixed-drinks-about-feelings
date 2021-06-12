import './App.css';
import React, { Component } from 'react';
import apiCalls from '../../apiCalls.js';
import Drink from '../Drink/Drink.js';
import Form from '../Form/Form.js';
import emotions from '../../emotionData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
     cocktails: [],
     drink: '',
     favorites: []
    }
  }

  componentDidMount = () => {
     apiCalls.getCocktails()
     .then(data => {

       this.setState({ cocktails: data.drinks })
     })
     .catch((error) => {
       this.setState({ error: error })
     })
  }

  getDrink = (myMood) => {
    this.setState({error: ''})
    if(!myMood){
      return this.setState({error: 'Choose valid emotion'})
    }
    const emo = emotions.find(emotion => emotion.name === myMood)
    const yourDrink = this.state.cocktails.find(drink => parseInt(drink.idDrink) === emo.id)
    this.setState({drink: yourDrink})
  }

  favoriteDrink = (id) => {
    const yourDrink = this.state.cocktails.find(drink => parseInt(drink.idDrink) === id)
    this.setState({favorites: [...this.state.favorites, yourDrink]})
  }

  render() {
    return (
      <main className="App">
      <h1>Mixed Drinks About Feelings</h1>
      <Form getDrink={this.getDrink}/>
      {this.state.cocktails.length < 1 && <p className='load'> Loading... </p>}
      {this.state.error && <p className='errorMess'>{this.state.error}</p>}
      {!this.state.error && <Drink drink={this.state.drink} favoriteDrink={this.favoriteDrink}/>}
      </main>
    );
  }
}

export default App;
