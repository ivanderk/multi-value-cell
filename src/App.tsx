import React from 'react';
import logo from './logo.svg';
import './App.css';
import MultiValues from './components/MultiValues'
import Counter from './components/Counter'

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter></Counter>
      <MultiValues></MultiValues>
     
    </div>
  );
}

export default App;
