import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {

    return (
        <div className="movie-card">

  <Link to={`/details/${movie.imdbID}`}>
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x400?text=No+Poster"}
      alt={movie.Title}
    />
  </Link>

  <div className="movie-card-body">
    <h5>{movie.Title}</h5>
    <p>{movie.Year}</p>
  </div>

</div>
    )
}

export default MovieCard