import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router'
import Loading from '../Loading'
import MovieItem from '../MovieItem'

function PopularPage() {
  const [popularMovies,setPopularMovies] = useState([])
  const [isLoading,setIsloading] = useState(true);


  const jwtToken = Cookies.get("jwt_token")
  useEffect(()=> {
    const PopularMoviesData = async () => {
      const apiUrl = "https://apis.ccbp.in/movies-app/popular-movies";
      const options = {
        method:"GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      }
      const response = await fetch(apiUrl,options)
      if (response.ok===true) {
        const data = await response.json();
        const ArrayMoviesData = data.results
        const FormattedMoviesData = ArrayMoviesData.map(eachMovie => ({
          id:eachMovie.id,
          title:eachMovie.title,
          posterPath:eachMovie.poster_path,
          backdropPath:eachMovie.backdrop_path
        }))
        setPopularMovies(FormattedMoviesData)
        setIsloading(false)
      }
    }
    PopularMoviesData();
  },[jwtToken])

  if (jwtToken===undefined) {
    return <Navigate to="/login" />
  }
  return (
    <div>
        <div className="bg-black min-h-screen  px-10 py-10">
          {isLoading? <Loading height="h-[600px]"  />: 
          <div className="w-full max-w-6xl mx-auto px-4 my-10">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {popularMovies.map((movie) => (
                <MovieItem key={movie.id} eachMovie={movie} />
              ))}
            </ul>
          </div>}
        </div>
    </div>
  )
}

export default PopularPage
