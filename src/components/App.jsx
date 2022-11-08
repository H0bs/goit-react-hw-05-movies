import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

export const App = () => {
  const Home = lazy(() => import("../pages/Home"));
  const Movies = lazy(() => import("../pages/Movies"));
  const MovieDetails = lazy(() => import("../pages/MovieDetails"));
  const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
  const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
  const MovieReview = lazy(() => import("./MovieReview/MovieReview"))
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReview />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
