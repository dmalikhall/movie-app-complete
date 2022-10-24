import React from 'react';
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
        <h1>There has been an error</h1>
        <Link to='/'>
          <button className='error-back-to-home'>back to movies</button>
        </Link>
    </div>
  )
}

export default Error