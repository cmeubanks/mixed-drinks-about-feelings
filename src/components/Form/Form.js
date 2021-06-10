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
      </form>
    )
  }
}

export default Form;
