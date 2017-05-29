import React, { Component } from 'react';
import CalculatorScreen from './CalculatorScreen';
import Button from './Button';
import { clickNumber, clickAllClear, clickClearEntry, clickSum } from './actions';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();

    this.handleClickNumber = this.handleClickNumber.bind(this);
    this.handleClickAllClear = this.handleClickAllClear.bind(this);
    this.handleClickClearEntry = this.handleClickClearEntry.bind(this);
    this.handleClickSum = this.handleClickSum.bind(this);

    this.state = {
      entry: '0',
    };
  }

  handleClickNumber(number) {
    this.setState(clickNumber.bind(null, number));
  }

  handleClickAllClear() {
    this.setState(clickAllClear);
  }

  handleClickClearEntry() {
    this.setState(clickClearEntry);
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
          <Button value="%" onClick={this.handleClickNumber} />
          <Button value="/" onClick={this.handleClickNumber} />
          <Button value="7" onClick={this.handleClickNumber} />
          <Button value="8" onClick={this.handleClickNumber} />
          <Button value="9" onClick={this.handleClickNumber} />
          <Button value="x" onClick={this.handleClickNumber} />
          <Button value="4" onClick={this.handleClickNumber} />
          <Button value="5" onClick={this.handleClickNumber} />
          <Button value="6" onClick={this.handleClickNumber} />
          <Button value="-" onClick={this.handleClickNumber} />
          <Button value="1" onClick={this.handleClickNumber} />
          <Button value="2" onClick={this.handleClickNumber} />
          <Button value="3" onClick={this.handleClickNumber} />
          <Button
            className="Button-big"
            value="+"
            onClick={this.handleClickSum}
          />
          <Button value="0" onClick={this.handleClickNumber} />
          <Button value="." onClick={this.handleClickNumber} />
          <Button value="=" onClick={this.handleClickNumber} />
        </div>
      </div>
    );
  }
}

export default Calculator;
