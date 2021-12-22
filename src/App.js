import React from 'react';
import Header from './components/Header.js';
import SolarSystem from './components/SolarSystem.js';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem />
      </section>
    );
  }
}

export default App;