import react from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './routes'
import Home from './pages/Home'
import Movies from './pages/Movies'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies/:id" element={<Movies />}></Route>
    </Routes>
  )
}

export default App
