import React from 'react'
import NavBar from './Component/NavBar';
import {Routes, Route} from "react-router-dom"
import HomePage from './Component/HomePage'

import {useRef } from 'react'
import "./App.css"
function App() {

  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />  
        </Routes>
    </>
  );
}

export default App;
