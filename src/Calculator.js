import React, { Component } from 'react';
import CalculatorScreen from './CalculatorScreen';
import Button from './Button';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();

    this.handleNumberClick = this.handleNumberClick.bind(this);

    this.state = {
      buffer: 0
    }
  }

  render() {
    return(
      <div className="Calculator">
        <div className="Calculator-container">
          <CalculatorScreen value={this.state.buffer} />
          <Button value="AC" onClick={this.handleNumberClick} />
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
            value="+"
            onClick={this.handleNumberClick}
            className='Button-big'
          />
          <Button value="0" onClick={this.handleNumberClick} />
          <Button value="." onClick={this.handleNumberClick} />
          <Button value="=" onClick={this.handleNumberClick} />
        </div>
      </div>
    )
  }

  handleNumberClick(number) {
    this.setState((prevState) => ({
      buffer: prevState.buffer + number
    }))
  }
}

export default Calculator;
