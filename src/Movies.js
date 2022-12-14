import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom'

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="loading">Loading...</div>
    )
  }

  return (
    <section className="movies-container">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className='movie-item'>
            <article className='movie-list'>
              <div className="image-container">
                <img src={poster === 'N/A' ? url : poster} alt={title} />
              </div>
              <div className="movie-info">
                <h3>{title}</h3>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )

      })}
    </section>
  )
}

export default Movies