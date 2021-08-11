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
            <div className="Button Normal">AC</div>
            <div className="Button Normal">+/-</div>
            <div className="Button Normal">%</div>
            <div className="Button End">÷</div>
            <div className="Button Normal">7</div>
            <div className="Button Normal">8</div>
            <div className="Button Normal">9</div>
            <div className="Button End">x</div>
            <div className="Button Normal">4</div>
            <div className="Button Normal">5</div>
            <div className="Button Normal">6</div>
            <div className="Button End">-</div>
            <div className="Button Normal">1</div>
            <div className="Button Normal">2</div>
            <div className="Button Normal">3</div>
            <div className="Button End">+</div>
            <div className="Button Normal Zero">0</div>
            <div className="Button Normal">.</div>
            <div className="Button End">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
