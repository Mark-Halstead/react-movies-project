import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ShowItem() {
  const { id } = useParams();
  useEffect(() => {
    fetchShows()
    console.log(show);
  }, [])

  const [show, setShow] = useState([]);

  const fetchShows = async () => {
    const fetchShow = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const data = await fetchShow.json()
    setShow(data)
  }

  const regex = /(<([^>]+)>)/gi

  return (
    <>
    
    {show && 
        <>
        <h1>{show.name}</h1>
        <img src={show.image?.medium}></img>
        <p>{show.summary?.replace(regex, "")}</p> 
        </>}
    
    </>
  )
}

export default ShowItem
