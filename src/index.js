import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './store/player-context';
import { GameContextProvider } from './store/game-context';
import App from './App';


ReactDOM.render(
 
  <ContextProvider>
  <GameContextProvider>
    <App />
    </GameContextProvider>
  </ContextProvider>
 ,
  document.getElementById('root')
);


