import React, { Component } from 'react';
import './App.css';
import HeroHome from './components/homepage/hero'

// cors herouku https://cors-anywhere.herokuapp.com/

class App extends Component {
  render() {
    return (
      <div>
        <HeroHome />
      </div>
    );
  }
}

export default App;
