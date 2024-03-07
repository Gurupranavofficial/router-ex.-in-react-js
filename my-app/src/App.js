import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar/> {Navbar}
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/Contact" element = {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
