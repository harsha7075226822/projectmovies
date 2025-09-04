import TrendingMovies from '../TrendingMovies'
import Originals from '../Originals'
import MovieBanner from '../MovieBanner'

function MovieHomepage() {

  

  return (
    <div className='bg-black h-auto'>
      <MovieBanner />
      <TrendingMovies />
      <Originals />
    </div>
  )
}

export default MovieHomepage

