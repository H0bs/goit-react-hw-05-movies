import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMovieById } from "../../Api/api";
import ButtonBack from "components/ButtonBack/ButtonBack";
import { Container, List, ListItem, Section } from "./MovieDetails.styled";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        const response = await getMovieById(movieId, controller);
        setMovie(response);
      } catch (error) {
        console.log(error);
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
      {movie && (
        <>
        <Section>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <Container>
            <h1>{movie.title} {`(${parseInt(movie.release_date)})`}</h1>
              <p>{`User Score: ${movie.vote_average}`}</p>
            <h2>Overview</h2>
              <p>{movie.overview}</p>
            <h3>Genres</h3>
            <List>
              {movie.genres &&
                movie.genres.map(({ id, name }) => {
                  return <ListItem key={id}>{name}</ListItem>
                })
              }
            </List>
          </Container>
        </Section>
        <Container>
          <ul>
            <b>Additional information</b>
            <li>
              <Link to ="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Review</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
        </>
      )}
    </>
  )
}

export default MovieDetails;