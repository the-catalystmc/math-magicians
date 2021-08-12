import '../scss/style.scss';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      calcObj: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.newCalculatorResult(e.target.name);
  }

  newCalculatorResult = (button) => {
    const { calcObj } = this.state;
    const results = calculate(calcObj, button);
    this.setState({
      calcObj: this.stateUpdate(results),
    });
  }

  stateUpdate = ({ total, next, operation }) => {
    const { calcObj } = this.state;
    if (total || total === null) {
      calcObj.total = total;
    }
    if (next || next === null) {
      calcObj.next = next;
    }
    if (operation || operation === null) {
      calcObj.operation = operation;
    }
    return calcObj;
  }

  render() {
    const { calcObj } = this.state;

    let displayScreen = '0';

    if (Object.keys(calcObj).length === 0 || (calcObj.total === null
      && calcObj.total === null && calcObj.next === null && calcObj.operation === null)) {
      displayScreen = 0;
    } else {
      displayScreen = calcObj.next !== null ? calcObj.next : calcObj.total;
    }

    return (
      <div className="Calculator">
        <div className="Container">
          <div className="Display">{ displayScreen }</div>
          <div className="Button-Container">
            <button onClick={this.handleClick} name="AC" type="button" className="Button Normal">AC</button>
            <button onClick={this.handleClick} name="+/-" type="button" className="Button Normal">+/-</button>
            <button onClick={this.handleClick} name="%" type="button" className="Button Normal">%</button>
            <button onClick={this.handleClick} name="÷" type="button" className="Button End">÷</button>
            <button onClick={this.handleClick} name="7" type="button" className="Button Normal">7</button>
            <button onClick={this.handleClick} name="8" type="button" className="Button Normal">8</button>
            <button onClick={this.handleClick} name="9" type="button" className="Button Normal">9</button>
            <button onClick={this.handleClick} name="x" type="button" className="Button End">x</button>
            <button onClick={this.handleClick} name="4" type="button" className="Button Normal">4</button>
            <button onClick={this.handleClick} name="5" type="button" className="Button Normal">5</button>
            <button onClick={this.handleClick} name="6" type="button" className="Button Normal">6</button>
            <button onClick={this.handleClick} name="-" type="button" className="Button End">-</button>
            <button onClick={this.handleClick} name="1" type="button" className="Button Normal">1</button>
            <button onClick={this.handleClick} name="2" type="button" className="Button Normal">2</button>
            <button onClick={this.handleClick} name="3" type="button" className="Button Normal">3</button>
            <button onClick={this.handleClick} name="+" type="button" className="Button End">+</button>
            <button onClick={this.handleClick} name="0" type="button" className="Button Normal Zero">0</button>
            <button onClick={this.handleClick} name="." type="button" className="Button Normal">.</button>
            <button onClick={this.handleClick} name="=" type="button" className="Button End">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
