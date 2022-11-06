import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
<>
        <Router>
          <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/About">About</Link>&nbsp;
          </nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </Router>
      </>
  );
}

export default App;
