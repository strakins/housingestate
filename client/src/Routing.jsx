// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import PrivateRoute from './components/PrivateRoute'

const Routing = () => {
  return (
    
    <Routes>
        <Route path='/' element={ < Home /> } />
        <Route path='/about' element={ < About /> } />
        <Route path='/login' element={ < SignIn /> } />
        <Route path='/signup' element={ < SignUp /> } />
        <Route element={ <PrivateRoute/> } >
          <Route path='/profile' element={ < Profile /> } />

        </Route>
    </Routes>
   
  )
}

export default Routing