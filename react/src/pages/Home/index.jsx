import React from 'react'
import SearchForm from '../../components/SearchForm'
import Movies from '../../components/Movies'

const Home = () => {
  return (
    <main>
    <h1>Shows API</h1>
        <SearchForm />
        <Movies />
    </main>
  )
}

export default Home
