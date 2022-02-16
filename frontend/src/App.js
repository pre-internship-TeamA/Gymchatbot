import './App.css';
import React from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom'
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Device from './pages/Device';
import Result from './pages/Result';
import Details from './pages/Details';
import Explain from './pages/Explain';


  function App(){
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header></Header>
        <div className='main-content'>
          <Sidenav /*getCondition={getCondition} */></Sidenav>
          <div className="main">
            <>
            <Routes>
              <Route path='/device' element={<Device/>} />
              <Route path='/result' element={<Result/>} />
              <Route path='/detail' element={<Details/>} />
              <Route path='/explain' element={<Explain/>} />
            </Routes>
            </>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
