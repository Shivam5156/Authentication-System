import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='relative min-h-screen flex flex-col items-center'>

      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src="/bg_img.png"
          alt="background"
          className='w-full h-full object-cover'
        />
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/70'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 w-full'>
        <Navbar />
        <Header />
      </div>

    </div>
  )
}

export default Home