import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom"

const AdditionalInfo = () => {
  return (
    <>
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
    </>
  )
}

export default AdditionalInfo;