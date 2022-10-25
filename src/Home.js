import React from 'react';
import HeroPage from './HeroPage';
import Movies from './Movies';

const Home = () => {
  return (
    <main className='main-background'>
      <HeroPage/>
      <Movies/>

    </main>
  )
}

export default Home