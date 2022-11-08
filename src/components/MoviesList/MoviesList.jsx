import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { List, ListItem } from "./MovieList.syled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({id, title}) => (
        <ListItem key={id}>
          <Link to={`/movies/${id}`} state={{from: location}}>
            <p>{title}</p>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  )
}