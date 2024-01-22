import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Section from './components/Section';
import ChargerHeader from './components/Header/index';
import ChargerBody from './pages/ChargerBody';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home /> */}
      <ChargerBody />
      {/* <ChargerHeader/> */}
    </div>
  );
}

export default App;
