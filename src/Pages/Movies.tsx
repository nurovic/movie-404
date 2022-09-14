import { SetStateAction, useEffect, useState } from "react";
import MoviesList from "../Components/MoviesList";
import { useAppDispatch, useAppSelector } from "../Redux";
import { fetchMovies } from "../features/movieSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { TMovie } from "../helpers/types/typesMovie";



const Movies = () => {
  const movies = useAppSelector((state) => state.movie.movies);
  const dispatch = useAppDispatch();
  const [clicked, setClicked] = useState<TMovie>();

  const clickedMovie = (movie: SetStateAction<TMovie | undefined>) => {
    setClicked(movie);
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);


  return (
    <div>
      <MoviesList movie={clicked ? clicked : movies[0]} />
      <Swiper
        slidesPerView={10}
        spaceBetween={20}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="absolute h-screen mySwiper"
      >
        {movies?.map((movie:TMovie) => (
          <SwiperSlide className="px-8 " key={movie.id}>
            <img
              className="border-2 absolute bottom-8 opacity-80"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt="movie.poster_path"
              onClick={() => clickedMovie(movie)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Movies;
