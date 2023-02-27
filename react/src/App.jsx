import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import ProtectedRoute from './routes'
import { Home, Movies, NotFound } from './pages'
import './App.css'

function App() {
  return (
    // <AuthProvider>
    <Routes >
      <Route path="/" element={<Home />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
    // </AuthProvider>
  )
}

export default App
