import React from 'react';
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
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
      <Router>
        <Switch>
          <div className="App">
            <Header />
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
