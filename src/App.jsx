import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage  from './pages/LandingPage';
import  DashboardPage  from './pages/DashboardPage';
import  SignupPage  from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import  LoginPage  from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/signup' element = {<SignupPage/>}/>
        <Route path='/home' element={<DashboardPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  )
}

export default App