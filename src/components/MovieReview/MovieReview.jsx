import { getReview } from "Api/api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { List } from "./MovieReview.styled";

const MovieReview = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchReviews = async () => {
      try {
        const response = await getReview(movieId, controller);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();

    return () => {
      controller.abort();
    }
  }, [movieId])
  return (
    <List>
      {reviews.length ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          )
        })
          ) : (
          <p>Sorry, we have not reviews</p>
      )}
    </List>
  )
}

export default MovieReview;
