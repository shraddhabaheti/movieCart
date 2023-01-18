import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import SingleMovie from './SingleMovie'
import './App.css'
const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies/:id" element={<SingleMovie />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
    
    </div>
  )
}

export default App
