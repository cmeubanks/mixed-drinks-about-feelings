import './App.css';
import React, { Component } from 'react';
import apiCalls from './apiCalls.js';
import Cocktails from './components/Cocktails/Cocktails.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
     cocktails: []
  }
}

  componentDidMount = () => {
     apiCalls.getCocktails()
     .then(data => {
       console.log(data.drinks)
       this.setState({ cocktails: data.drinks })
     })
     .catch((error) => {
       this.setState({ error: error })
     })
  }

  render() {
    return (
      <main className="App">
      {this.state.cocktails === [] && <p> Loading... </p>}
      <Cocktails cocktails={this.state.cocktails} />
      </main>
    );
  }
}

export default App;
