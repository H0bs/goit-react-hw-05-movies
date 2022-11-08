import { Section, Container, List, ListItem } from "./MovieInfo.styled";

const MovieInfo = ({title, poster_path, release_date, vote_average, overview, genres}) => {
  return (
    <>
      <Section>

        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
        <Container>
          <h1>{title} {`(${parseInt(release_date)})`}</h1>
          <p>{`User Score: ${vote_average}`}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <List>
            {genres &&
              genres.map(({ id, name }) => {
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



