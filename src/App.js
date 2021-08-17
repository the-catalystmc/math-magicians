import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Calculator />
        <Quote />
      </div>
    );
  }
}

export default App;
