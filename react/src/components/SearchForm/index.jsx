import React, { useState } from 'react'

const SearchForm = () => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>Search Movies</h2>
      <input
        type='text'
        className='form-input'
        value={input} 
        onChange={handleChange} 
      />
      <input type="submit"></input>
    </form>
  )
}

export default SearchForm
