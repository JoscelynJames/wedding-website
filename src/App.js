import React, { Component } from 'react';
import './App.css';
//components
import Hero from './Components/Hero/Hero';
import AboutThem from './Components/AboutThem/AboutThem';
import Divider from './Components/Divider/Divider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Divider />
        <Hero />
        <AboutThem />
      </div>
    );
  }
}

export default App;
