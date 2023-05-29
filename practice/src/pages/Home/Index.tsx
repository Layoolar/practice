import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <p>Home Page</p>
      <Link to="/products">Go to Products</Link>
    </div>
  )
}

export default Home
