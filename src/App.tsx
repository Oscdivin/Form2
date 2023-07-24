import React from 'react';
import logo from './logo.svg';
import './App.css';
import { mainRouter } from './routes/mainRouter';
import { RouterProvider } from"react-router-dom"

function App() {
  return (
  <div>
    <RouterProvider router ={mainRouter}/>
    </div>
  );
}

export default App;
