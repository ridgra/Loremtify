import dotenv from 'dotenv';
import React from 'react';
import './App.css';
import Main from './components/Main';

dotenv.config();

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;
