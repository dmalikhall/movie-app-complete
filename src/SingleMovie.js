import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faClock, faStar } from '@fortawesome/free-solid-svg-icons'

const SingleMovie = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchSingleMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === 'False') {
      setError({ show: true, msg: data.Error });
      setLoading(false)

    } else {
      setMovie(data);
      setLoading(false)
    }
    console.log(data);


  }

  useEffect(() => {
    fetchSingleMovie(`${API_ENDPOINT}&i=${movieId}`)

  }, [movieId])

  if (isLoading) {
    return (
      <div className="loading">Loading...</div>
    )
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to='/'>
          <button className='error-back-to-home'>back to movies</button>
        </Link>
      </div>
    )
  }

  const { Poster: poster, Title: title, Plot: plot, Genre: genre, Runtime: duration, Ratings: rating } = movie;

  return (
    <section className='single-movie_container'>
      <header>
        <h4>Movie Details</h4>
      </header>

      <section className='main-details'>
        <div className="sm-image">
          <img src={poster} alt={title} />
        </div>

        <article className="movie-specifics">
          <div className="genre">
            <FontAwesomeIcon icon={faVideo} className='font-icon' />
            <p className='title'>Genre</p>
            <p>{genre}</p>
          </div>
          <div className="duration">
            <FontAwesomeIcon icon={faClock} className='font-icon' />
            <p className='title'>Duration</p>

            <p>{duration}</p>

          </div>
          <div className="ratings">
            <FontAwesomeIcon icon={faStar} className='font-icon' />
            <p className='title'>Ratings</p>
            <p>{rating[1].Value}</p>
          </div>
        </article>
      </section>


      <div className="sm-info">
        <div className="title">
          <h2>{title}</h2>

        </div>
        <div className="description">
          <p>{plot}</p>
        </div>
      </div>

      <div className="back-home-button">
        <Link to='/'>
          <button className='btm-btn'>back to movies</button>
        </Link>
      </div>



    </section>
  )
}

export default SingleMovie