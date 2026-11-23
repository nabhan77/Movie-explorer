import axios from 'axios'

const BASE_URL='https://www.omdbapi.com/'
const API_KEY='af55e318'

// Search Movies
export const getMovies=async(movie) =>{
    return await axios.get(`${BASE_URL}?s=${movie}&apikey=${API_KEY}`)
}

// Get Movie Details
export const getMovieDetails =async(id) =>{
    return await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`)
}