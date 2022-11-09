import './App.css';
import NavBar from './components/NavBar.jsx/NavBar'
import HomePage from './components/HomePage.jsx/HomePage'
import EditPage from './components/EditPage.jsx/EditPage'
import ProfilePage from './components/ProfilePage.jsx/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/edit/:userId' element={<EditPage />} />
          <Route path='/profile/:userId' element={<ProfilePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}