import React, { useContext } from 'react'

import Movies from './Movies'
import Search from './Search'

const Home = () => {
    
  return (
    <div>
      <div>
        <Search/>
       <Movies/>
      </div>
    </div>
  )
}

export default Home
