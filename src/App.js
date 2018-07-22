import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './Components/HomePage';
import Rsvp from './Components/Rsvp/Rsvp';
import DataView from './Components/DataView/DataView';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Route path='/' exact component={HomePage} />
          <Route path='/rsvp' exact component={Rsvp} />
          <Route path='/penguins' exact component={DataView} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
