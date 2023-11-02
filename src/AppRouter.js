import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebcamCapture from './webcam/webcam'
import Login from './components/login'
import Dashboard from './components/dashboard'
import Home from './components/home'


function AppRouter() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default AppRouter