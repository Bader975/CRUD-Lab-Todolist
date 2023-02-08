import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Add from './components/Add'
import Show from './components/Show'
import Update from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes>
<Route path ='/' element={<Add/>}/> 
<Route path ='/show' element={<Show/>}/> 
<Route path ='/update' element={<Update/>}/> 

      </Routes>
    </div>
  )
}

export default App
