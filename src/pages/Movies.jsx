import { getMovieByName } from "Api/api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Form, Input } from "./pages.styled";

const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("name") ?? "";

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: search });
    setSearch('');
  }

  const handleInput = e => {
    setSearch(e.target.value.toLowerCase());
  }

  useEffect(() => {
    if (searchQuery === '') return;
  
  const controller = new AbortController();

  const fetchFoundMovies = async () => {
    try {
      const response = await getMovieByName(searchQuery, controller);

      if (response.length === 0) {
        return alert("Movie not found")
      } 
      setMovies(response);
    } catch (error) {
      console.log(error);
    }
  }
    fetchFoundMovies();
    return () => {
      controller.abort();
    } 
}, [searchQuery])
  
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="search"
          value={search}
          placeholder="Enter a movie name"
          onChange={handleInput}
        />
        <Button type="submit">Search</Button>
      </Form>
      <MoviesList movies={movies} />
    </>
  )
}

export default Movies;