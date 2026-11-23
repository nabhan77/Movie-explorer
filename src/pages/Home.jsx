import React, { useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import MovieCard from '../components/Moviecard'
import { getMovies } from '../services/allAPI'

function Home() {

    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSearch = async () => {

        if (!search.trim()) {
            setError('Please enter a movie name')
            setMovies([])
            return
        }

        try {
            setLoading(true)
            setError('')

            const result = await getMovies(search)

            if (result.data.Response === "True") {
                setMovies(result.data.Search)
            }
            else {
                setMovies([])
                setError('Movie not found. Try searching for another movie!')
            }

        }
        catch (err) {
            setError('Something went wrong. Please try again!')
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="home-container container text-center">
            <h1 style={{fontSize:"50px"}} className="hero-title">
    Discover Your Next Favourite Movie
  </h1>

  <p className="hero-subtitle">
    Explore thousands of movies and find your next cinematic experience.
  </p>
            <div className="container my-5">

            <h1 className="text-center fw-bold mb-4">
                Explore Your Favourite Movies 🎬
            </h1>

            <div className="d-flex justify-content-center mb-5">

                <input
                    type="text"
                    className="form-control w-50 me-2"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />

                <button className="btn btn-danger" onClick={handleSearch}>
                    Search
                </button>

            </div>

            {loading &&
                <div className="text-center">
                    <Spinner animation="border" variant="danger" />
                    <p>Searching movies...</p>
                </div>
            }

            {error && <h5 className="text-center text-danger">{error}</h5>}

            <Row>
                {movies.map(movie => (
                    <Col key={movie.imdbID} lg={3} md={4} sm={6} xs={12} className="mb-4">
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>

        </div>
        </div>
    )
}

export default Home