import React from 'react'
import Layout from './component/Layout'
import { Routes, Route } from 'react-router-dom'
import Homepage from './component/Homepage'
import WatchList from './component/WatchList'

const App = () => {
  return (
    <Layout>
      {/* <h1 className="text-3xl font-bold">IMDB Clone</h1> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>

    </Layout>
  )
}

export default App