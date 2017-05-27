import React, { Component } from 'react';
import './CalculatorScreen.css';

class CalculatorScreen extends Component {
  render() {
    return(
      <div className="CalculatorScreen">
        {this.props.value}
      </div>
    )
  }
}

export default CalculatorScreen;
