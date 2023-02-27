import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Movies() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('');
    const movieData = await response.json()
    setItems(movieData.data)
  }

  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {items.map((el) => (
          <p key={el.id}>
          <Link to={`/movies/${el.id}`}>{el.name}</Link> 
          </p>
        ))}
      </div>
    </div>
  )
}

export default Movies
