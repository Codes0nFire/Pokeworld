import { useState } from 'react'
import Home from './components/Home'
import Loading from './components/Loading'
import Details from './components/Details'


import { Route, Routes } from 'react-router-dom'



function App() {

  


  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detail/:name' element={<Details/>} />
    </Routes>
   
  
    
    
  )
}

export default App
