import './App.css';
import { useState, useEffect } from 'react';
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


function App() {

  // const [condition, setCondition] = useState(true)
  // const getCondition = (text) => {
  //   setCondition(text);
  // }

  // useEffect( ()=> {
  //   console.log(condition)
  // },[condition])

  // const renderCondition = condition ? <Device></Device> : <Result></Result>

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
            </Routes>
            {/* {renderCondition} */}
            </>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
