


import {TMovie} from '../helpers/types/typesMovie'

interface IMovieList {
    movie: TMovie
}

const MoviesList = ({movie}:IMovieList) => {
  return (
    <div className="absolute bg-gray-600">
      {movie && (
        <>
        <div className='h-96 w-1/2 ml-24 text-white mt-12 absolute z-10'>
        <h1 className='flex justify-center text-5xl font-bold mb-4'>{movie.original_title}</h1>
        <p className='flex justify-center text-xl mb-6'>{movie.overview}</p>
        <button className='text-xl font-bold border rounded-lg p-2' >Detail...</button>
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