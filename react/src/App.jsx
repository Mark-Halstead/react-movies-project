import react from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies/:id" element={<Movie />}></Route>
    </Routes>
  )
}

export default App
