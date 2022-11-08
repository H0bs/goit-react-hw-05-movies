import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getActors } from "Api/api";
import { List, ListItem, Name } from "./MovieCast.styled";

const MovieCast = () => {
  const { movieId } = useParams();
  const [ actors, setActors ] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchActors = async () => {

      try {
        const response = await getActors(movieId, controller);
        setActors(response);

      } catch (error) {
        console.log(error);
      }
    }
    fetchActors();
    return () => {
      controller.abort();
    }
  }, [movieId])

  return (
    <List>
      {actors.length &&
        actors.map(actor => {
          return (
            <ListItem key = {actor.id}>
              {actor.profile_path ?
                <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name} /> :
                <img src="https://via.placeholder.com/185x278?text=No+profile+photo"
                  alt={actor.name} />}
              <Name>{actor.name}</Name>
              <p>Character: {actor.character}</p>
            </ListItem>
          )
        })
      }
    </List>
  )
}

export default MovieCast;