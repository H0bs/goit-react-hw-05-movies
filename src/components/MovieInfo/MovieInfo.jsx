import PropTypes from 'prop-types';
import { Section, Container, List, ListItem } from "./MovieInfo.styled";

const MovieInfo = ( {movie} ) => {

  return (
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
    </>
  )
}

export default MovieInfo;

MovieInfo.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      )
    })
  ).isRequired,
}