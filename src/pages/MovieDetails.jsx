import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMovieDetails } from '../services/allAPI'
import { Spinner } from 'react-bootstrap'

function MovieDetails() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchDetails()
    }, [id])

    const fetchDetails = async () => {
        try {
            setLoading(true)
            setError('')
            const result = await getMovieDetails(id)
            if (result.data.Response === "True") {
                setMovie(result.data)
            }
            else {
                setError(result.data.Error)
            }
        }
        catch (err) {
            setError('Unable to fetch movie details')
        }
        finally {
            setLoading(false)
        }
    }
    if (loading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }
    if (error) {
        return <h4 className="text-center text-danger mt-5">{error}</h4>
    }

    return (
        <div className="container my-5">
            <Link to="/" className="btn btn-dark mb-4">
                ⬅ Back to Search
            </Link>

            <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <img
                        src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x450?text=No+Poster"}
                        alt={movie.Title}
                        className="img-fluid rounded shadow"
                    />
                </div>

                <div className="col-md-8">
                    <h1 className="fw-bold">{movie.Title}</h1>

                    <h5 className="text-danger mb-3">
                        ⭐ IMDb Rating: {movie.imdbRating}
                    </h5>
                    <p><b>Release Year:</b> {movie.Year}</p>
                    <p><b>Genre:</b> {movie.Genre}</p>
                    <p><b>Director:</b> {movie.Director}</p>
                    <p><b>Actors:</b> {movie.Actors}</p>
                    <p><b>Runtime:</b> {movie.Runtime}</p>
                    <p><b>Language:</b> {movie.Language}</p>
                    <p><b>Awards:</b> {movie.Awards}</p>
                    <h4 className="mt-4">Plot Summary</h4>
                    <p>{movie.Plot}</p>
                </div>
            </div>
        </div>
    )
}
export default MovieDetails