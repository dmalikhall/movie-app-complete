import React from 'react';
import Form from './SearchForm';


const HeroPage = () => {
  return (
    <main className='hero-container'>
        <div className="hero-image">
            <img src="https://source.unsplash.com/AtPWnYNDJnM" alt="hero"  />
            <Form/>
        </div>
    </main>
  )
}

export default HeroPage