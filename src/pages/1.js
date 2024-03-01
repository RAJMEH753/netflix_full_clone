import React, { useEffect, useState } from 'react';

const App = () => {

  const[movies, setMovies] = useState([])
  
  const getMovies = async() => {
    try{
      await fetch("https://api.themoviedb.org/3/discover/movie?api_key=ac6c2275c02f1a8d534daeedfcb0eea7")
      .then(res => res.json())
      .then(json => setMovies(json.results))
    }catch(err){
      console.log(err)
    }        
  }

  useEffect(() => {
    getMovies()
  }, [])
    
  return(
    <div>
      {movies.map((data) => {
        return<>
          <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} />
        </>
      })}
    </div>
  )
}

export default App