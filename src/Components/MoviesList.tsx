


import {TMovie} from '../helpers/types/typesMovie'

interface IMovieList {
    movie: TMovie
}

const MoviesList = ({movie}:any) => {
  return (
    <div className="absolute bg-gray-600">
      {/* <h1>{movie.overview}</h1> */}
      {movie && (
        <>
        <div className='h-96 w-96 absolute z-10'>
        <h1 className='flex justify-center'>ad</h1>
        </div>
          <img
            className="object-cover w-screen h-screen opacity-60"
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt=""
          />
        </>
      )}
    </div>
  );
}

export default MoviesList