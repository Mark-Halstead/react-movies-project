import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { AuthProvider } from './contexts'
import ProtectedRoute from './routes'
import Home from './pages/Home'
// import Movies from './pages/Movies'
import './App.css'

function App() {
  return (
    // <AuthProvider>
        <Routes>
            <Route path="/" element={<ProtectedRoute redirectTo="/" />}>
                <Route index element={<Home />}></Route>
            </Route>
            {/* <Route path="/movies:id" element={<Movies />}></Route> */}
            <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
        // </AuthProvider>
  )
}

export default App
