import React from 'react';
import Header from './components/Header.js';
import SolarSystem from './components/SolarSystem.js';
import './App.css';
import Missions from './components/Missions.js';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
