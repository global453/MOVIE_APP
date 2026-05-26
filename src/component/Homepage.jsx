import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'

function Homepage() {

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {

    axios.get('https://api.tvmaze.com/shows')
      .then(response => {
        setMovies(response.data)
      })
      .catch(error => {
        console.log(error)
      })

  }, [pageNo])
  const prevPageClickHandler = () => {
    if(pageNo <= 1){
      return;
    }
    setPageNo((pageNo) => pageNo - 1);
  }
  const nextPageClickHandler = () =>{
    if(pageNo >= 1000){
      return;
    }
    setPageNo((pageNo) => pageNo + 1);

  }

  return (
    <section className="pb-20">

      <h1 className="text-2xl w-[70vw] mx-auto my-10 font-bold mb-4">
        Popular Movies
      </h1>

      <section className="w-[70vw] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-20">
        {
          movies.slice(0, 20).map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))
        }
      </section>
      <section className ='flex justify-center my-5 gap-10'>
        <button onClick = {prevPageClickHandler} className='border rounded-md px-8 py-1 hover:cursor-pointer'>Previous</button>
        <button onClick = {nextPageClickHandler} className='border rounded-md px-8 py-1 hover:cursor-pointer'>Next</button>
      </section>

    </section>
  )
}

export default Homepage