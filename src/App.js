import './App.css';
import React, { Component } from 'react';
import apiCalls from './apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
     cocktails: []
  }
}

  componentDidMount = () => {
     console.log(apiCalls.getCocktails())
  }

  render() {
    return (
      <main className="App">

      </main>
    );
  }
}

export default App;
