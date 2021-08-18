import React from 'react';
import {
  Route, BrowserRouter as Router, Switch, Link, Redirect,
} from 'react-router-dom';
// import Header from './components/Header';
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
      <Router>
        <Switch>
          <div className="App">
            <div className="Header-Container">
              <h1>Math Magicians</h1>
              <nav>
                <ul className="Nav-Items">
                  <li className="Nav-Item"><Link to="/home">Home</Link></li>
                  <span className="Nav-Item">|</span>
                  <li className="Nav-Item"><Link to="/calculator">Calculator</Link></li>
                  <span className="Nav-Item">|</span>
                  <li className="Nav-Item"><Link to="/quote">Quote</Link></li>
                </ul>
              </nav>
            </div>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact component={Home} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/quote" component={Quote} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
