import React, { Component } from 'react';
import CalculatorScreen from './CalculatorScreen';
import Button from './Button';
import { clickNumber, clickAllClear } from './actions';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);

    this.state = {
      buffer: '0',
    };
  }

  handleNumberClick(number) {
    this.setState(clickNumber.bind(null, number));
  }

  handleClearClick(key) {
    this.setState(clickAllClear.bind(null, key));
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator-container">
          <CalculatorScreen value={this.state.buffer} />
          <Button value="AC" onClick={this.handleClearClick} />
          <Button value="CE" onClick={this.handleNumberClick} />
          <Button value="%" onClick={this.handleNumberClick} />
          <Button value="/" onClick={this.handleNumberClick} />
          <Button value="7" onClick={this.handleNumberClick} />
          <Button value="8" onClick={this.handleNumberClick} />
          <Button value="9" onClick={this.handleNumberClick} />
          <Button value="x" onClick={this.handleNumberClick} />
          <Button value="4" onClick={this.handleNumberClick} />
          <Button value="5" onClick={this.handleNumberClick} />
          <Button value="6" onClick={this.handleNumberClick} />
          <Button value="-" onClick={this.handleNumberClick} />
          <Button value="1" onClick={this.handleNumberClick} />
          <Button value="2" onClick={this.handleNumberClick} />
          <Button value="3" onClick={this.handleNumberClick} />
          <Button
            className="Button-big"
            value="+"
            onClick={this.handleNumberClick}
          />
          <Button value="0" onClick={this.handleNumberClick} />
          <Button value="." onClick={this.handleNumberClick} />
          <Button value="=" onClick={this.handleNumberClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
