import React from 'react'
import { Link } from 'react-router'
import './index.css'

function MovieItem({ eachMovie }) {
  const { id, title, posterPath } = eachMovie
  const movieId = id

  return (
    <Link to={`/movies-app/movies/${movieId}`}>
      <li className="min-w-[180px] sm:min-w-[220px] md:min-w-[240px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img
          src={posterPath}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </li>
    </Link>
  )
}

export default MovieItem
