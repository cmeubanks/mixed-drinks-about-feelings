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
    this.setState({error: ''})
    if(!myMood){
      return this.setState({error: 'Choose valid emotion'})
    }
    const emo = emotions.find(emotion => emotion.name === myMood)
    const yourDrink = this.state.cocktails.find(drink => parseInt(drink.idDrink) === emo.id)
    this.setState({drink: yourDrink})
  }

  render() {
    return (
      <main className="App">
      <h1>Mixed Drinks About Feelings</h1>
      <Form getDrink={this.getDrink}/>
      {this.state.cocktails.length < 1 && <p className='load'> Loading... </p>}
      {this.state.error && <p className='errorMess'>{this.state.error}</p>}
      {!this.state.error && <Cocktails drink={this.state.drink} />}
      </main>
    );
  }
}

export default App;
