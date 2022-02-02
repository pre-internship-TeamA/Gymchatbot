import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Device from './components/Device';

function App() {

  return (
    <div className="App">
      
      <Header></Header>
      <div className='main-content'>
        <Sidenav></Sidenav>
        <div className="main">
          <Device></Device>
        </div>
      </div>
    </div>
  );
}

export default App;
