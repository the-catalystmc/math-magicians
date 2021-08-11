import '../scss/style.scss';
import React from 'react';

class Calculator extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Container">
          <div className="Display">0</div>
          <div className="Button-Container">
            <button type="button" className="Button Normal">AC</button>
            <button type="button" className="Button Normal">+/-</button>
            <button type="button" className="Button Normal">%</button>
            <button type="button" className="Button End">÷</button>
            <button type="button" className="Button Normal">7</button>
            <button type="button" className="Button Normal">8</button>
            <button type="button" className="Button Normal">9</button>
            <button type="button" className="Button End">x</button>
            <button type="button" className="Button Normal">4</button>
            <button type="button" className="Button Normal">5</button>
            <button type="button" className="Button Normal">6</button>
            <button type="button" className="Button End">-</button>
            <button type="button" className="Button Normal">1</button>
            <button type="button" className="Button Normal">2</button>
            <button type="button" className="Button Normal">3</button>
            <button type="button" className="Button End">+</button>
            <button type="button" className="Button Normal Zero">0</button>
            <button type="button" className="Button Normal">.</button>
            <button type="button" className="Button End">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
