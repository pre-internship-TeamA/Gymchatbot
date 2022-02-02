import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Device from './components/Device';
import Result from './components/Result';


function App() {

  const [condition, setCondition] = useState(true)
  const getCondition = (text) => {
    setCondition(text);
  }

  useEffect( ()=> {
    console.log(condition)
  },[condition])

  const renderCondition = condition ? <Device></Device> : <Result></Result>

  return (
    <div className="App">
      
      <Header></Header>
      <div className='main-content'>
        <Sidenav getCondition={getCondition}></Sidenav>
        <div className="main">
          {renderCondition}
        </div>
      </div>
    </div>
  );
}

export default App;
