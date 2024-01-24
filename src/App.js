import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/FronHeader/Home';
import Section from './components/FronHeader/Section';
import ChargerHeader from './components/Header/index';
import ChargerBody from './pages/ChargerBody';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='app-container'>

      <div className="App">
        {/* <Header />
      <Home /> */}
        {/* <ChargerBody /> */}
        <Cart />
        {/* <ChargerHeader/> */}
      </div>
    </div>

  );
}

export default App;
