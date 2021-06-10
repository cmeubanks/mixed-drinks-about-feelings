import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
        value: 'mood'
    }
  }

  render() {
    return (
      <form>
        <label>
          How are you feeling today:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </form>
    )
  }
}

export default Form;
