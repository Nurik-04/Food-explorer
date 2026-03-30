import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='footer' element={<Footer/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
