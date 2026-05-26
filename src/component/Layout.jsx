import React, { Fragment } from 'react'
import { Link } from 'react-router'

const Layout = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className='bg-blue-400'>
        <nav>
          <ul className='flex items-center py-5 px-10'>
            <li className='text-white me-4' text-2xl><Link to="/">TMDB Clone</Link></li>
            <li className='text-white me-4'><Link to="/watchlist">Watchlist</Link></li>
            <li className='text-white me-4'><Link to="#">People</Link></li>
            <li className='text-white me-4'><Link to="#">More</Link></li>
          </ul>
        </nav>
      </header>
      <main className="grow">
        {props.children}
      </main>
      <footer className='bg-blue-500 text-center py-10 text-white'>
        <p>&copy; 2024 TMDB Clone. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Layout
