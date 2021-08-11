import '../scss/style.scss';
import React from 'react';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      total: 0,
    };
    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal() {
    this.setState(
      { total: 5 },
    );
  }

  render() {
    const { total } = this.state;
    return (
      <div className="Calculator">
        <div className="Container">
          <div className="Display">{ total }</div>
          <div className="Button-Container">
            <button onClick={this.updateTotal} name="AC" type="button" className="Button Normal">AC</button>
            <button name="+/-" type="button" className="Button Normal">+/-</button>
            <button name="%" type="button" className="Button Normal">%</button>
            <button name="÷" type="button" className="Button End">÷</button>
            <button name="7" type="button" className="Button Normal">7</button>
            <button name="8" type="button" className="Button Normal">8</button>
            <button name="9" type="button" className="Button Normal">9</button>
            <button name="x" type="button" className="Button End">x</button>
            <button name="4" type="button" className="Button Normal">4</button>
            <button name="5" type="button" className="Button Normal">5</button>
            <button name="6" type="button" className="Button Normal">6</button>
            <button name="-" type="button" className="Button End">-</button>
            <button name="1" type="button" className="Button Normal">1</button>
            <button name="2" type="button" className="Button Normal">2</button>
            <button name="3" type="button" className="Button Normal">3</button>
            <button name="+" type="button" className="Button End">+</button>
            <button name="0" type="button" className="Button Normal Zero">0</button>
            <button name="." type="button" className="Button Normal">.</button>
            <button name="=" type="button" className="Button End">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
