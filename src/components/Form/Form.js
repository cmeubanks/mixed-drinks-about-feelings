import React, { Component } from 'react';
import emotions from '../../emotionData.js';

class Form extends Component {
  constructor() {
    super();
    this.state = {
        mood: ''
    }
  }

  handleChange = (event) => {
    this.setState({mood: event.target.value});
  }

  submitMood = (event) => {
    event.preventDefault();
    const myMood = this.state.mood
    this.props.getDrink(myMood)
    this.clearInput();
  }

  clearInput = () => {
    this.setState({mood: ''})
  }

  render() {
    const dropDown = emotions.map(emotion => {
      return(
        <option key={emotion.id} id={emotion.id} value={emotion.name}>{emotion.name}</option>
      )
    })
    return (
      <form>
        <label className='label'>
          How are you feeling today:
          <select className='select' value={this.state.value} onChange={this.handleChange}>
            {dropDown}
          </select>
        </label>
        <button className='drinkBtn' onClick={event => this.submitMood(event)}>Get Drink</button>
      </form>
    )
  }
}

export default Form;
