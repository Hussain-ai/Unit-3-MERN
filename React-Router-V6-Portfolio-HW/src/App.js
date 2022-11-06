import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Signup from './components/Signup/Signup'
import Skills from './components/Skills/Skills'
import "bootstrap/dist/css/bootstrap.min.css"
import Auth from './components/Auth/Auth'
import LoginForm from './components/LoginForm';

function App() {
//   const adminUser = {
//     email: 'admin@admin.com',
//     password: 'admin123'
//   }

//   const [user, setUser]= useState ({name: '', email: ''})
//   const [error, setError]= useState('')

// const Login = details => {
//   console.log(details)
// }

// const Logout = ()=>{
//   console.log('Logout')
// }

  return (
<>


    {/* <div>
    {(user.email !='') ? (
  <div>
  <h2>Welcome, <span>{user.name}</span></h2>
  <button>Logout</button>
  </div>
    ) : (
      <LoginForm Login={Login} error={error}/>
    )
    )}
    </div> */}




        <Router>
          <nav>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/About">About</Link>&nbsp;
            <Link to="/Contact">Contact Me</Link>&nbsp;
            <Link to="/Profile">Profile</Link>&nbsp;
            <Link to="/Skills">Skills</Link>&nbsp;
          </nav>
          <nav className='nav-2'>
            <Link to="/Signup">Signup</Link>&nbsp;
            <Link to="/Login">Login</Link>&nbsp;
            <Link to="/Auth">Contact</Link>&nbsp;
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
