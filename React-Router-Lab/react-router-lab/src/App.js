import './App.css';
import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/Homepage'
import MainBlog from './components/MainBlog'
import AboutPage from './components/AboutPage'
import FavoriteMovie from './components/FavoriteMovie'
import FavoriteFood from './components/FavoriteFood'
export default class App extends Component {
  render (){
    return(
    <div>
      <Router>
      <nav>
        <Link to="/">HomePage </Link>
        
        <Link to="/MainBlog">MainBlog </Link>
        
        <Link to="/AboutPage">AboutPage </Link>
        
        <Link to="/FavoriteMovie">FavoriteMovie </Link>
        
        <Link to="/FavoriteFood">FavoriteFood</Link>
      </nav>
     
      <Routes>
      <Route path='/' element= {<HomePage />}></Route>
      <Route path='/MainBlog' element= {<MainBlog />}></Route>
      <Route path='/AboutPage' element= {<AboutPage />}></Route>
      <Route path='/FavoriteMovie' element= {<FavoriteMovie />}></Route>
      <Route path='/FavoriteFood' element= {<FavoriteFood />}></Route>
      </Routes>
      </Router>
    </div>
     )
  }
}
