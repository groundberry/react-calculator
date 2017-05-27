import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return(
      <button className={`Button ${this.props.className}`} onClick={this.handleClick}>
        {this.props.value}
      </button>
    )
  }

  handleClick() {
    this.props.onClick(this.props.value);
  }
}

export default Button;
