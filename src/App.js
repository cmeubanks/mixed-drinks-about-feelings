import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
     cocktails: []
  }
}

  componentDidMount = () => {

  }

  render() {
    return (
      <main className="App">
        <Cocktails cocktails={this.state.cocktails}/>
      </main>
    );
  }
}

export default App;
