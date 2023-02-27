import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Movies() {
  useEffect(() => {
    fetchShows()
  }, [])

  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    const response = await fetch('https://api.tvmaze.com/shows');
    const shows = await response.json()
    console.log(shows);
    setShows(shows)
  }

  const regex = /(<([^>]+)>)/gi
  return (
    <div>
      <h1>Shows Page</h1>
      <div>
        {shows.map((show) => (
          <p key={show.id}>
          <Link to={`/movies/${show.id}`}>
          <h1>{show.name}</h1>
          <br></br><br></br>
          <img src={show.image?.medium}></img>
          <br></br><br></br>
          <p>{show.summary?.replace(regex, "")}</p>
          </Link> 
          </p>
        ))}
      </div>
    </div>
  )
}

export default Movies
