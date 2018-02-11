import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
//components
import HomePage from './Components/HomePage';
import Rsvp from './Components/Rsvp/Rsvp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' exact component={HomePage} />
        <Route path='/rsvp' exact component={Rsvp} />
      </div>
    );
  }
}

export default App;
