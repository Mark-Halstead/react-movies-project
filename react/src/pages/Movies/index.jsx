import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Movies() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [shows, setShows] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('https://api.tvmaze.com/shows');
    const movieData = await response.json()
    setShows(movieData.data)
  }

  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {shows.map((show) => (
          <p key={show.id}>
          <Link to={`/movies/${el.id}`}>{el.name}</Link> 
          </p>
        ))}
      </div>
    </div>
  )
}

export default Movies
