import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import ProtectedRoute from './routes'
import { Home, Movies, NotFound } from './pages'
import { ShowItem } from "./components"
import './App.css'

function App() {
  return (
    // <AuthProvider>
    <Routes >
      <Route path="/" element={<Home />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<ShowItem />} ></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
    // </AuthProvider>
  )
}

export default App
