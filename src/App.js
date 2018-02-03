import React, { Component } from 'react';
import './App.css';
//components
import Divider from './Components/Divider/Divider';
import Hero from './Components/Hero/Hero';
import AboutThem from './Components/AboutThem/AboutThem';
import Countdown from './Components/Countdown/Countdown';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Divider />
        <Hero />
        <AboutThem />
        <Countdown />
        <Footer />
      </div>
    );
  }
}

export default App;
