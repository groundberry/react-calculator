import React, { Component } from 'react';
import CalculatorScreen from './CalculatorScreen';
import Button from './Button';
import { clickNumber, clickAllClear, clickClearEntry, clickSum } from './actions';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleClickAllClear = this.handleClickAllClear.bind(this);
    this.handleClickClearEntry = this.handleClickClearEntry.bind(this);
    this.handleClickSum = this.handleClickSum.bind(this);

    this.state = {
      entry: '0',
    };
  }

  handleNumberClick(number) {
    this.setState(clickNumber.bind(null, number));
  }

  handleClickAllClear(key) {
    this.setState(clickAllClear.bind(null, key));
  }

  handleClickClearEntry(key) {
    this.setState(clickClearEntry.bind(null, key));
  }

  handleClickSum() {
    this.setState(clickSum);
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator-container">
          <CalculatorScreen value={this.state.entry} />
          <Button value="AC" onClick={this.handleClickAllClear} />
          <Button value="CE" onClick={this.handleClickClearEntry} />
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
            onClick={this.handleClickSum}
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
