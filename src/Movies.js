import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'
import CircularProgress from '@mui/material/CircularProgress';
const Movies = () => {
    const {movie,isLoading} = useGlobalContext();
    if(isLoading){
        return (
            <div >
                <div className='loading'><CircularProgress color="primary" /></div>
            </div>
        )
    }
  return (
    <>
    <section className="movie-page" >
        <div className='container grid grid-4-col'>
       {
           movie.map((curMovie)=>{
               const {imdbID,Poster,Title,Type,Year}=curMovie;
               const movieName=Title.substring(0,15);
               return <NavLink to={`movies/${imdbID}`} key={imdbID}>
                    <div className='card'>
                        <div className='card-info'>
                            <h2>{movieName.length >=15 ? `${movieName}...` : movieName}</h2>
                            <img src={Poster} alt={imdbID} srcSet=''/>
                        </div>
                    </div>
               </NavLink>
           })
       }
        </div>
    </section>
        
     
    </>
  )
}

export default Movies
