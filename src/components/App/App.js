import './App.css';
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import apiCalls from '../../apiCalls.js';
import emotions from '../../emotionData.js';
import Drink from '../Drink/Drink.js';
import Form from '../Form/Form.js';
import FavDrinks from '../FavDrinks/FavDrinks.js';

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
    const yourDrink = this.state.cocktails.find(drink => drink.idDrink === id)
    this.setState({favorites: [...this.state.favorites, yourDrink]})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Mixed Drinks About Feelings</h1>
          <NavLink to='/' className='nav'>Home</NavLink>
          <NavLink to='/favorites' className='nav'>Favorites</NavLink>
        </header>
        <main>
          <Form getDrink={this.getDrink}/>
          {this.state.cocktails.length < 1 && <p className='load'> Loading... </p>}
          {this.state.error && <p className='errorMess'>{this.state.error}</p>}
          {this.state.drink && <Drink drink={this.state.drink} favoriteDrink={this.favoriteDrink}/>}
          <Route path="/favorites" render={() => <FavDrinks favDrinks={this.state.favorites} favoriteDrink={this.favoriteDrink}/>} />
        </main>
      </div>
    );
  }
}

export default App;
