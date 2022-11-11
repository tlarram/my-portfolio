import React from 'react'
import NavBar from './Component/NavBar';
import {Routes, Route} from "react-router-dom"
import HomePage from './Component/HomePage'
import Resume from './Component/Resume'
import {useRef } from 'react'
import "./App.css"
function App() {

  return (
    <>
    <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />  
        </Routes>
    </>
  );
}

export default App;
