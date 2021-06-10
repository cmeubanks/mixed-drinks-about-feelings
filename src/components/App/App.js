import './App.css';
import React, { Component } from 'react';
import apiCalls from '../../apiCalls.js';
import Cocktails from '../Cocktails/Cocktails.js';
import Form from '../Form/Form.js';
import emotions from '../../emotionData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
     cocktails: [],
     drink: ''
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
    const emo = emotions.find(emotion => emotion.name === myMood)
    const yourDrink = this.state.cocktails.find(drink => parseInt(drink.idDrink) === emo.id)
    console.log(yourDrink)
  }

  render() {
    return (
      <main className="App">
      {this.state.cocktails.length < 1 && <p> Loading... </p>}
      <h1>Mixed Drinks About Feelings</h1>
      <Form getDrink={this.getDrink}/>
      <Cocktails cocktails={this.state.cocktails} />
      </main>
    );
  }
}

export default App;
