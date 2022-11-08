import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMoviesById } from "../Api/api";
import ButtonBack from "components/ButtonBack/ButtonBack";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { AdditionalInfo } from "components/AdditionalInfo/AdditionalInfo";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        const response = await getMoviesById(movieId, controller);
        setMovies(response);
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies();
    return () => {
      controller.abort();
    }
  }, [movieId])

  return (
    <>
      <ButtonBack/>
      <MovieInfo movie={movie} />
      <AdditionalInfo/>
    </>
  )
}

export default MovieDetails;