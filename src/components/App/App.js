import './App.css';
import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';
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
      return this.setState({drink:'', error: 'Choose valid emotion'})
    }
    const emo = emotions.find(emotion => emotion.name === myMood)
    const yourDrink = this.state.cocktails.find(drink => parseInt(drink.idDrink) === emo.id)
    this.setState({ drink: yourDrink })
  }

  favoriteDrink = (id) => {
    const yourDrink = this.state.cocktails.find(drink => drink.idDrink === id)
    if(this.state.favorites.includes(yourDrink)){
      return
    } else {
      return this.setState({favorites: [...this.state.favorites, yourDrink]})
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className='title'>
            <h1>Mixed Drinks About Feelings</h1>
            <img src='./heart.png' alt='heart'/>
          </div>
          <NavLink to='/' className='nav homebtn'>Home</NavLink>
          <NavLink to='/favorites' className='nav favbtn'>Favorites</NavLink>
        </header>
        <main className='main-css'>
          <Switch>
            <Route exact path="/" render={() => {
              return (
              <div className='question-display'>
                <Form getDrink={this.getDrink}/>
                {this.state.cocktails.length < 1 && <p className='load'> Loading... </p>}
                {this.state.error && <p className='errorMess'>{this.state.error}</p>}
                {this.state.drink && <Drink drink={this.state.drink} favoriteDrink={this.favoriteDrink}/>}
              </div>
              )
            }} />
            <Route path="/favorites" render={() => <FavDrinks favDrinks={this.state.favorites} favoriteDrink={this.favoriteDrink}/>} />
            <Redirect to='/' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
