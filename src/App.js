import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';
import Support from './views/Support';
import About from './views/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Route exact path="/" component={Home}></Route>
            <Route path="/Product" component={Product}></Route>
            <Route path="/Support" component={Support}></Route>
            <Route path="/About" component={About}></Route>
        </Router> 
      </div>
    );
  }
}

export default App;
