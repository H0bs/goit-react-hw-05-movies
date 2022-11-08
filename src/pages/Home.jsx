import React from "react";
import { getTrendingMovies } from "Api/api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import { Title } from "./pages.styled";

const Home = () => {
  const [ trendMovies, setTrendMovies ] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      if (trendMovies === []) {
        return;
      }

      try {
        const response = await getTrendingMovies(controller);
        setTrendMovies(response);
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies();
    return () => {
      controller.abort();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <Title>Trending today</Title>
      <MoviesList movies={trendMovies}/>
    </>
  )
}

export default Home;