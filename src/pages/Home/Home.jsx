import React from "react";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "Api/api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Title } from "./Home.styled";


const Home = () => {
  const [ trendMovies, setTrendMovies ] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {

      try {
        const response = await getTrendingMovies(controller);
        setTrendMovies(response);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();

    return () => {
      controller.abort();
    }

  }, [])
  
  return (
    <>
      <Title>Trending today</Title>
      <MoviesList movies={trendMovies}/>
    </>
  )
}

export default Home;