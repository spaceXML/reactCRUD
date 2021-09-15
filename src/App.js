import React, { useState } from 'react';
import "./App.css";
import Bottom from './components/Bottom';
import Top from './components/Top';

const App = () => {
  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number+1);
  }

  return (
    <div className='container'>
      <h1> 최상단 화면!</h1>
      <Top number={number}/>
      <Bottom />
    </div>
  );
};

export default App;