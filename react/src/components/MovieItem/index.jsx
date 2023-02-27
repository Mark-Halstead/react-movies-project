import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ShowItem() {
  const { id } = useParams();
  useEffect(() => {
    fetchShows()
  }, [])

  const [show, setShow] = useState({ name: '', summary: '', image: "" });

  const fetchShows = async () => {
    const fetchShow = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await fetchShow.json()
    setShow(show.data)
  }

  return (
    <>
        <h1>{show.name}</h1>
        <h1>{show.summary}</h1>
        <img src={show.image}></img>
    </>
  )
}

export default ShowItem
