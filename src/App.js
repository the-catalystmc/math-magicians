import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Calculator />
      </div>
    );
  }
}

export default App;
