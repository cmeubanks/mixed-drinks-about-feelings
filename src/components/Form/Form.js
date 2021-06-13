import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
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
  }

  render() {
    const dropDown = emotions.map(emotion => {
      return(
        <option key={emotion.id} id={emotion.id} value={emotion.name}>{emotion.name}</option>
      )
    })
    return (
    <div className='form-container'>
      <form>
        <label className='label'>
          How are you <span>feeling today:</span>
          <select className='select' value={this.state.value} onChange={this.handleChange}>
            {dropDown}
          </select>
        </label>
      </form>
      <button className='drinkBtn' onClick={event => this.submitMood(event)}>Get Drink</button>
    </div>
    )
  }
}

export default Form;

Form.propTypes = {
  getDrink: PropTypes.func.isRequired
}
