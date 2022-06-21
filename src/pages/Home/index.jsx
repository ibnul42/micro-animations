import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='py-5 flex flex-wrap gap-3'>
        <Link to="/button-pulse" className='px-3 py-2 border border-orange-600 rounded-md'>Button Pulse</Link>
    </div>
  )
}

export default Home