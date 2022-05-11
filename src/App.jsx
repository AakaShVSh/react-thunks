import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/dashboard'
import { Login } from './components/login'
import { Register } from './components/register'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default App
