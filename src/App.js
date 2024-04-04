// app.js
import React from 'react';
import Calculator from './kalkulator';
import Game from './game';
import './kalkulator.css'

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <Calculator />
      <h1>Tic Tac Toe Game</h1>
      <Game />
    </div>
  );
}


export default App;
