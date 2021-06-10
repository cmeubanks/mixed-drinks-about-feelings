import React, { Component } from 'react';
import emotions from '../../emotionData.js'

class Form extends Component {
  constructor() {
    super();
    this.state = {
        value: 'mood'
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  submitMood = (event) => {
    const myMood = this.state.value
    this.props.getDrink(myMood)
  }

  render() {
    const dropDown = emotions.map(emotion => {
      return(
        <option key={emotion.id} id={emotion.id} value={emotion.name}>{emotion.name}</option>
      )
    })
    return (
      <form>
        <label>
          How are you feeling today:
          <select value={this.state.value} onChange={this.handleChange}>
            {dropDown}
          </select>
        </label>
        <button onClick={event => this.submitMood}>Get Drink</button>
      </form>
    )
  }
}

export default Form;
