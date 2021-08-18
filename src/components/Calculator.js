/* eslint-disable no-unused-vars */
import '../scss/style.scss';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

const Calculator = () => {
  const [state, setState] = useState({});

  let displayScreen = '0';

  const handleClick = (e) => {
    if (
      !(
        state.operation
        && (e.target.name === '+'
          || e.target.name === '-'
          || e.target.name === 'x'
          || e.target.name === '÷'
          || e.target.name === '%')
      )
    ) {
      const calcObj = calculate(state, e.target.name);
      setState(calcObj);
    }
  };

  if (Object.keys(state).length === 0 || (state.total === null
    && state.total === null && state.next === null && state.operation === null)) {
    displayScreen = 0;
  } else {
    displayScreen = state.next !== null ? state.next : state.total;
  }

  return (
    <div className="Calculator">
      <div className="Calculator-Title">
        <h2>Let&#39;s do some math!</h2>
      </div>
      <div className="Calc-Half">
        <div className="Container">
          <div className="Display">{displayScreen}</div>
          <div className="Button-Container">
            <button onClick={handleClick} name="AC" type="button" className="Button Normal">AC</button>
            <button onClick={handleClick} name="+/-" type="button" className="Button Normal">+/-</button>
            <button onClick={handleClick} name="%" type="button" className="Button Normal">%</button>
            <button onClick={handleClick} name="÷" type="button" className="Button End">÷</button>
            <button onClick={handleClick} name="7" type="button" className="Button Normal">7</button>
            <button onClick={handleClick} name="8" type="button" className="Button Normal">8</button>
            <button onClick={handleClick} name="9" type="button" className="Button Normal">9</button>
            <button onClick={handleClick} name="x" type="button" className="Button End">x</button>
            <button onClick={handleClick} name="4" type="button" className="Button Normal">4</button>
            <button onClick={handleClick} name="5" type="button" className="Button Normal">5</button>
            <button onClick={handleClick} name="6" type="button" className="Button Normal">6</button>
            <button onClick={handleClick} name="-" type="button" className="Button End">-</button>
            <button onClick={handleClick} name="1" type="button" className="Button Normal">1</button>
            <button onClick={handleClick} name="2" type="button" className="Button Normal">2</button>
            <button onClick={handleClick} name="3" type="button" className="Button Normal">3</button>
            <button onClick={handleClick} name="+" type="button" className="Button End">+</button>
            <button onClick={handleClick} name="0" type="button" className="Button Normal Zero">0</button>
            <button onClick={handleClick} name="." type="button" className="Button Normal">.</button>
            <button onClick={handleClick} name="=" type="button" className="Button End">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
