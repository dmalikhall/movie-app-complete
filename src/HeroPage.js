import React from 'react';
import Form from './SearchForm';
import Movies from './Movies';


const HeroPage = () => {
  return (
    <main className='hero-container'>
      <div className="hero-image">
        <img src="https://source.unsplash.com/AtPWnYNDJnM" alt="hero" />
        <Form />
      </div>
      <div className='movie-background'>
        <Movies />

      </div>

    </main>
  )
}

export default HeroPage