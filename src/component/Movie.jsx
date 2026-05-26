import React from 'react'

function Movie({ movie }) {
  return (
    <div>
      <h2 className='text-xl font-bold mb-2'>{movie.name}</h2>

      {
        movie.image && (
          <img className='w-2xs rounded-lg'
            src={movie.image.medium}
            alt={movie.name}
          />
        )
      }
    </div>
  )
}

export default Movie